import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leadingIcon,
  trailingIcon,
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={`pw-button pw-button--${variant} pw-button--${size} ${className}`.trim()}
      disabled={isDisabled}
      data-loading={loading || undefined}
      {...rest}
    >
      <span className="pw-button__inner">
        {loading && <span className="pw-button__spinner" aria-hidden="true" />}
        {!loading && leadingIcon && (
          <span className="pw-button__icon pw-button__icon--leading">{leadingIcon}</span>
        )}
        <span className="pw-button__label">{children}</span>
        {!loading && trailingIcon && (
          <span className="pw-button__icon pw-button__icon--trailing">{trailingIcon}</span>
        )}
      </span>
    </button>
  );
}
