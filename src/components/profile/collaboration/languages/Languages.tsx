import TextStyled from "../../../../shared/TextStyled";

const Languages = (): React.JSX.Element => {
  return (
    <p>
      Speaking <TextStyled $italic>ქართული,</TextStyled>{" "}
      <TextStyled $italic>English</TextStyled>,{" "}
      <TextStyled $italic>Русский</TextStyled>, und ein bisschen{" "}
      <TextStyled $italic>Deutsch</TextStyled>.
    </p>
  );
};

export default Languages;
