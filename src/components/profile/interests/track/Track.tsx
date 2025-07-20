import styled from "styled-components";
import TextStyled from "../../../../shared/TextStyled";
import Link from "../../../../shared/Link";

const StyledTrack = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 2rem;

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

const Track = (): React.JSX.Element => {
  return (
    <StyledTrack>
      <img
        src="/folio-25/lostfound-album.jpg"
        alt="Lostfound album cover by Francis Harris and Gry Bagoien"
        loading="lazy"
        decoding="async"
      />

      <div className="track-info">
        <TextStyled>Lostfound</TextStyled>
        <div className="track-artists">
          <TextStyled $italic>Francis Harris,</TextStyled>
          <TextStyled $italic>Gry Bagoien</TextStyled>
        </div>
      </div>

      <Link
        href="https://open.spotify.com/track/3Zq6M5ME01b0A4YY3kwY3X?si=6fb13d909cc34cb6"
        aria-label="Listen to Lostfound by Francis Harris and Gry Bagoien on Spotify"
      >
        Listen on Spotify
      </Link>
    </StyledTrack>
  );
};

export default Track;
