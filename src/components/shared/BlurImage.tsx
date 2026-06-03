import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /**
   * The aspect ratio of the image (width / height).
   * Example: 16/9, 4/3, 1/1.
   * If provided, wraps image in Shadcn AspectRatio.
   */
  ratio?: number;
  containerClassName?: string;
}

export function BlurImage({
  src,
  alt,
  ratio,
  className,
  containerClassName,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  ...props
}: BlurImageProps) {
  // If loading is eager (usually LCP), skip blur to paint immediately on the main thread.
  const isEager = loading === "eager";
  const [isLoading, setLoading] = useState(!isEager);

  // The actual image element with the blur/scale transition logic
  const ImageElement = (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={cn(
        "h-full w-full object-cover transition-all duration-700 ease-in-out",
        // Loading: Scale up (to hide blur edges), Blur, Grayscale
        isLoading
          ? "scale-110 blur-xl grayscale opacity-0"
          : "scale-100 blur-0 grayscale-0 opacity-100",
        className
      )}
      onLoad={() => { if (!isEager) setLoading(false); }}
      {...props}
    />
  );

  // Wrapper Logic:
  // We wrap in a div with overflow-hidden to clip the "scale-110" effect during loading.
  // We apply a background color so the user sees a placeholder while loading.

  if (ratio) {
    return (
      <div className={cn("w-full overflow-hidden rounded-md bg-muted", containerClassName)}>
        <AspectRatio ratio={ratio}>
          {ImageElement}
        </AspectRatio>
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-hidden rounded-md bg-muted", containerClassName)}>
      {ImageElement}
    </div>
  );
}