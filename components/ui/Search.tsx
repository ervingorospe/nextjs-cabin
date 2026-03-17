"use client";

import Form from "@/components/ui/Form";
import { useForm } from "react-hook-form";
import { IconButton } from "@mui/material";
import MagnifyingGlass from "@/components/ui/icons/MagnifyingGlass";
import IconLayout from "@/components/ui/icons/IconLayout";
import usePageQuery from "@/hooks/usePageQuery";

export default function Search() {
  const { query, setQuery } = usePageQuery("search");

  const methods = useForm<{ search: string }>({
    mode: "onChange",
    defaultValues: {
      search: typeof query === "string" ? query : "",
    },
  });

  const onSubmit = (data: { search: string }) => {
    setQuery(data.search);
  };

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.Input
        sx={{ width: { xs: "100%", md: "350px" } }}
        name="search"
        id="outlined-adornment-search"
        type="text"
        placeholder="Search Room"
        endIcon={
          <IconButton type="submit">
            <IconLayout className="h-5 w-5">
              <MagnifyingGlass />
            </IconLayout>
          </IconButton>
        }
      />
    </Form>
  );
}
