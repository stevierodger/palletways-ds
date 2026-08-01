import { Button } from "../Button";
import { CardNumberBadge } from "../CardNumberBadge";
import { AddPlus } from "../Icon/AddPlus";
import { CaretDown } from "../Icon/CaretDown";
import { CaretUp } from "../Icon/CaretUp";
import { ChevronRight } from "../Icon/ChevronRight";
import applePay from "./assets/apple-pay.svg";
import cardBrands from "./assets/card-brands.svg";
import googlePay from "./assets/google-pay.svg";
import iconCcv from "./assets/icon-ccv.svg";
import iconMail from "./assets/icon-mail.svg";
import iconPhone from "./assets/icon-phone.svg";
import onelinkLogo from "./assets/onelink-logo.svg";
import otpPhone from "./assets/otp-phone.svg";
import "./PaymentCard.css";

export type PaymentCardState =
  | "card-payment-biller"
  | "card-payment-biller-selector"
  | "onelink"
  | "collapsed"
  | "processing";

export type PaymentPayer = {
  id: string;
  email: string;
  role: string;
  tone?: "sender" | "recipient";
};

export type PaymentCardProps = {
  state?: PaymentCardState;
  amount?: string;
  currency?: string;
  email?: string;
  maskedPhone?: string;
  otpDigits?: string[];
  cardNumberPlaceholder?: string;
  expiryPlaceholder?: string;
  ccvPlaceholder?: string;
  payers?: PaymentPayer[];
  selectedPayerId?: string;
  onApplePay?: () => void;
  onGooglePay?: () => void;
  onResendCode?: () => void;
  onSendEmailCode?: () => void;
  onPay?: () => void;
  onSelectPayer?: (id: string) => void;
  onAddPayer?: () => void;
  className?: string;
};

const DEFAULT_PAYERS: PaymentPayer[] = [
  {
    id: "sender",
    email: "hello@ilovepallets.com",
    role: "Sender",
    tone: "sender",
  },
  {
    id: "recipient",
    email: "info@gouldelectronics.com",
    role: "Recipient",
    tone: "recipient",
  },
];

/**
 * Checkout payment card — express / card / processing / pay CTA.
 * Figma: payment-card (2137:10584)
 */
export function PaymentCard({
  state = "onelink",
  amount = "158.56",
  currency = "£",
  email = "hello@ilovepallets.com",
  maskedPhone = "(***) ***** ***23",
  otpDigits = ["", "", "", "", "", ""],
  cardNumberPlaceholder = "0000 0000 0000 0000",
  expiryPlaceholder = "MM/YY",
  ccvPlaceholder = "123",
  payers = DEFAULT_PAYERS,
  selectedPayerId = "sender",
  onApplePay,
  onGooglePay,
  onResendCode,
  onSendEmailCode,
  onPay,
  onSelectPayer,
  onAddPayer,
  className = "",
}: PaymentCardProps) {
  const selected =
    payers.find((p) => p.id === selectedPayerId) ?? payers[0] ?? DEFAULT_PAYERS[0];
  const displayAmount = `${currency}${amount}`;
  const selectorOpen = state === "card-payment-biller-selector";
  const isCard = state === "card-payment-biller" || selectorOpen;

  if (state === "collapsed") {
    return (
      <div
        className={`pw-payment-card pw-payment-card--collapsed ${className}`.trim()}
      >
        <div className="pw-payment-card__amount-block">
          <p className="pw-payment-card__amount-label">Amount due</p>
          <p className="pw-payment-card__amount-value">{displayAmount}</p>
        </div>
        <Button
          variant="primary"
          size="md"
          trailingIcon={<ChevronRight size={20} />}
          onClick={onPay}
        >
          {`Pay ${displayAmount}`}
        </Button>
      </div>
    );
  }

  if (state === "processing") {
    return (
      <div
        className={`pw-payment-card pw-payment-card--processing ${className}`.trim()}
      >
        <div className="pw-payment-card__processing-copy">
          <p className="pw-payment-card__processing-eyebrow">Please wait</p>
          <p className="pw-payment-card__processing-title">Payment in progress</p>
        </div>
        <div className="pw-payment-card__processing-action">
          <Button variant="primary" size="md" loading>
            Loading...
          </Button>
        </div>
      </div>
    );
  }

  if (isCard) {
    return (
      <div
        className={`pw-payment-card pw-payment-card--card ${className}`.trim()}
      >
        <h2 className="pw-payment-card__title">I want to pay with card</h2>

        <div className="pw-payment-card__payer">
          <p className="pw-payment-card__field-label">Who is paying for this shipment?</p>
          <div className="pw-payment-card__payer-wrap">
            <button
              type="button"
              className="pw-payment-card__payer-trigger"
              aria-expanded={selectorOpen}
              onClick={() => onSelectPayer?.(selected.id)}
            >
              <span
                className={`pw-payment-card__payer-dot pw-payment-card__payer-dot--${selected.tone ?? "sender"}`}
                aria-hidden="true"
              />
              <span className="pw-payment-card__payer-email">{selected.email}</span>
              <span className="pw-payment-card__payer-role">{selected.role}</span>
              {selectorOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
            </button>
            {selectorOpen ? (
              <ul className="pw-payment-card__payer-menu" role="listbox">
                {payers.map((payer) => (
                  <li key={payer.id}>
                    <button
                      type="button"
                      className="pw-payment-card__payer-option"
                      role="option"
                      aria-selected={payer.id === selected.id}
                      onClick={() => onSelectPayer?.(payer.id)}
                    >
                      <span
                        className={`pw-payment-card__payer-dot pw-payment-card__payer-dot--${payer.tone ?? "sender"}`}
                        aria-hidden="true"
                      />
                      <span className="pw-payment-card__payer-email">{payer.email}</span>
                      <span className="pw-payment-card__payer-role">{payer.role}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    className="pw-payment-card__payer-add"
                    onClick={onAddPayer}
                  >
                    <AddPlus size={16} />
                    Add new
                  </button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>

        <label className="pw-payment-card__field">
          <span className="pw-payment-card__field-label">Card number</span>
          <span className="pw-payment-card__field-box">
            <input
              className="pw-payment-card__field-input"
              placeholder={cardNumberPlaceholder}
              inputMode="numeric"
              autoComplete="cc-number"
            />
            <img
              className="pw-payment-card__brands"
              src={cardBrands}
              alt=""
              width={88}
              height={16}
              aria-hidden="true"
            />
          </span>
        </label>

        <div className="pw-payment-card__field-row">
          <label className="pw-payment-card__field">
            <span className="pw-payment-card__field-label">Expiry date</span>
            <span className="pw-payment-card__field-box">
              <input
                className="pw-payment-card__field-input"
                placeholder={expiryPlaceholder}
                inputMode="numeric"
                autoComplete="cc-exp"
              />
            </span>
          </label>
          <label className="pw-payment-card__field">
            <span className="pw-payment-card__field-label">CCV</span>
            <span className="pw-payment-card__field-box">
              <input
                className="pw-payment-card__field-input"
                placeholder={ccvPlaceholder}
                inputMode="numeric"
                autoComplete="cc-csc"
              />
              <img
                className="pw-payment-card__ccv-icon"
                src={iconCcv}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />
            </span>
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className={`pw-payment-card pw-payment-card--onelink ${className}`.trim()}>
      <div className="pw-payment-card__due-row">
        <p className="pw-payment-card__amount-label pw-payment-card__amount-label--strong">
          Amount due
        </p>
        <p className="pw-payment-card__amount-value">{displayAmount}</p>
      </div>

      <div className="pw-payment-card__express">
        <div className="pw-payment-card__express-heading">
          <p className="pw-payment-card__section-label">Express checkout</p>
          <CaretUp size={20} />
        </div>
        <div className="pw-payment-card__express-methods">
          <button
            type="button"
            className="pw-payment-card__wallet pw-payment-card__wallet--apple"
            onClick={onApplePay}
            aria-label="Apple Pay"
          >
            <img src={applePay} alt="" width={51} height={21} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="pw-payment-card__wallet pw-payment-card__wallet--google"
            onClick={onGooglePay}
            aria-label="Google Pay"
          >
            <img src={googlePay} alt="" width={53} height={21} aria-hidden="true" />
          </button>
          <CardNumberBadge number="6123" selected />
        </div>
      </div>

      <div className="pw-payment-card__onelink">
        <div className="pw-payment-card__onelink-top">
          <img
            className="pw-payment-card__onelink-logo"
            src={onelinkLogo}
            alt="Onelink"
            width={93}
            height={18}
          />
          <span className="pw-payment-card__email-pill">{email}</span>
        </div>
        <div className="pw-payment-card__onelink-copy">
          <p className="pw-payment-card__onelink-title">
            Use your saved information with Onelink
          </p>
          <p className="pw-payment-card__onelink-body">
            Enter the code sent to <strong>{maskedPhone}</strong> to securely use
            your saved information.
          </p>
        </div>
        <div className="pw-payment-card__otp">
          <img
            className="pw-payment-card__otp-phone"
            src={otpPhone}
            alt=""
            width={17}
            height={20}
            aria-hidden="true"
          />
          <div className="pw-payment-card__otp-boxes" role="group" aria-label="One-time code">
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                className="pw-payment-card__otp-box"
                maxLength={1}
                inputMode="numeric"
                value={digit}
                readOnly
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="pw-payment-card__onelink-links">
          <button type="button" className="pw-payment-card__link" onClick={onResendCode}>
            Resend code
            <img src={iconPhone} alt="" width={16} height={16} aria-hidden="true" />
          </button>
          <button type="button" className="pw-payment-card__link" onClick={onSendEmailCode}>
            Send code to email instead
            <img src={iconMail} alt="" width={16} height={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
