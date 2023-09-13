import Button from "../../ui/Button";
import CreateAnimeForm from "./CreateAnimeForm";
import Modal from "../../ui/Modal";

const AddAnime = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="anime-form">
          <Button>Add new Anime</Button>
        </Modal.Open>
        <Modal.Window name="anime-form">
          <CreateAnimeForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name="table">
        <CreateAnimeForm />
      </Modal.Window> */}
      </Modal>
    </div>
  );
};

export default AddAnime;
