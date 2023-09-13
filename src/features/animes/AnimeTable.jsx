import Spinner from "../../ui/Spinner";
import AnimeRow from "./AnimeRow";
import { useAnime } from "./useAnime";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const AnimeTable = () => {
  const { isLoading, animes } = useAnime();
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="repeat(10, 1fr)">
        <Table.Header role="row">
          <div>Title</div>
          <div>Episodes</div>
          <div>Score</div>
          <div>Season</div>
          <div>Status</div>
          <div>Synopsis</div>
          <div>Type</div>
          <div>Year</div>
          <div>Image</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={animes}
          render={(anime) => <AnimeRow anime={anime} key={anime.id} />}
        />
      </Table>
    </Menus>
  );
};

export default AnimeTable;
