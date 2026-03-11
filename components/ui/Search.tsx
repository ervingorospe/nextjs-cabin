"use client";

import Form from "@/components/ui/Form";
import { useForm } from "react-hook-form";
import { IconButton } from "@mui/material";
import MagnifyingGlass from "@/components/ui/icons/MagnifyingGlass";
import IconLayout from "@/components/ui/icons/IconLayout";

export default function Search() {
  const methods = useForm({
    mode: "onChange",
  });
  const onSubmit = () => {
    alert("testing");
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
