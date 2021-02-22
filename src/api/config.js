import Axios from "axios";
import { GITHUB_ROOT_URL } from "../constants/api";

export const rootApi = Axios.create({
  baseURL: GITHUB_ROOT_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_GIT_TOKEN}`,
  },
});
