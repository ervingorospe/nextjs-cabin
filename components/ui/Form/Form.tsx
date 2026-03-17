"use client";

import { FormProvider, FieldValues } from "react-hook-form";
import type { FormProps } from "@/types/form.type";
import { Stack } from "@mui/material";

export default function Form<
  TInput extends FieldValues,
  TOutput extends FieldValues,
>({ children, methods, onSubmit, ...rest }: FormProps<TInput, TOutput>) {
  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        sx={{ width: "100%", zIndex: 0 }}
        onSubmit={methods.handleSubmit(onSubmit)}
        {...rest}
      >
        {children}
      </Stack>
    </FormProvider>
  );
}
