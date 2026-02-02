import { cn } from "@/utils/styles";
import { GenericProps } from "@/app/_lib/_types/generic.type";

export default function ButtonIcon({
  children,
  className,
  ...rest
}: GenericProps) {
  return (
    <button className={cn("cursor-pointer", className)} {...rest}>
      {children}
    </button>
  );
}
