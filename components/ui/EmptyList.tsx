"use client";

import IconLayout from "@/components/ui/icons/IconLayout";
import Ban from "@/components/ui/icons/Ban";

export default function EmptyList({ message }: { message: string }) {
  return (
    <div className="flex flex-col h-[500px] items-center justify-center italic font-semibold text-center">
      <IconLayout className="opacity-5 h-72 w-72">
        <Ban />
      </IconLayout>
      <p className="opacity-30">{message}</p>
    </div>
  );
}
