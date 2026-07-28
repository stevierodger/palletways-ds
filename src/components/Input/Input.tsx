import type { InputHTMLAttributes } from "react";
import "./Input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export function Input({
  label,
  error,
  hint,
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
        <input id={inputId} className="pw-input__field" {...rest} />
      </div>
      {error && <p className="pw-input__message pw-input__message--error">{error}</p>}
      {!error && hint && <p className="pw-input__message">{hint}</p>}
    </div>
  );
}
