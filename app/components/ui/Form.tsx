"use client";
import { useState } from "react";
import { ImageUploadType } from "@/app/_lib/_types/image.type";
import CircleMark from "@/components/ui/icons/CircleMark";
import Tooltip from "@/components/ui/Tooltip";
import PreviewImage from "@/components/ui/PreviewImage";
import { MethodProps } from "@/app/_lib/_types/generic.type";
import { uploadMultipleImage, removeImage } from "@/utils/image.utils";

function Form({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

interface UploadFileProps extends MethodProps {
  multiple: boolean;
  accept?: string;
  buttonText: string;
  children?: React.ReactNode;
}

function UploadFile({ children, buttonText, ...rest }: UploadFileProps) {
  return (
    <div className="relative flex items-center gap-2">
      <input type="file" id="fileUpload" hidden {...rest} />
      <label
        htmlFor="fileUpload"
        className="btn bg-secondary border border-secondary hover:bg-transparent hover:text-secondary transition duration-300 ease-in-out"
      >
        {buttonText}
      </label>
      {children}
    </div>
  );
}

function UploadImages() {
  const [images, setImages] = useState<ImageUploadType[]>([]);

  return (
    <div>
      <div className="grid mb-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {images?.map((img, idx) => (
          <PreviewImage image={img} key={idx}>
            <div className="absolute right-0 top-0">
              <Tooltip title="Remove">
                <div onClick={() => setImages([...removeImage(images, idx)])}>
                  <CircleMark className="h-6 w-6 cursor-pointer text-white hover:opacity-80" />
                </div>
              </Tooltip>
            </div>
          </PreviewImage>
        ))}
      </div>
      <UploadFile
        multiple={true}
        accept="image/*"
        buttonText="Upload Images"
        onChange={(e) =>
          setImages((prev) =>
            [...prev, ...uploadMultipleImage(e, 5)].slice(0, 5),
          )
        }
      >
        <span>max of 5 images</span>
      </UploadFile>
    </div>
  );
}

Form.UploadFile = UploadFile;
Form.UploadImages = UploadImages;

export default Form;
