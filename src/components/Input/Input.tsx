import type { InputHTMLAttributes, ReactNode } from "react";
import "./Input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

export function Input({
  label,
  error,
  hint,
  leadingIcon,
  trailingIcon,
  id,
  className = "",
  ...rest
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`pw-input ${error ? "pw-input--error" : ""} ${className}`.trim()}>
      {label && (
        <label className="pw-input__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="pw-input__box">
        {leadingIcon ? (
          <span className="pw-input__icon pw-input__icon--leading">{leadingIcon}</span>
        ) : null}
        <input id={inputId} className="pw-input__field" {...rest} />
        {trailingIcon ? (
          <span className="pw-input__icon pw-input__icon--trailing">{trailingIcon}</span>
        ) : null}
      </div>
      {error && <p className="pw-input__message pw-input__message--error">{error}</p>}
      {!error && hint && <p className="pw-input__message">{hint}</p>}
    </div>
  );
}
