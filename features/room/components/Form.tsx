"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { ImageUploadType } from "@/types/image.type";
import {
  roomSchema,
  CreateRoomDTO,
  RoomDTO,
  roomField,
} from "@/schema/roomSchema";
import Form from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import { variants } from "@/types/button.type";
import { colors } from "@/types/color.type";

export default function RoomForm({ data }: { data: RoomDTO }) {
  const [images, setImages] = useState<ImageUploadType[]>([]);

  const methods = useForm<CreateRoomDTO>({
    mode: "onChange",
    resolver: zodResolver(roomSchema),
    defaultValues: data as CreateRoomDTO,
  });

  const { reset, clearErrors } = methods;

  const onSubmit: SubmitHandler<CreateRoomDTO> = (data) => {
    console.log({ ...data, images });
  };

  const onClear = () => {
    reset();
    clearErrors();
    setImages([]);
  };

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {roomField?.map((field) => (
        <Form.Row width={field.width} key={field.name}>
          <Form.Input {...field} />
        </Form.Row>
      ))}

      <Form.UploadImages images={images} setImages={setImages} />

      <div className="flex w-full justify-end gap-2">
        <Button
          type="button"
          onClick={onClear}
          variant={variants.OUTLINE}
          color={colors.SECONDARY}
        >
          Clear
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
