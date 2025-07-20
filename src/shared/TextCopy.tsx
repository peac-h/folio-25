import { useState, type ReactNode } from "react";
import { Tooltip, TooltipWrapper } from "./Tooltip";

type TextCopyProps = {
  text: string;
  children: ReactNode;
};

const TextCopy = ({ text, children }: TextCopyProps): React.JSX.Element => {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const copyToClipboard = async (): Promise<void> => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not available");
      }
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(true);
      setCopied(false);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    e.preventDefault();
    copyToClipboard();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      copyToClipboard();
    }
  };

  return (
    <TooltipWrapper
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Copy ${text} to clipboard`}
    >
      {children}
      <Tooltip show={copied || error}>
        {copied ? "Copied!" : error ? "Failed to copy" : ""}
      </Tooltip>
    </TooltipWrapper>
  );
};

export default TextCopy;
