"use client";

import React from "react";
import PreviewImage from "@/components/ui/PreviewImage";
import IconLayout from "@/components/ui/icons/IconLayout";
import CircleMark from "@/components/ui/icons/CircleMark";
import UploadFile from "@/components/ui/Form/UploadFile";
import { Typography, Box, Grid, IconButton, Tooltip } from "@mui/material";
import type { UploadImagesProps } from "@/types/form.type";
import { uploadMultipleImage, removeImage } from "@/utils/image.utils";

const UploadImages = React.memo(function UploadImages({
  images,
  setImages,
}: UploadImagesProps) {
  return (
    <Box>
      <Grid container sx={{ mb: 2 }}>
        {images?.map((img, idx) => (
          <Grid key={idx} size={{ xs: 6, md: 3, lg: 2.4 }}>
            <PreviewImage image={img}>
              <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                <Tooltip title="Remove">
                  <IconButton
                    onClick={() => setImages([...removeImage(images, idx)])}
                  >
                    <IconLayout className="h-6 w-6 cursor-pointer text-white hover:opacity-80">
                      <CircleMark />
                    </IconLayout>
                  </IconButton>
                </Tooltip>
              </Box>
            </PreviewImage>
          </Grid>
        ))}
      </Grid>
      <UploadFile
        name="images"
        multiple={true}
        accept="image/*"
        buttonText="Upload Images"
        onChange={(e) =>
          setImages((prev) =>
            [...prev, ...uploadMultipleImage(e, 5)].slice(0, 5),
          )
        }
      >
        <Typography variant="body1">max of 5 images</Typography>
      </UploadFile>
    </Box>
  );
});

export default UploadImages;
