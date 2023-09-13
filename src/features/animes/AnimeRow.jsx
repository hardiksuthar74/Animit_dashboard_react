import styled from "styled-components";
import CreateAnimeForm from "./CreateAnimeForm";
import { useDeleteAnime } from "./useDeleteAnime";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Anime = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const AnimeRow = ({ anime }) => {
  const url = "http://127.0.0.1:5000/animes";
  const { isDeleting, deleteAnime } = useDeleteAnime();

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

  return (
    <Table.Row role="row">
      <Anime>{title}</Anime>
      <Anime>{episodes}</Anime>
      <Anime>{score}</Anime>
      <Anime>{season}</Anime>
      <Anime>{status}</Anime>
      <Anime>{synopsis.slice(0, 10)}....</Anime>
      <Anime>{type}</Anime>
      <Anime>{year}</Anime>
      <Img src={`${url}/${image}`} />
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={animeId} />
            <Menus.List id={animeId}>
              <Modal.Open opens="edit">
                <Menus.Button icons={<HiPencil />}>Update</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="confirmDelete">
                <Menus.Button icons={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="edit">
              <CreateAnimeForm animeToEdit={anime} />
            </Modal.Window>
            <Modal.Window name="confirmDelete">
              <ConfirmDelete
                resource="anime"
                disabled={isDeleting}
                onConfirm={() => deleteAnime(animeId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default AnimeRow;
