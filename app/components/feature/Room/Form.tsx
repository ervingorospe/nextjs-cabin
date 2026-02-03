"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { ImageUploadType } from "@/types/image.type";
import {
  roomSchema,
  RoomInput,
  RoomOutput,
  roomField,
} from "@/schema/roomSchema";
import Form from "@/components/ui/Form";
import Button from "@/components/ui/Button";

export default function RoomForm() {
  const [images, setImages] = useState<ImageUploadType[]>([]);

  const methods = useForm<RoomInput, unknown, RoomOutput>({
    mode: "onChange",
    resolver: zodResolver(roomSchema),
  });

  const onSubmit: SubmitHandler<RoomOutput> = (data) => {
    console.log({ ...data, images });
  };

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {roomField?.map((field) => (
        <Form.Row width={field.width} key={field.name}>
          <Form.Input {...field} />
        </Form.Row>
      ))}

      <Form.UploadImages images={images} setImages={setImages} />

      <div className="flex w-full justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
