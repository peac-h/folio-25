import Link from "../../shared/Link";
import Wrapper from "../../shared/Wrapper";

function Projects() {
  return (
    <Wrapper as={"section"}>
      <p>Whether replicating complex platforms or crafting my own, I love building things that work beautifully.</p>
      <p>
        I’ve precisely recreated platforms like{" "}
        <Link href="https://github.com/Peac-h/netflix_landing-page">
          Netflix
        </Link>
        ,{" "}
        <Link href="https://github.com/peac-h/spotify_landing-page">Spotify</Link>{" "}
        and <Link href="https://github.com/peac-h/google_I-O_2022">Google I/O</Link> with
        close attention to detail — just for the challenge and fun of it.
      </p>
      <p>
        On the more personal side, heartfelt creations include{" "}
        <Link href="https://dreamersjournal.vercel.app/">
          Dreamers Journal
        </Link>{" "}
        and <Link href="https://georgian-diaries.netlify.app/">Georgian Diaries</Link>, reflect my full creative process, from UI/UX design through backend systems.
      </p>
    </Wrapper>
  );
}

export default Projects;
