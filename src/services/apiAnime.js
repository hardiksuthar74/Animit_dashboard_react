const url = "http://127.0.0.1:5000";

const fetchAllAnimeMethod = async () => {
  try {
    const response = await fetch(`${url}/animes`);

    const data = await response.json();

    return data?.data;
  } catch (error) {
    throw new Error("Anime could not be loaded");
  }
};

const deleteSingleAnime = async (id) => {
  try {
    const response = await fetch(`${url}/animes/delete`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    return data?.data;
  } catch (error) {
    throw new Error("Anime could not be deleted");
  }
};

const addAnimeMethod = async (form) => {
  try {
    const response = await fetch(`${url}/animes`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    console.log(data);
    return data?.data;
  } catch (error) {
    throw new Error("Anime could not be added");
  }
};

export { fetchAllAnimeMethod, deleteSingleAnime, addAnimeMethod };
