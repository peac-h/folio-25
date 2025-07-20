import Link from "../../../shared/Link";

const Bio = (): React.JSX.Element => {
  return (
    <>
      <h2>
        A frontend developer at{" "}
        <Link href="https://leverx.com/" aria-label="Visit LeverX website">
          LeverX
        </Link>
        , previously at{" "}
        <Link
          href="https://www.videowindow.eu/"
          aria-label="Visit VideowindoW website"
        >
          VideowindoW
        </Link>
        , working with international teams across Europe and the USA — remotely
        from Tbilisi.
      </h2>
      <h3>Building things that feel intentional, quiet, and alive.</h3>
    </>
  );
};

export default Bio;
