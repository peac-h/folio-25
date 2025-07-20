import { useState, type ReactNode } from "react";
import { Tooltip, TooltipWrapper } from "./Tooltip";

type TextCopyProps = {
  text: string;
  children: ReactNode;
};

const TextCopy = ({ text, children }: TextCopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .then(() => setTimeout(() => setCopied(false), 2000));
  };

  return (
    <TooltipWrapper onClick={handleClick}>
      {children}
      <Tooltip show={copied}>Copied!</Tooltip>
    </TooltipWrapper>
  );
};

export default TextCopy;
