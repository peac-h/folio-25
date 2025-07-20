import TextStyled from "../../shared/TextStyled";

function Greeting() {
  return (
    <h1>
      <TextStyled $highlight>გამარჯობა</TextStyled>{" "}
      <TextStyled $italic>("hello" [ɡɑmɑrd͡ʒɔbɑ] in Georgian),</TextStyled>{" "}
      <TextStyled $highlight>I'm Tamta</TextStyled>
    </h1>
  );
}

export default Greeting;
