"use client";

import Warning from "@/components/ui/icons/Warning";
import IconLayout from "@/components/ui/icons/IconLayout";

export default function ErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return (
    <div className="mt-1 text-sm flex items-center text-red-400">
      <IconLayout className="mt-[1px] h-4 w-4">
        <Warning />
      </IconLayout>

      <p>{message}</p>
    </div>
  );
}
