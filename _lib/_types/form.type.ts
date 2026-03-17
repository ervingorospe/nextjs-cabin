import { ImageUploadType } from "@/types/image.type";
import {
  FieldValues,
  Path,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";
import { OutlinedInputProps, StackProps } from "@mui/material";

export interface FormProps<
  TInput extends FieldValues,
  TOutput extends FieldValues,
> extends Omit<StackProps, "onSubmit" | "children"> {
  children: React.ReactNode;
  methods: UseFormReturn<TInput, unknown, TOutput>; // Link Input and Output
  onSubmit: SubmitHandler<TOutput>; // Handler receives the Output
}

export type OptionsProps = {
  label: string;
  value: string | number;
};

export interface FormInputProps<T extends FieldValues> extends Omit<
  OutlinedInputProps,
  "name"
> {
  label?: string;
  name: Path<T>;
  placeholder?: string;
  options?: OptionsProps[];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
