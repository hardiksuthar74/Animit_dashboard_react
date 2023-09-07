import { Fragment, useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AnimeTable from "../features/animes/AnimeTable";
import Button from "../ui/Button";
import CreateAnimeForm from "../features/animes/CreateAnimeForm";

const Animes = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Fragment>
      <Row type="horizontal">
        <Heading as="h1">All Animes</Heading>
        <p>Filter / sort</p>
      </Row>
      <Row>
        <AnimeTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new Anime
        </Button>
        {showForm && <CreateAnimeForm />}
      </Row>
    </Fragment>
  );
};

export default Animes;
