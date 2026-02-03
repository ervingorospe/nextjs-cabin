import { ImageUploadType } from "@/types/image.type";
import {
  FieldValues,
  Path,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";

export interface FormProps<
  TInput extends FieldValues,
  TOutput extends FieldValues,
> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  children: React.ReactNode;
  methods: UseFormReturn<TInput, unknown, TOutput>; // Link Input and Output
  onSubmit: SubmitHandler<TOutput>; // Handler receives the Output
}

export interface FormInputProps<T extends FieldValues> extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name"
> {
  label?: string;
  error?: string;
  name: Path<T>;
  placeholder?: string;
}

export interface UploadFileProps extends React.FormHTMLAttributes<HTMLInputElement> {
  multiple: boolean;
  accept?: string;
  buttonText: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UploadImagesProps {
  images: ImageUploadType[];
  setImages: React.Dispatch<React.SetStateAction<ImageUploadType[]>>;
}
