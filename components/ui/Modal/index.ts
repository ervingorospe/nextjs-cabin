import dynamic from "next/dynamic";
import * as ModalParts from "./Modal";

const DynamicModal = dynamic(
  () => import("@/components/ui/Modal/Modal").then((m) => m.default),
  { ssr: false },
);

const Modal = Object.assign(DynamicModal, {
  Header: ModalParts.Header,
  Body: ModalParts.Body,
  Footer: ModalParts.Footer,
});

export default Modal;
