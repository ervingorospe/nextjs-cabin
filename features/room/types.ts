import { OptionsProps } from "@/types/form.type";
import { RoomDTOInput } from "@/features/room/schema";

export interface FieldConfig extends React.InputHTMLAttributes<HTMLInputElement> {
  name: keyof RoomDTOInput;
  label: string;
  width: "Full" | "Half"; // 👈 Match the Form.Row prop exactly
  type: string;
  options?: OptionsProps[];
}

export type Room = {
  id: string | number;
  name: string;
  price: number;
  discount: number;
  status: string;
};

export type Rooms = {
  rooms: Room;
};

export const actions = {
  VIEW: "view",
  STATUS: "status",
  DELETE: "delete",
} as const;

export type Action = (typeof actions)[keyof typeof actions];
