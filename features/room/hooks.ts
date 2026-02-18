import usePageQuery from "@/hooks/usePageQuery";

export function useTableFilter() {
  const { query: page, setQuery: setPage } = usePageQuery("page");
  const { query: search, setQuery: setSearch } = usePageQuery("search");
  const { query: status, setQuery: setStatus } = usePageQuery("status");
  const { query: order, setQuery: setOrder } = usePageQuery("order");

  return {
    page,
    search,
    status,
    order,
    setPage,
    setSearch,
    setStatus,
    setOrder,
  };
}
