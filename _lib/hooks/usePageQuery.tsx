"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function usePageQuery(paramName: string = "page") {
  const router = useRouter();
  const searchParams = useSearchParams();

  let query: unknown = searchParams.get(paramName) ?? "";

  if (paramName === "page") {
    query = Number(searchParams.get(paramName) ?? 1);
  }

  const setQuery = useCallback(
    (q: unknown) => {
      if (paramName === "page") {
        if (Number(q) < 1) return;
      }

      const params = new URLSearchParams(searchParams.toString());
      params.set(paramName, String(q));

      router.push(`?${params.toString()}`);
    },
    [router, searchParams, paramName],
  );

  return {
    query,
    setQuery,
  };
}
