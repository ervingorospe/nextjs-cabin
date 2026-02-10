"use client";
import React, { useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import LeftCaret from "@/components/ui/icons/LeftCaret";
import RightCaret from "@/components/ui/icons/RightCaret";
import ButtonIcon from "./ButtonIcon";

const Pagination = React.memo(function Pagination({
  count,
}: {
  count: number;
}) {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page") ?? "1";
  const currentPage = Number(pageParam);
  const totalPages = Math.ceil(count / 10);

  if (currentPage < 1 || currentPage > totalPages) {
    notFound();
  }

  const totalNext = Math.ceil(totalPages / 5);
  const calculatedNext = Math.floor((currentPage - 1) / 5);
  console.log((currentPage - 1) / 5);

  return (
    <div className="flex justify-between items-center">
      <p>Total Results: {count} items</p>
      <PaginationTabs
        totalPages={totalPages}
        totalNext={totalNext}
        calculatedNext={calculatedNext}
        currentPage={currentPage}
      />
    </div>
  );
});

function PaginationTabs({
  totalPages,
  totalNext,
  calculatedNext,
  currentPage,
}: {
  totalPages: number;
  totalNext: number;
  calculatedNext: number;
  currentPage: number;
}) {
  const [next, setNext] = useState<number>(calculatedNext);
  return (
    <div className="flex items-center justify-end gap-1 text-sm">
      <ButtonIcon onClick={() => setNext((n) => n - 1)} disabled={next < 1}>
        <LeftCaret
          className={`h-4 w-4 mr-1 ${next < 1 ? "disabled" : "text-secondary cursor-pointer hover:opacity-50"}`}
        />
      </ButtonIcon>
      <div className="max-w-[220px] overflow-hidden">
        <div
          className="flex items-center gap-1 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${next * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }, (_, i) => {
            const pageNum = ++i;

            return (
              <ButtonIcon
                onClick={() => {}}
                className={`cursor-pointer py-1 w-10 shrink-0 text-center rounded-md border border-secondary ${currentPage === pageNum ? "bg-secondary text-white" : "hover:text-white hover:bg-secondary"}`}
                key={i}
                disabled={currentPage === pageNum}
              >
                {pageNum}
              </ButtonIcon>
            );
          })}
        </div>
      </div>

      <ButtonIcon
        onClick={() => setNext((n) => n + 1)}
        disabled={next === totalNext || totalPages < 5}
      >
        <RightCaret
          className={`h-4 w-4 mr-1 ${next === totalNext || totalPages < 5 ? "disabled" : "text-secondary cursor-pointer hover:opacity-50"}`}
        />
      </ButtonIcon>
    </div>
  );
}

export default Pagination;
