import axios from "axios";

const api = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: "23524775-df2d338982330c0756c93cc31",
    per_page: 12,
    image_type: "photo",
    orientation: "horizontal",
  },
});

export async function getImages(q) {
  try {
    const { data } = await api.get(`?q=${q}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getNextPage(q, currentPage) {
  try {
    const { data } = await api.get(`?q=${q}&page=${currentPage}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}
