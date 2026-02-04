import { GenericProps } from "@/app/_lib/_types/generic.type";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { useImperativeHandle, useState } from "react";
import "@/styles/modal.style.scss";
import { ModalHandle } from "@/types/modal.type";

interface ModalProps extends GenericProps {
  ref: React.Ref<ModalHandle>;
}

export function Modal({ children, ref }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    setOpen() {
      setIsOpen((val: boolean) => !val);
    },
  }));

  return (
    <div
      onClick={() => setIsOpen((val) => !val)}
      className={`backrop bg-black/10 backdrop-blur-[4px] top-0 left-0  w-[100%] h-[100%] z-100 ${isOpen ? "fixed" : "hidden"}`}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`modal bg-header w-[350px] md:w-[700px] max-h-[700px] overflow-y-auto max-w-[700px] rounded-md text-foreground ${!isOpen ? "hidden" : "block"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function Header({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="sticky top-0 left-0 bg-header p-4 md:p-6">
      <div className="flex justify-between items-center  text-xl md:text-2xl">
        <h3 className="tracking-wider font-bold">{title}</h3>
        <ButtonIcon onClick={onClose}>
          <span>&times;</span>
        </ButtonIcon>
      </div>
      <hr className="my-4 border-foreground-900 dark:border-gray-700" />
    </div>
  );
}

export function Body({ children }: GenericProps) {
  return <div className="px-4 md:px-6 pb-12">{children}</div>;
}

export function Footer({ children }: GenericProps) {
  return (
    <div>
      <hr className="my-4 border-foreground-900 dark:border-gray-700" />
      {children}
    </div>
  );
}
