import { OptionsProps } from "@/types/form.type";
import { RoomDTOInput } from "@/features/room/schema";
import { OutlinedInputProps } from "@mui/material";

export interface FieldConfig extends OutlinedInputProps {
  name: keyof RoomDTOInput;
  label: string;
  width: "Full" | "Half";
  type: string;
  options?: OptionsProps[];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export type Room = {
  id: string | number;
  name: string;
  price: number | string;
  discount: number | string;
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
