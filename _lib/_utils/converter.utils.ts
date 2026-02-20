const convertSvgToURL = (svgString: string) => {
  if (!svgString) return "";

  const cleansedSvg = svgString.replace(/\n/g, "").replace(/>\s+</g, "><");
  const encodedSvg = encodeURIComponent(cleansedSvg)
    .replace(/%20/g, " ")
    .replace(/%3D/g, "=")
    .replace(/%3A/g, ":")
    .replace(/%2F/g, "/");

  return `url('data:image/svg+xml,${encodedSvg}')`;
};

export { convertSvgToURL };
