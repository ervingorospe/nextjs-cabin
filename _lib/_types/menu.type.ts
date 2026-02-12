export interface ListProps {
  label: string;
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
