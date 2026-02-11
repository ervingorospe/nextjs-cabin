"use client";
import { useState } from "react";

export default function Tooltip({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      className="relative z-20"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute -bottom-7 left-0 text-sm bg-black opacity-80 px-2 py-1 z-100 rounded-md">
          {title}
        </div>
      )}
    </div>
  );
}
