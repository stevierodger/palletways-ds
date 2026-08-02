import type { ChangeEvent } from "react";
import { CaretDown, ChevronRight, Close } from "../Icon";
import { FieldTitle } from "../FieldTitle";
import "./AddressField.css";

/**
 * Address-field exception states (off the regular Input / field states).
 * Flow from product design: clear → freetext → lookup → address-completed.
 */
export type AddressFieldState =
  | "completed"
  | "active-filled"
  | "freetext"
  | "lookup"
  | "address-completed";

export type AddressResult = {
  id: string;
  /** Single-line label in the results list */
  label: string;
  /** Multi-line copy when selected (line1, city, postcode, …) */
  lines?: string[];
};

export type AddressFieldProps = {
  state?: AddressFieldState;
  label?: string;
  /** Postcode / free-text value shown in the shell */
  value?: string;
  /** Multi-line selected address (`address-completed`) */
  addressLines?: string[];
  results?: AddressResult[];
  placeholder?: string;
  lookupLabel?: string;
  clearLabel?: string;
  showLabel?: boolean;
  showClear?: boolean;
  onLookup?: () => void;
  onClear?: () => void;
  onChange?: (value: string) => void;
  onSelectResult?: (result: AddressResult) => void;
  className?: string;
  id?: string;
};

const DEFAULT_RESULTS: AddressResult[] = [
  {
    id: "21a",
    label: "21A Halliford St London, N1 3HB",
    lines: ["21A Halliford street", "London", "N1 3HB"],
  },
  {
    id: "21b",
    label: "21B Halliford St London, N1 3HB",
    lines: ["21B Halliford street", "London", "N1 3HB"],
  },
  {
    id: "24a",
    label: "24A Halliford St London, N1 3HB",
    lines: ["24A Halliford street", "London", "N1 3HB"],
  },
  {
    id: "24b",
    label: "24B Halliford St London, N1 3HB",
    lines: ["24B Halliford street", "London", "N1 3HB"],
  },
  {
    id: "25a",
    label: "25A Halliford St London, N1 3HB",
    lines: ["25A Halliford street", "London", "N1 3HB"],
  },
  {
    id: "25b",
    label: "25B Halliford St London, N1 3HB",
    lines: ["25B Halliford street", "London", "N1 3HB"],
  },
  {
    id: "21",
    label: "21 Halliford St London, N1 3HB",
    lines: ["21 Halliford street", "London", "N1 3HB"],
  },
];

function StatusDot() {
  return (
    <span className="pw-address-field__status" aria-hidden="true">
      <span className="pw-address-field__status-dot" />
    </span>
  );
}

/**
 * Address lookup field — exception to regular field states.
 * Supports postcode completed, free-text entry, results dropdown, clear, and multi-line completed.
 */
export function AddressField({
  state = "freetext",
  label = "Address*",
  value = "",
  addressLines,
  results = DEFAULT_RESULTS,
  placeholder = "Enter postcode",
  lookupLabel = "Lookup",
  clearLabel = "Clear this field",
  showLabel,
  showClear,
  onLookup,
  onClear,
  onChange,
  onSelectResult,
  className = "",
  id,
}: AddressFieldProps) {
  const isCompleted = state === "completed";
  const isActiveFilled = state === "active-filled";
  const isFreetext = state === "freetext";
  const isLookup = state === "lookup";
  const isAddressCompleted = state === "address-completed";

  const resolvedShowLabel =
    showLabel ?? (isActiveFilled || isFreetext || isLookup || isAddressCompleted);
  const resolvedShowClear =
    showClear ?? (isActiveFilled || isAddressCompleted);
  const showStatus = !isFreetext;
  const showLookupChevron = isCompleted || isActiveFilled || isAddressCompleted;
  const fieldId = id ?? "address-field";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div
      className={`pw-address-field pw-address-field--${state} ${className}`.trim()}
    >
      {resolvedShowLabel ? (
        <FieldTitle title={label} tone="active" className="pw-address-field__title" />
      ) : null}

      <div className="pw-address-field__control">
        <div
          className={`pw-address-field__box ${
            isAddressCompleted ? "pw-address-field__box--multiline" : ""
          } ${isLookup ? "pw-address-field__box--open" : ""}`.trim()}
        >
          {showStatus ? <StatusDot /> : null}

          {isFreetext ? (
            <input
              id={fieldId}
              className="pw-address-field__input"
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
              autoComplete="postal-code"
              aria-label={label.replace(/\*$/, "")}
            />
          ) : isAddressCompleted ? (
            <div className="pw-address-field__address" id={fieldId}>
              {(addressLines ?? ["21 Halliford street", "London", "N1 3HB"]).map(
                (line) => (
                  <span key={line} className="pw-address-field__address-line">
                    {line}
                  </span>
                ),
              )}
            </div>
          ) : (
            <p className="pw-address-field__value" id={fieldId}>
              {value || (isLookup ? "N1 3HB" : "N1 3HB (London)")}
            </p>
          )}

          {isLookup ? (
            <button
              type="button"
              className="pw-address-field__toggle"
              onClick={onLookup}
              aria-expanded="true"
              aria-label="Collapse address results"
            >
              <CaretDown size={20} />
            </button>
          ) : (
            <button
              type="button"
              className={`pw-address-field__lookup ${
                showLookupChevron ? "pw-address-field__lookup--with-chevron" : ""
              }`.trim()}
              onClick={onLookup}
            >
              <span>{lookupLabel}</span>
              {showLookupChevron ? <ChevronRight size={16} /> : null}
            </button>
          )}
        </div>

        {isLookup ? (
          <ul className="pw-address-field__results" role="listbox" aria-label="Addresses">
            {results.map((result) => (
              <li key={result.id} role="option">
                <button
                  type="button"
                  className="pw-address-field__result"
                  onClick={() => onSelectResult?.(result)}
                >
                  {result.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {resolvedShowClear ? (
        <button type="button" className="pw-address-field__clear" onClick={onClear}>
          <Close size={14} className="pw-address-field__clear-icon" />
          <span>{clearLabel}</span>
        </button>
      ) : null}
    </div>
  );
}
