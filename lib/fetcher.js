import ax from "axios";

const axios = ax.create({
  headers: { "Content-Type": "application/json" },
});

export const fetcher = async (url) => axios.get(url).then((res) => res.data);

export const create = async (url, data) => {
  return axios.post(url, data).then((res) => res.data);
};

export const update = (url, data) => {
  return axios.put(url, data).then((res) => res.data);
};

export const remove = (url) => {
  return axios.delete(url).then((res) => res.data);
};
