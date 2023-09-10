import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import AnimeRow from "./AnimeRow";
import { useQuery } from "@tanstack/react-query";
import { fetchAllAnimeMethod } from "../../services/apiAnime";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 2rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const AnimeTable = () => {
  const {
    isLoading,
    data: animes,
    error,
  } = useQuery({
    queryKey: ["animes"],
    queryFn: fetchAllAnimeMethod,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
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
      </TableHeader>
      {animes.map((anime) => (
        <AnimeRow anime={anime} key={anime.id} />
      ))}
    </Table>
  );
};

export default AnimeTable;
