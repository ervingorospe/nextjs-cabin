"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function usePageQuery(paramName: string = "page") {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawValue: unknown = searchParams.get(paramName) ?? "";

  const query = paramName === "page" ? Number(rawValue ?? 1) : (rawValue ?? "");

  const setQuery = useCallback(
    (value: string | number) => {
      const params = new URLSearchParams(searchParams.toString());

      if (paramName === "page" && Number(value) < 1) return;

      if (value === "" || value === null) {
        params.delete(paramName);
      } else {
        params.set(paramName, String(value));
      }

      router.push(`?${params.toString()}`);
    },
    [router, searchParams, paramName],
  );

  return {
    query,
    setQuery,
  };
}
