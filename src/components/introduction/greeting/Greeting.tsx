import TextStyled from "../../../shared/TextStyled";

const Greeting = (): React.JSX.Element => {
  return (
    <h1>
      <TextStyled $highlight>გამარჯობა</TextStyled>{" "}
      <TextStyled $italic>("hello" [ɡɑmɑrd͡ʒɔbɑ] in Georgian),</TextStyled>{" "}
      <TextStyled $highlight>I'm Tamta</TextStyled>
    </h1>
  );
};

export default Greeting;
