import { OptionsProps } from "@/types/form.type";
import { RoomDTOInput } from "@/features/room/schema";

export interface FieldConfig extends React.InputHTMLAttributes<HTMLInputElement> {
  name: keyof RoomDTOInput;
  label: string;
  width: "Full" | "Half"; // 👈 Match the Form.Row prop exactly
  type: string;
  options?: OptionsProps[];
}
