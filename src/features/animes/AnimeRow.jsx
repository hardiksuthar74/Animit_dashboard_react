import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSingleAnime } from "../../services/apiAnime";
import { toast } from "react-hot-toast";
import { useState } from "react";
import CreateAnimeForm from "./CreateAnimeForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const AnimeRow = ({ anime }) => {
  const [showForm, setShowForm] = useState(false);

  const {
    id: animeId,
    image,
    title,
    episodes,
    score,
    season,
    status,
    synopsis,
    type,
    year,
  } = anime;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteSingleAnime,
    onSuccess: () => {
      toast.success("Anime Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["animes"],
      });
    },
    onError: (err) => {
      toast.error("Something Went Wrong");
    },
  });

  return (
    <>
      <TableRow role="row">
        <Cabin>{title}</Cabin>
        <Cabin>{episodes}</Cabin>
        <Cabin>{score}</Cabin>
        <Cabin>{season}</Cabin>
        <Cabin>{status}</Cabin>
        <Cabin>{synopsis}</Cabin>
        <Cabin>{type}</Cabin>
        <Cabin>{year}</Cabin>
        <Img src={image} />
        <div>
          <button
            disabled={isDeleting}
            onClick={() => setShowForm((show) => !show)}
          >
            Update
          </button>
          <button disabled={isDeleting} onClick={() => mutate(animeId)}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateAnimeForm animeToEdit={anime} />}
    </>
  );
};

export default AnimeRow;
