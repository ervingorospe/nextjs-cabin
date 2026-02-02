interface ImageProps {
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

type ImageUploadType = {
  file: File;
  url: string;
};

export type { ImageProps, ImageUploadType };
