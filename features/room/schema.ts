import { z } from "zod";

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

const roomResponseSchema = roomSchema.extend({
  id: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type RoomDTOInput = z.input<typeof roomSchema>;
export type RoomDTOOutput = z.output<typeof roomSchema>;
export type RoomDTO = z.infer<typeof roomResponseSchema>;
