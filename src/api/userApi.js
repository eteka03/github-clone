//get all users

import { PER_PAGE } from "../constants/api";
import { rootApi } from "./config";

export const getAllUsers = async () => {
  try {
    const { data } = await rootApi.get(`users?per_page=${PER_PAGE}`);

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getUserByLogin = async (login) => {
  try {
    const { data } = await rootApi.get(`users/${login}`);

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
