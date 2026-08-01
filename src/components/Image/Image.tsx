import "./Image.css";

export type ImageAspect = "landscape" | "square" | "portrait";

export type ImageProps = {
  src: string;
  alt?: string;
  aspect?: ImageAspect;
  className?: string;
};

/**
 * Aspect-ratio image frame.
 * Figma: image (2283:9012)
 */
export function Image({
  src,
  alt = "",
  aspect = "landscape",
  className = "",
}: ImageProps) {
  return (
    <div className={`pw-image pw-image--${aspect} ${className}`.trim()}>
      <img src={src} alt={alt} className="pw-image__media" />
    </div>
  );
}
