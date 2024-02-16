import axios from "axios";

export const axiosFetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
