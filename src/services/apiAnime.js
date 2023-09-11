const url = "http://127.0.0.1:5000";

const fetchAllAnimeMethod = async () => {
  try {
    const response = await fetch(`${url}/animes/`);

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

const addAnimeMethod = async (data) => {
  const formData = new FormData();
  for (const fieldName in data) {
    if (data.hasOwnProperty(fieldName)) {
      if (fieldName === "image") {
        formData.append("image", data.image);
      } else {
        formData.append(fieldName, data[fieldName]);
      }
    }
  }

  try {
    const response = await fetch(`${url}/animes`, {
      method: "POST",
      body: formData,
    });

    const addedAnime = await response.json();

    return addedAnime?.data;
  } catch (error) {
    throw new Error("Anime could not be added");
  }
};
const updateAnimeMethod = async (data) => {
  const formData = new FormData();
  for (const fieldName in data) {
    if (data.hasOwnProperty(fieldName)) {
      if (fieldName === "image") {
        formData.append("image", data.image);
      } else {
        formData.append(fieldName, data[fieldName]);
      }
    }
  }

  try {
    const response = await fetch(`${url}/animes/update`, {
      method: "POST",
      body: formData,
    });

    const addedAnime = await response.json();
    return addedAnime?.data;
  } catch (error) {
    throw new Error("Anime could not be added");
  }
};

export {
  fetchAllAnimeMethod,
  deleteSingleAnime,
  addAnimeMethod,
  updateAnimeMethod,
};
