import { z } from "zod";

interface FieldConfig extends React.InputHTMLAttributes<HTMLInputElement> {
  name: keyof RoomInput;
  label: string;
  width: "Full" | "Half"; // 👈 Match the Form.Row prop exactly
  type: string;
}

export const roomField: FieldConfig[] = [
  {
    name: "name",
    label: "Room Name",
    type: "text",
    width: "Full",
    maxLength: 25,
  },
  {
    name: "price",
    label: "Original Price",
    type: "number",
    width: "Half",
  },
  {
    name: "discount",
    label: "Discount Percentage",
    type: "number",
    width: "Half",
  },
  {
    name: "details",
    label: "More Details",
    type: "richText",
    width: "Full",
    placeholder: "ex: 2 bedroom, 1 CR",
  },
];

export const roomSchema = z.object({
  name: z
    .string("Provide a name")
    .min(1, "Provide name")
    .max(50, "Maximum of 50 letters"),
  price: z.number("Provide a number only").default(0),
  discount: z.number("Provide a number only").default(0).optional(),
  details: z.string().optional(),
});

export type RoomInput = z.input<typeof roomSchema>;
export type RoomOutput = z.output<typeof roomSchema>;
