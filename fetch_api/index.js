import { api } from "utils/constants";
export const getItems = (search) =>
  fetch(`${api}?q=${search}`).then((response) => response.json());

export const getItem = (id) =>
  fetch(`${api}/${id}`).then((response) => response.json());
