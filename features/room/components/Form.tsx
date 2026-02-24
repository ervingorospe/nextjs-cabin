"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
// components
import Form from "@/components/ui/Form";
import { Button, Stack } from "@mui/material";
// types
import { ImageUploadType } from "@/types/image.type";
import {
  RoomDTOInput,
  RoomDTOOutput,
  RoomDTO,
  roomSchema,
} from "@/features/room/DTO";
import { variants } from "@/types/button.type";
import { colors } from "@/types/color.type";
import { FieldConfig } from "@/features/room/types";
import { roomField } from "@/features/room/fields";

export default function RoomForm({ data }: { data: RoomDTO }) {
  const [images, setImages] = useState<ImageUploadType[]>([]);

  const methods = useForm<RoomDTOInput, unknown, RoomDTOOutput>({
    mode: "onChange",
    resolver: zodResolver(roomSchema),
    defaultValues: data as RoomDTOInput,
  });

  const { reset, clearErrors } = methods;

  const onSubmit: SubmitHandler<RoomDTOOutput> = async (data) => {
    console.log({ ...data, images });
  };

  const onClear = () => {
    reset();
    clearErrors();
    setImages([]);
  };

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {roomField?.map((field: FieldConfig) => (
        <Form.Row width={field.width} key={field.name}>
          <Form.Input {...field} />
        </Form.Row>
      ))}

      <Form.UploadImages images={images} setImages={setImages} />

      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ width: "100%", mt: 4 }}
      >
        <Button
          type="button"
          onClick={onClear}
          variant={variants.OUTLINED}
          color={colors.SECONDARY}
        >
          Clear
        </Button>
        <Button type="submit" variant={variants.CONTAINED}>
          Submit
        </Button>
      </Stack>
    </Form>
  );
}
