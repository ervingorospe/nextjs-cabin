"use client";

import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import usePageQuery from "@/hooks/usePageQuery";

export default function StatusFilter() {
  const { query, setQuery } = usePageQuery("status");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setQuery(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={query || "all"}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all" sx={{ width: "100px" }}>
        All
      </ToggleButton>
      <ToggleButton value="available" sx={{ width: "100px" }}>
        Available
      </ToggleButton>
      <ToggleButton value="not available" sx={{ width: "100px" }}>
        Not Available
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
