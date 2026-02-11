"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function usePageQuery(paramName: string = "page") {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get(paramName) ?? 1);

  const setPage = useCallback(
    (page: number) => {
      if (page < 1) return;

      const params = new URLSearchParams(searchParams.toString());
      params.set(paramName, String(page));

      router.push(`?${params.toString()}`);
    },
    [router, searchParams, paramName],
  );

  return {
    page: currentPage,
    setPage,
  };
}
