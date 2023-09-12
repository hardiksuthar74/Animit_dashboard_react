import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AnimeTable from "../features/animes/AnimeTable";
import AddAnime from "../features/animes/addAnime";

const Animes = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Animes</Heading>
        <p>Filter / sort</p>
      </Row>
      <Row>
        <AnimeTable />
        <AddAnime />
      </Row>
    </>
  );
};

export default Animes;
