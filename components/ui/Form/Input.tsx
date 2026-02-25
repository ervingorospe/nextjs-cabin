"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  FieldValues,
  useFormContext,
  Controller,
  ControllerProps,
} from "react-hook-form";
import {
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import ErrorMessage from "@/components/ui/ErrorMessage";
import type { FormInputProps } from "@/types/form.type";
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

const FormInput = React.memo(function FormInput<T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
  options,
}: FormInputProps<T>) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<T>();
  const error = errors?.[name]?.message as string | undefined;

  let content = <T extends FieldValues>({
    field,
  }: Parameters<ControllerProps<T>["render"]>[0]) => (
    <TextField
      value={field.value || ""}
      type={type}
      {...register(name, { valueAsNumber: type === "number" })}
      variant="outlined"
      placeholder={placeholder}
    />
  );

  if (type === "select") {
    content = ({ field }) => (
      <Select
        value={field.value?.toLowerCase() ?? ""}
        onChange={field.onChange}
        onBlur={field.onBlur}
      >
        {options?.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    );
  }

  if (type === "amount") {
    content = ({ field }) => (
      <OutlinedInput
        value={field.value || ""}
        type="number"
        {...register(name, { valueAsNumber: type === "number" })}
        startAdornment={<InputAdornment position="start">₱</InputAdornment>}
      />
    );
  }

  if (type === "percentage") {
    content = ({ field }) => (
      <OutlinedInput
        value={field.value || ""}
        type="number"
        {...register(name, { valueAsNumber: type === "number" })}
        endAdornment={<InputAdornment position="start">%</InputAdornment>}
      />
    );
  }

  if (type === "richText") {
    content = ({ field }) => (
      <Box
        className="quill-container"
        sx={{
          "& .ql-picker-label": {
            color: (theme) => theme.palette.secondary.main,
            fontSize: 14,
          },
          "& .ql-toolbar": {
            border: "1px solid",
            borderColor: (theme) => theme.palette.secondary.main,
            borderRadius: "6px 6px 0 0 !important",
          },
          "& .ql-editor": {
            color: (theme) => theme.palette.secondary.main,
            fontSize: "14px",
            minHeight: "200px",
          },
          "& .ql-editor::before": {
            color: (theme) => `${theme.palette.secondary.main} !important`,
            opacity: "0.5 !important",
            fontStyle: "normal",
          },
          "& .ql-fill, .ql-stroke": {
            color: (theme) => theme.palette.secondary.main,
            stroke: (theme) => theme.palette.secondary.main,
          },
          "& .ql-container": {
            border: "1px solid",
            borderColor: (theme) => theme.palette.secondary.main,
            borderTop: "none",
            borderRadius: "0 0 6px 6px",
            transition: (theme) =>
              theme.transitions.create(["border-color", "box-shadow"]),
            "&:hover": {
              borderColor: "text.primary",
            },
            "&.ql-snow.ql-container:focus-within": {
              borderColor: "primary.main",
              borderWidth: "2px",
              marginTop: "-1px",
            },
          },
        }}
      >
        <ReactQuill
          theme="snow"
          value={field.value || ""}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder={placeholder}
          modules={modules}
          formats={formats}
        />
      </Box>
    );
  }

  return (
    <>
      <Typography variant="subtitle1" className="font-semibold">
        {label}
      </Typography>
      <Controller name={name} control={control} render={content} />
      {error && <ErrorMessage message={error} />}
    </>
  );
});

export default FormInput;
