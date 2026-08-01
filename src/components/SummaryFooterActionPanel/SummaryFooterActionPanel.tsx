import { Button } from "../Button";
import "./SummaryFooterActionPanel.css";

export type SummaryFooterActionPanelProps = {
  termsLabel?: string;
  loginLabel?: string;
  onTermsClick?: () => void;
  onLoginClick?: () => void;
  className?: string;
};

/**
 * Summary footer CTA row with terms link and login button.
 * Figma: summary-footer/action-panel (2287:10610)
 */
export function SummaryFooterActionPanel({
  termsLabel = "Terms & conditions",
  loginLabel = "Log in to your account",
  onTermsClick,
  onLoginClick,
  className = "",
}: SummaryFooterActionPanelProps) {
  return (
    <div className={`pw-summary-footer-action-panel ${className}`.trim()}>
      <Button variant="ghost" size="sm" onClick={onTermsClick}>
        {termsLabel}
      </Button>
      <Button variant="secondary" size="sm" onClick={onLoginClick}>
        {loginLabel}
      </Button>
    </div>
  );
}
