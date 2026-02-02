import { cn } from "@/utils/styles";
import { GenericProps, MethodProps } from "@/app/_lib/_types/generic.type";

interface ButtonIconPorps extends GenericProps, MethodProps {}

export default function ButtonIcon({
  children,
  className,
  ...rest
}: ButtonIconPorps) {
  return (
    <button className={cn("cursor-pointer", className)} {...rest}>
      {children}
    </button>
  );
}
