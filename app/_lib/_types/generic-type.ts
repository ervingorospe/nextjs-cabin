interface SizeProps {
  size?: "sm" | "md" | "lg";
}

interface ImageProps {
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

interface MethodProps {
  onClick?: () => void;
}

interface StyleProps {
  className?: string;
  color?: string;
  level?: number;
}

export type { SizeProps, MethodProps, StyleProps, ImageProps };
