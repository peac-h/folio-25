import TextStyled from "../../shared/TextStyled";

function Hobbies() {
  return (
    <>
      <p>
        Favorite Book — <TextStyled $italic>The Old Man and the Sea</TextStyled>{" "}
        by <TextStyled $italic>Ernest Hemingway</TextStyled>; Favorite author —{" "}
        <TextStyled $italic>Stephen King</TextStyled>; Favorite book of the
        favorite author — <TextStyled $italic>Pet Sematary;</TextStyled> Cinema
        — <TextStyled $italic>Marvel</TextStyled> movies; Sitcom —{" "}
        <TextStyled $italic>Friends</TextStyled>; Drama —{" "}
          <TextStyled $italic>The Leftovers</TextStyled>; Music —{" "}
        <TextStyled $italic>techno</TextStyled>; Color —{" "}
        <TextStyled $italic>black</TextStyled>.
      </p>
      <p>
        When I’m not building software, you’ll find me traveling and enjoying
        life.
      </p>
    </>
  );
}

export default Hobbies;
