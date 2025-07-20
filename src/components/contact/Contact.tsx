import Link from "../../shared/Link";
import TextCopy from "../../shared/TextCopy";
import Wrapper from "../../shared/Wrapper";

function Contact() {
  return (
    <Wrapper as={"footer"}>
      <p>
        Reach out on{" "}
        <TextCopy text="p6eac.h@gmail.com">
          <Link href="mailto:p6eac.h@gmail.com">Gmail</Link>
        </TextCopy>{" "}
        or{" "}
        <Link href="https://www.linkedin.com/in/tamta-lomidze-p6each/">
          LinkedIn
        </Link>
        . Explore me on <Link href="https://github.com/peac-h">Github</Link> and{" "}
        <Link href="/folio-25/tl_cv.pdf">ReadCV</Link>.
      </p>
    </Wrapper>
  );
}

export default Contact;
