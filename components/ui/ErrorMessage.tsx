import Warning from "@/components/ui/icons/Warning";

export default function ErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return (
    <div className="mt-1 text-sm flex items-center text-red-400">
      <Warning className="mt-[1px] h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}
