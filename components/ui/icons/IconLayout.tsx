"use client";
import React from "react";

export default function IconLayout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
    >
      {children}
    </svg>
  );
}
