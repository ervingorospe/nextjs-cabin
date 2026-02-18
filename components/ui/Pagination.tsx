"use client";
import React, { useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import LeftCaret from "@/components/ui/icons/LeftCaret";
import RightCaret from "@/components/ui/icons/RightCaret";
import IconLayout from "@/components/ui/icons/IconLayout";
import ButtonIcon from "./ButtonIcon";
import usePageQuery from "@/hooks/usePageQuery";

export default function Pagination({ count }: { count: number }) {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page") ?? "1";
  const currentPage = Number(pageParam);
  const totalPages = Math.ceil(count / 20);

  if (currentPage < 1 || currentPage > totalPages) {
    notFound();
  }

  let totalNext = Math.floor(totalPages / 5);
  const calculatedNext = Math.floor((currentPage - 1) / 5);

  if (totalPages % 5 === 0 && totalNext > 0) {
    totalNext -= 1;
  }

  return (
    <div className="flex-inline md:flex justify-between items-center gap-2">
      <p className="text-right md:text-left">Total Results: {count} items</p>
      <PaginationTabs
        nextCount={totalNext || totalPages < 5}
        calculatedNext={calculatedNext}
      >
        <PageNumbers totalPages={totalPages} currentPage={currentPage} />
      </PaginationTabs>
    </div>
  );
}

function PaginationTabs({
  nextCount,
  calculatedNext,
  children,
}: {
  nextCount: number | boolean;
  calculatedNext: number;
  children: React.ReactNode;
}) {
  const [next, setNext] = useState<number>(calculatedNext);

  return (
    <div className="flex items-center justify-end gap-1 text-sm">
      <ButtonIcon onClick={() => setNext((n) => n - 1)} disabled={next < 1}>
        <IconLayout
          className={`h-4 w-4 mr-1 ${next < 1 ? "disabled" : "text-secondary cursor-pointer hover:opacity-50"}`}
        >
          <LeftCaret />
        </IconLayout>
      </ButtonIcon>
      <div className="max-w-[220px] overflow-hidden">
        <div
          className="flex items-center gap-1 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${next * 100}%)`,
          }}
        >
          {children}
        </div>
      </div>

      <ButtonIcon
        onClick={() => setNext((n) => n + 1)}
        disabled={next === nextCount}
      >
        <IconLayout
          className={`h-4 w-4 mr-1 ${next === nextCount ? "disabled" : "text-secondary cursor-pointer hover:opacity-50"}`}
        >
          <RightCaret />
        </IconLayout>
      </ButtonIcon>
    </div>
  );
}

const PageNumbers = React.memo(function PageNumbers({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const { setQuery: setPage } = usePageQuery();

  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNum = i + 1;

        return (
          <ButtonIcon
            onClick={() => setPage(pageNum)}
            className={`cursor-pointer py-1 w-10 shrink-0 text-center rounded-md border border-secondary ${currentPage === pageNum ? "bg-secondary text-white" : "hover:text-white hover:bg-secondary"}`}
            key={i}
            disabled={currentPage === pageNum}
          >
            {pageNum}
          </ButtonIcon>
        );
      })}
    </>
  );
});
