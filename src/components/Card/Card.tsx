import type { ReactNode } from "react";
import { ExternalLink } from "../Icon/ExternalLink";
import { Image } from "../Image";
import { Trustpilot } from "../Trustpilot";
import contentHero from "./assets/content-hero.jpg";
import flagIcon from "./assets/flag.svg";
import shareIcon from "./assets/share.svg";
import thumbsUpIcon from "./assets/thumbs-up.svg";
import "./Card.css";

export type CardVariant = "content-card" | "trustpilot-card";

export type CardProps = {
  variant?: CardVariant;
  title?: string;
  showTitle?: boolean;
  body?: string;
  showBody?: boolean;
  strongText?: string;
  showStrongText?: boolean;
  imageSrc?: string;
  showImage?: boolean;
  leadingIcon?: ReactNode;
  showLeadingIcon?: boolean;
  tags?: ReactNode;
  showTags?: boolean;
  callToAction?: ReactNode;
  showCallToAction?: boolean;
  /** Trustpilot-card */
  reviewerInitials?: string;
  reviewerName?: string;
  reviewDate?: string;
  rating?: number;
  reviewBody?: string;
  seeMoreLabel?: string;
  onSeeMore?: () => void;
  onUseful?: () => void;
  onShare?: () => void;
  onFlag?: () => void;
  className?: string;
};

const DEFAULT_BODY =
  "We're proud to have the most Trustpilot reviews in the pallet delivery industry, showing that real customers trust us for consistent, on-time service. Our friendly drivers, responsive support team and dependable network are what make Palletways Online the top-rated choice for UK pallet shipping.";

const DEFAULT_REVIEW =
  "Excellent delivery by Marcello! Thank you! Only criticism is for the depot system. I had to call the depot a few times to find out when the delivery was expected as I hadn't received any update...";

/**
 * Marketing / review card.
 * Figma: card (2283:8404) — content-card | trustpilot-card
 */
export function Card({
  variant = "content-card",
  title = "Industry-leading Trustpilot reviews",
  showTitle = true,
  body = DEFAULT_BODY,
  showBody = true,
  strongText = DEFAULT_BODY,
  showStrongText = false,
  imageSrc = contentHero,
  showImage = false,
  leadingIcon,
  showLeadingIcon = false,
  tags,
  showTags = false,
  callToAction,
  showCallToAction = false,
  reviewerInitials = "HW",
  reviewerName = "Helen Worrall",
  reviewDate = "7 days ago",
  rating = 4,
  reviewBody = DEFAULT_REVIEW,
  seeMoreLabel = "See more",
  onSeeMore,
  onUseful,
  onShare,
  onFlag,
  className = "",
}: CardProps) {
  if (variant === "trustpilot-card") {
    const filled = Math.max(0, Math.min(5, Math.round(rating)));

    return (
      <article
        className={`pw-card pw-card--trustpilot ${className}`.trim()}
      >
        <div className="pw-card__reviewer">
          <div className="pw-card__avatar" aria-hidden="true">
            <span className="pw-card__avatar-text">{reviewerInitials}</span>
          </div>
          <div className="pw-card__reviewer-meta">
            <p className="pw-card__reviewer-name">{reviewerName}</p>
            <p className="pw-card__reviewer-date">{reviewDate}</p>
          </div>
        </div>

        <div
          className="pw-card__rating"
          role="img"
          aria-label={`${filled} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Trustpilot
              key={i}
              tone={i < filled ? "positive" : "neutral"}
              className="pw-card__star"
            />
          ))}
        </div>

        <div className="pw-card__review">
          <p className="pw-card__review-body">
            {reviewBody}{" "}
            <button
              type="button"
              className="pw-card__see-more-inline"
              onClick={onSeeMore}
            >
              {seeMoreLabel}
            </button>
          </p>
          <div className="pw-card__see-more-row">
            <button
              type="button"
              className="pw-card__see-more"
              onClick={onSeeMore}
            >
              {seeMoreLabel}
              <ExternalLink size={16} />
            </button>
          </div>
        </div>

        <div className="pw-card__actions">
          <button
            type="button"
            className="pw-card__action"
            onClick={onUseful}
          >
            <img src={thumbsUpIcon} alt="" width={10} height={10} />
            Useful
          </button>
          <button type="button" className="pw-card__action" onClick={onShare}>
            <img src={shareIcon} alt="" width={10} height={10} />
            Share
          </button>
          <button
            type="button"
            className="pw-card__action pw-card__action--icon"
            onClick={onFlag}
            aria-label="Flag review"
          >
            <img src={flagIcon} alt="" width={10} height={10} />
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className={`pw-card pw-card--content ${className}`.trim()}>
      {showImage ? (
        <Image
          src={imageSrc}
          alt=""
          aspect="landscape"
          className="pw-card__image"
        />
      ) : null}

      <div className="pw-card__content">
        <div className="pw-card__header">
          <div className="pw-card__title-row">
            {showLeadingIcon && leadingIcon ? (
              <span className="pw-card__leading-icon">{leadingIcon}</span>
            ) : null}
            {showTitle ? <h3 className="pw-card__title">{title}</h3> : null}
          </div>
          {showTags && tags ? (
            <div className="pw-card__tags">{tags}</div>
          ) : null}
        </div>

        {showStrongText ? (
          <p className="pw-card__strong">{strongText}</p>
        ) : null}
        {showBody ? <p className="pw-card__body">{body}</p> : null}
      </div>

      {showCallToAction && callToAction ? (
        <div className="pw-card__cta">{callToAction}</div>
      ) : null}
    </article>
  );
}
