"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  FormProvider,
  FieldValues,
  useFormContext,
  Controller,
} from "react-hook-form";
import CircleMark from "@/components/ui/icons/CircleMark";
import Tooltip from "@/components/ui/Tooltip";
import PreviewImage from "@/components/ui/PreviewImage";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { uploadMultipleImage, removeImage } from "@/utils/image.utils";
import { cn } from "@/_lib/_utils/styles";
import type {
  FormInputProps,
  UploadFileProps,
  UploadImagesProps,
  FormProps,
} from "@/types/form.type";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "indent",
  "link",
];

function Form<TInput extends FieldValues, TOutput extends FieldValues>({
  children,
  methods,
  onSubmit,
  ...rest
}: FormProps<TInput, TOutput>) {
  return (
    <FormProvider {...methods}>
      <form
        {...rest}
        className="flex flex-wrap w-full gap-4"
        onSubmit={methods.handleSubmit(onSubmit)} // Optional: makes usage cleaner
      >
        {children}
      </form>
    </FormProvider>
  );
}

const Row = React.memo(function Row({
  children,
  width,
}: {
  children: React.ReactNode;
  width: "Half" | "Full";
}) {
  const divWidth =
    width === "Half" ? "min-w-full md:min-w-[calc(50%-0.5rem)]" : "w-full";

  return <div className={cn("flex flex-col ", divWidth)}>{children}</div>;
});

const FormInput = React.memo(function FormInput<T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
  options,
  ...rest
}: FormInputProps<T>) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<T>();
  const error = errors?.[name]?.message as string | undefined;

  let content = (
    <input
      type={type}
      {...register(name, { valueAsNumber: type === "number" })}
      {...rest}
      className="mt-1 p-2 border border-foreground rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-primary-200"
    />
  );

  if (type === "select") {
    content = (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            className="mt-1 bg-header w-full p-2 border border-foreground rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-primary-200"
          >
            {options?.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    );
  }

  if (type === "richText") {
    content = (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="quill-container placeholder-white">
            <ReactQuill
              theme="snow"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder={placeholder}
              className="mt-1 rounded-md text-foreground"
              modules={modules}
              formats={formats}
            />
          </div>
        )}
      />
    );
  }

  return (
    <>
      <label className="font-semibold">{label}</label>
      {content}
      {error && <ErrorMessage message={error} />}
    </>
  );
});

function UploadFile({ children, buttonText, ...rest }: UploadFileProps) {
  return (
    <div className="relative flex items-center gap-2">
      <input type="file" id="fileUpload" hidden {...rest} />
      <label
        htmlFor="fileUpload"
        className="btn btn-sm text-white bg-secondary border border-secondary hover:bg-transparent hover:text-secondary transition duration-300 ease-in-out"
      >
        {buttonText}
      </label>
      {children}
    </div>
  );
}

const UploadImages = React.memo(function UploadImages({
  images,
  setImages,
}: UploadImagesProps) {
  return (
    <div className="w-full">
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
        name="images"
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
});

Form.UploadFile = UploadFile;
Form.UploadImages = UploadImages;
Form.Row = Row;
Form.Input = FormInput;

export default Form;
