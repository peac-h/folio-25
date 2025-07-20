import styled from "styled-components";

import Link from "../../shared/Link";
import TextCopy from "../../shared/TextCopy";

const StyledContact = styled.footer`
  padding-top: 0.5rem;
`;

const Contact = (): React.JSX.Element => {
  return (
    <StyledContact>
      <p>
        Reach out on{" "}
        <TextCopy text="p6eac.h@gmail.com">
          <Link
            href="mailto:p6eac.h@gmail.com"
            aria-label="Send email to p6eac.h@gmail.com"
          >
            Gmail
          </Link>
        </TextCopy>{" "}
        or{" "}
        <Link
          href="https://www.linkedin.com/in/tamta-lomidze-p6each/"
          aria-label="Visit Tamta Lomidze's LinkedIn profile"
        >
          LinkedIn
        </Link>
        . Explore me on{" "}
        <Link
          href="https://github.com/peac-h"
          aria-label="Visit Tamta Lomidze on GitHub"
        >
          Github
        </Link>{" "}
        and{" "}
        <Link
          href="/folio-25/tl_cv.pdf"
          aria-label="Download Tamta Lomidze's CV"
        >
          ReadCV
        </Link>
        .
      </p>
    </StyledContact>
  );
};

export default Contact;
