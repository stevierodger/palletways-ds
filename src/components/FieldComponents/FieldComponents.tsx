import type { InputHTMLAttributes, ReactNode } from "react";
import { FieldTitle } from "../FieldTitle";
import "./FieldComponents.css";

export type FieldComponentsVariant =
  | "field-title"
  | "field-input"
  | "field-help-text"
  | "field-dropdown-option"
  | "field-dropdown-hover";

export type FieldInputState = "placeholder" | "filled";

export type FieldInputProps = {
  state?: FieldInputState;
  value?: string;
  placeholder?: string;
  secondAction?: boolean;
  secondActionLabel?: string;
  onSecondAction?: () => void;
  className?: string;
};

/**
 * Field value / placeholder text atom.
 * Figma: Field input (2121:10615) — placeholder | filled
 */
export function FieldInput({
  state = "placeholder",
  value = "Field input",
  placeholder = "Field input",
  secondAction = false,
  secondActionLabel = "Lookup",
  onSecondAction,
  className = "",
}: FieldInputProps) {
  const isFilled = state === "filled";

  return (
    <div
      className={`pw-field-input pw-field-input--${state} ${className}`.trim()}
    >
      <span className="pw-field-input__text">
        {isFilled ? value : placeholder}
      </span>
      {isFilled && secondAction ? (
        <button
          type="button"
          className="pw-field-input__action"
          onClick={onSecondAction}
        >
          {secondActionLabel}
        </button>
      ) : null}
    </div>
  );
}

export type FieldComponentsProps = {
  variant?: FieldComponentsVariant;
  title?: string;
  helpText?: string;
  showHelpIcon?: boolean;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  helpIcon?: ReactNode;
  /** For field-input / dropdown variants — Field input atom state */
  inputState?: FieldInputState;
  inputValue?: string;
  inputPlaceholder?: string;
  secondAction?: boolean;
  secondActionLabel?: string;
  onSecondAction?: () => void;
  /** Native input passthrough when using interactive field-input */
  interactive?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
};

/**
 * Atomic form field pieces (title, input shell, help, dropdown rows).
 * Figma: field-components (2118:6960) + Field input (2121:10615)
 */
export function FieldComponents({
  variant = "field-title",
  title = "Full name*",
  helpText = "Add some supportive information here",
  showHelpIcon = false,
  showLeadingIcon = false,
  showTrailingIcon = false,
  leadingIcon,
  trailingIcon,
  helpIcon,
  inputState = "placeholder",
  inputValue = "Field input",
  inputPlaceholder = "field input",
  secondAction = false,
  secondActionLabel = "Lookup",
  onSecondAction,
  interactive = false,
  inputProps,
  className = "",
}: FieldComponentsProps) {
  if (variant === "field-title") {
    return (
      <FieldTitle
        title={title}
        className={`pw-field-components pw-field-components--title ${className}`.trim()}
      />
    );
  }

  if (variant === "field-help-text") {
    return (
      <div
        className={`pw-field-components pw-field-components--help ${className}`.trim()}
      >
        {showHelpIcon && helpIcon ? (
          <span className="pw-field-components__help-icon">{helpIcon}</span>
        ) : null}
        <p className="pw-field-components__help-text">{helpText}</p>
        {showTrailingIcon && trailingIcon ? (
          <span className="pw-field-components__trailing">{trailingIcon}</span>
        ) : null}
      </div>
    );
  }

  const isDropdown =
    variant === "field-dropdown-option" || variant === "field-dropdown-hover";
  const shellClass = isDropdown
    ? `pw-field-components pw-field-components--dropdown pw-field-components--${variant}`
    : "pw-field-components pw-field-components--input";

  return (
    <div className={`${shellClass} ${className}`.trim()}>
      {showLeadingIcon && leadingIcon ? (
        <span className="pw-field-components__leading">{leadingIcon}</span>
      ) : null}

      {interactive && variant === "field-input" ? (
        <input
          className={`pw-field-components__native ${
            inputProps?.value || inputProps?.defaultValue
              ? "pw-field-components__native--filled"
              : ""
          }`}
          placeholder={inputPlaceholder}
          {...inputProps}
        />
      ) : (
        <FieldInput
          state={inputState}
          value={inputValue}
          placeholder={inputPlaceholder}
          secondAction={secondAction}
          secondActionLabel={secondActionLabel}
          onSecondAction={onSecondAction}
          className="pw-field-components__value"
        />
      )}

      {showTrailingIcon && trailingIcon ? (
        <span className="pw-field-components__trailing">{trailingIcon}</span>
      ) : null}
    </div>
  );
}
