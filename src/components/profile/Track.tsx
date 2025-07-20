import styled from "styled-components";
import TextStyled from "../../shared/TextStyled";
import Link from "../../shared/Link";

const StyledTrack = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0;

  img {
    height: 6rem;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.5;
  }

  .track-info {
    display: flex;
    flex-direction: column;
    margin-right: auto;
  }

  .track-artists {
    display: flex;
    flex-direction: column;
    color: var(--col-link);
    line-height: 1;
  }
`;

function Track() {
  return (
    <StyledTrack>
      <img
        src="https://i.scdn.co/image/ab67616d00001e028997c9c06618402b3caf9a27"
        alt="Lostfound album cover by Francis Harris and Gry Bagoien"
      />

      <div className="track-info">
        <TextStyled>Lostfound</TextStyled>
        <div className="track-artists">
          <TextStyled $italic>Francis Harris,</TextStyled>
          <TextStyled $italic>Gry Bagoien</TextStyled>
        </div>
      </div>

      <Link href="https://open.spotify.com/track/3Zq6M5ME01b0A4YY3kwY3X?si=6fb13d909cc34cb6">
        Listen on Spotify
      </Link>
    </StyledTrack>
  );
}

export default Track;
