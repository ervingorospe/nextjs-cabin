import { ImageUploadType } from "@/_lib/_types/image.type";

export const uploadMultipleImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  limit: number,
) => {
  const files = e.target.files;

  if (!files) return [];

  const newImagePreviews: ImageUploadType[] = Array.from(files).map((file) => ({
    file,
    url: URL.createObjectURL(file),
  }));

  return newImagePreviews.slice(0, limit);
};

export const removeImage = (images: ImageUploadType[], idx: number) => {
  if (!images) return [];
  const newImages = [...images];
  URL.revokeObjectURL(newImages[idx].url); // clean up memory in browser
  newImages.splice(idx, 1);

  return newImages;
};
