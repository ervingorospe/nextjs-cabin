import { z } from "zod";
import { OptionsProps } from "@/types/form.type";

interface FieldConfig extends React.InputHTMLAttributes<HTMLInputElement> {
  name: keyof RoomInput;
  label: string;
  width: "Full" | "Half"; // 👈 Match the Form.Row prop exactly
  type: string;
  options?: OptionsProps[];
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
    name: "bedroom",
    label: "How many bedroom?",
    type: "number",
    width: "Half",
  },
  {
    name: "cr",
    label: "How many bathroom?",
    type: "number",
    width: "Half",
  },
  {
    name: "adult",
    label: "Adult Capacity",
    type: "number",
    width: "Half",
  },
  {
    name: "child",
    label: "Children Capacity",
    type: "number",
    width: "Half",
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
    name: "discount_from",
    label: "Discount Start",
    type: "date",
    width: "Half",
  },
  {
    name: "discount_to",
    label: "Discount End",
    type: "date",
    width: "Half",
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    width: "Full",
    options: [
      { label: "Available", value: "available" },
      { label: "Not Available", value: "not available" },
    ],
  },
  {
    name: "details",
    label: "More Details",
    type: "richText",
    width: "Full",
    placeholder: "ex: with free wifi, with breakfast",
  },
];

const today = new Date();
today.setHours(23, 59, 59, 999);

// Helper schema to handle empty strings from form inputs correctly
const optionalDateSchema = z.preprocess(
  (arg) => {
    // If the input is an empty string, treat it as undefined (optional)
    if (typeof arg === "string" && arg === "") return undefined;
    return arg;
  },
  z.coerce
    .date()
    .optional()
    .refine((date) => !date || date >= today, {
      message: "Date must be today or later",
    }),
);

export const roomSchema = z
  .object({
    name: z
      .string("Provide a name")
      .min(1, "Provide name")
      .max(50, "Maximum of 50 letters"),
    price: z.number("Provide a number only").default(0),
    status: z.string().default("available"),
    discount: z.number("Provide a number only").default(0).optional(),
    details: z.string().optional(),
    bedroom: z.number("Provide a number only").default(1),
    cr: z.number("Provide a number only").optional(),
    adult: z.number("Provide a number only").default(1),
    child: z.number("Provide a number only").default(0).optional(),
    discount_from: optionalDateSchema,
    discount_to: optionalDateSchema,
  })
  .refine(
    (data) => {
      if (!data.discount_from || !data.discount_to) return true;

      return data.discount_to > data.discount_from;
    },
    {
      message: "End date must be after the start date",
      path: ["discount_to"],
    },
  );

export type RoomInput = z.input<typeof roomSchema>;
export type RoomOutput = z.output<typeof roomSchema>;
