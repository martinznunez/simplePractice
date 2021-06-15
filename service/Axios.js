import axios from "axios";

export const instance = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
});

export const getCountryAll = () => {
  return instance.get("/all");
};

export const getCountryName = (name) => {
  return instance.get(`/name/${name}`);
};
