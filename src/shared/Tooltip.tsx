import styled from "styled-components";

export const TooltipWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const Tooltip = styled.span<{
  show: boolean;
}>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  background-color: var(--col-main-tint);
  color: var(--col-text-highlight);
  font-size: var(--font-small);
  transition: var(--transition);
  padding: 0.2rem 0.5rem;
  position: absolute;
  top: -2rem;
  left: 30%;
  z-index: 10;
  rotate: -5deg;
`;
