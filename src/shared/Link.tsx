import React from "react";
import styled from "styled-components";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-style: italic;
  border-bottom: var(--border-bottom);
  transition: var(--transition);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus-visible {
    color: var(--col-text-highlight);
    background-color: var(--col-main-tint);
  }

  &:focus-visible {
    outline: 2px solid var(--col-text-highlight);
    outline-offset: 2px;
  }
`;

const Link = ({
  href,
  children,
  "aria-label": ariaLabel,
}: LinkProps): React.JSX.Element => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <StyledLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
