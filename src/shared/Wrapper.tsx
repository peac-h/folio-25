import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;

  &:not(:last-child) {
    padding: 3rem 0;
    border-bottom: 1px solid var(--col-main-tint);
  }
`;

export default Wrapper;
