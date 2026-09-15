import { cn } from "cn";
import Image from "next/image";
import { ComponentProps } from "react";

interface PostImageProps extends ComponentProps<"img"> {
  imageFileName: string;
}

export async function PostImage({
  imageFileName,
  width,
  height,
  className,
  ...props
}: PostImageProps) {
  const { default: image } = await import(`/images/${imageFileName}`);
  return (
    <Image
      src={image}
      alt="Imagem postada"
      width={Number(width)}
      height={Number(height)}
      className={cn(`border rounded-2xl shadow-2xl`, className)}
      {...props}
    />
  );
}
