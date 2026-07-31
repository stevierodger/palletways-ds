import type { ReactNode } from "react";
import "./Chip.css";

export type ChipTone = "red" | "yellow" | "green" | "blue" | "purple";
export type ChipIconKind = "dot" | "alert" | "check" | "cross" | "none";

export type ChipProps = {
  label: string;
  tone?: ChipTone;
  /** Show leading status glyph. Default true. */
  showLeading?: boolean;
  /** Built-in Figma Icons set glyph. Default "dot". Ignored if leadingIcon is set. */
  icon?: ChipIconKind;
  leadingIcon?: ReactNode;
  className?: string;
};

function ChipGlyph({ kind }: { kind: Exclude<ChipIconKind, "none"> }) {
  if (kind === "dot") {
    return (
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" aria-hidden="true">
        <path
          d="M3 6C2.45 6 1.94773 5.86591 1.49318 5.59773C1.03864 5.325 0.675 4.96136 0.402273 4.50682C0.134091 4.05227 0 3.55 0 3C0 2.44545 0.134091 1.94318 0.402273 1.49318C0.675 1.03864 1.03864 0.677273 1.49318 0.409091C1.94773 0.136364 2.45 0 3 0C3.55455 0 4.05682 0.136364 4.50682 0.409091C4.96136 0.677273 5.32273 1.03864 5.59091 1.49318C5.86364 1.94318 6 2.44545 6 3C6 3.55 5.86364 4.05227 5.59091 4.50682C5.32273 4.96136 4.96136 5.325 4.50682 5.59773C4.05682 5.86591 3.55455 6 3 6Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (kind === "check") {
    return (
      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
        <path
          d="M0 3.08523L0.647727 2.42045L2.89773 4.63636L7.55114 0L8.21591 0.664773L2.89773 5.96591L0 3.08523Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (kind === "cross") {
    return (
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" aria-hidden="true">
        <path
          d="M0.664773 5.88068L0 5.21591L5.23295 0L5.89773 0.664772L0.664773 5.88068ZM5.23295 5.88068L0 0.664772L0.664773 0L5.89773 5.21591L5.23295 5.88068Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
      <path
        d="M0 9.81818L5.77841 0L11.5568 9.81818H0ZM5.77841 8.71875C5.99716 8.71875 6.18324 8.64205 6.33665 8.48864C6.4929 8.33239 6.57102 8.14489 6.57102 7.92614C6.57102 7.70739 6.4929 7.52131 6.33665 7.3679C6.18324 7.21165 5.99716 7.13352 5.77841 7.13352C5.55966 7.13352 5.37216 7.21165 5.21591 7.3679C5.0625 7.52131 4.9858 7.70739 4.9858 7.92614C4.9858 8.14489 5.0625 8.33239 5.21591 8.48864C5.37216 8.64205 5.55966 8.71875 5.77841 8.71875ZM5.25852 6.17045H6.2983L6.375 3.27273H5.18182L5.25852 6.17045Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Status chip with optional leading glyph.
 * Figma: Chip (1:98) — Property 1 RED|YELLOW|GREEN|BLUE|PURPLE
 */
export function Chip({
  label,
  tone = "red",
  showLeading = true,
  icon = "dot",
  leadingIcon,
  className = "",
}: ChipProps) {
  const glyph =
    leadingIcon ??
    (showLeading && icon !== "none" ? <ChipGlyph kind={icon} /> : null);

  return (
    <span className={`pw-chip pw-chip--${tone} ${className}`.trim()}>
      {glyph ? <span className="pw-chip__icon">{glyph}</span> : null}
      <span className="pw-chip__label">{label}</span>
    </span>
  );
}
