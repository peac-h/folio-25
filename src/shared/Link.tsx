import styled from "styled-components";

const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  text-decoration: none;
  color: inherit;
  font-style: italic;
  border-bottom: var(--border-bottom);
  transition: var(--transition);

  &:hover {
    color: var(--col-text-highlight);
    background-color: var(--col-main-tint);
  }
`;

export default Link;
