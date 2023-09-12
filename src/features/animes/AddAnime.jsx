import { useState } from "react";
import Button from "../../ui/Button";
import CreateAnimeForm from "./CreateAnimeForm";
import Modal from "../../ui/Modal";

const AddAnime = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new Anime
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateAnimeForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddAnime;
