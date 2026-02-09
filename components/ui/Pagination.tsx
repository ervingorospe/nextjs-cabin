"use client";
import React, { useState } from "react";
import LeftCaret from "@/components/ui/icons/LeftCaret";
import RightCaret from "@/components/ui/icons/RightCaret";
import ButtonIcon from "./ButtonIcon";

const Pagination = React.memo(function Pagination({
  count,
}: {
  count: number;
}) {
  const [next, setNext] = useState<number>(0);
  const totalPages = Math.ceil(count / 10);
  const totalNext = Math.ceil(totalPages / 5);

  return (
    <div className="flex justify-between items-center">
      <p>Total Results: {count} items</p>

      <div className="flex items-center justify-end gap-1 text-sm text-white">
        <ButtonIcon onClick={() => setNext((n) => n - 1)} disabled={next < 1}>
          <LeftCaret
            className={`h-4 w-4 mr-1 ${next < 1 ? "disabled" : "text-secondary cursor-pointer hover:opacity-50"}`}
          />
        </ButtonIcon>
        <div className="max-w-[220px] overflow-hidden">
          <div
            className="flex items-center gap-1 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${next * 80}%)`,
            }}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <ButtonIcon
                onClick={() => {}}
                className="cursor-pointer py-1 w-10 shrink-0 text-center rounded-md border border-secondary hover:bg-secondary"
                key={i}
              >
                {++i}
              </ButtonIcon>
            ))}
          </div>
        </div>

        <ButtonIcon
          onClick={() => setNext((n) => n + 1)}
          disabled={next === totalNext}
        >
          <RightCaret
            className={`h-4 w-4 mr-1 ${next === totalNext ? "disabled" : "text-secondary cursor-pointer hover:opacity-50"}`}
          />
        </ButtonIcon>
      </div>
    </div>
  );
});

export default Pagination;
