import { Colors } from "./color.type";

export interface ListProps {
  label: string;
  icon: React.ReactNode;
  color: Colors;
  action?: () => void;
}

export interface ULProps {
  lists: ListProps[];
  render: (menu: ListProps) => React.ReactNode;
  open: boolean;
}

export interface MenuProps {
  menu: ListProps;
}
