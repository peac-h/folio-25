import styled from "styled-components";

const TextStyled = styled.span<{
  $highlight?: boolean;
  $italic?: boolean;
  $bold?: boolean;
}>`
  color: ${({ $highlight }) =>
    $highlight ? "var(--col-text-highlight)" : "inherit"};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  font-weight: ${({ $bold }) => ($bold ? 600 : "normal")};
`;

export default TextStyled;
