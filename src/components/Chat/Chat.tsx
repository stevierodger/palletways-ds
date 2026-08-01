import type { ReactNode } from "react";
import { ChatCircle } from "../Icon/ChatCircle";
import { Close } from "../Icon/Close";
import { PaperPlane } from "../Icon/PaperPlane";
import { Input } from "../Input";
import { LogoWordmark } from "../Logo";
import "./Chat.css";

export type ChatState = "collapsed" | "expanded";

export type ChatProps = {
  state?: ChatState;
  label?: string;
  greeting?: ReactNode;
  suggestions?: string[];
  inputPlaceholder?: string;
  inputValue?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onSuggestionClick?: (label: string) => void;
  onInputChange?: (value: string) => void;
  onSend?: () => void;
  onHistory?: () => void;
  historyLabel?: string;
  className?: string;
};

const DEFAULT_SUGGESTIONS = [
  "Track a package",
  "Pallet limitations",
  "Preparing for a collection",
];

/**
 * Floating chat launcher + expanded help panel.
 * Figma: chat.component (2145:13148) — collapsed | expanded
 */
export function Chat({
  state = "collapsed",
  label = "Chat with us",
  greeting,
  suggestions = DEFAULT_SUGGESTIONS,
  inputPlaceholder = "Ask me anything",
  inputValue,
  onOpen,
  onClose,
  onSuggestionClick,
  onInputChange,
  onSend,
  onHistory,
  historyLabel = "History",
  className = "",
}: ChatProps) {
  if (state === "collapsed") {
    return (
      <button
        type="button"
        className={`pw-chat pw-chat--collapsed ${className}`.trim()}
        onClick={onOpen}
      >
        <ChatCircle size={24} className="pw-chat__launcher-icon" />
        <span className="pw-chat__launcher-label">{label}</span>
      </button>
    );
  }

  const greetingContent = greeting ?? (
    <>
      <p>
        Hi. Welcome to Palletways online.
        <br />
        I&apos;m here to help you find answers to information that you may need.
      </p>
      <p>Here are some of the things I help with most commonly:</p>
    </>
  );

  return (
    <div className={`pw-chat pw-chat--expanded ${className}`.trim()}>
      <header className="pw-chat__header">
        <LogoWordmark size="large" className="pw-chat__logo" />
        <button
          type="button"
          className="pw-chat__close"
          aria-label="Close chat"
          onClick={onClose}
        >
          <Close size={24} />
        </button>
      </header>

      <hr className="pw-chat__rule" />

      <div className="pw-chat__body">
        <div className="pw-chat__intro">
          <div className="pw-chat__greeting">{greetingContent}</div>
          <ul className="pw-chat__suggestions">
            {suggestions.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="pw-chat__suggestion"
                  onClick={() => onSuggestionClick?.(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pw-chat__composer">
          <Input
            className="pw-chat__input"
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => onInputChange?.(e.target.value)}
            trailingIcon={
              <button
                type="button"
                className="pw-chat__send"
                aria-label="Send message"
                onClick={onSend}
              >
                <PaperPlane size={20} />
              </button>
            }
          />
        </div>
      </div>

      <footer className="pw-chat__footer">
        <button
          type="button"
          className="pw-chat__history"
          onClick={onHistory}
        >
          <ChatCircle size={16} />
          {historyLabel}
        </button>
      </footer>
    </div>
  );
}
