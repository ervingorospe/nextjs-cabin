import { cn } from "@/utils/styles";
import { GenericProps } from "@/app/_lib/_types/generic.type";

interface ButtonIconProps extends GenericProps {
  onClick: () => void;
}

export default function ButtonIcon({
  className,
  children,
  ...rest
}: ButtonIconProps) {
  return (
    <button className={cn("cursor-pointer", className)} {...rest}>
      {children}
    </button>
  );
}
