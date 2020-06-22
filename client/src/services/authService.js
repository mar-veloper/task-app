import http from "./httpService";
import { API_URL } from "../config.json";

const authApi = "/auth/local";
const apiEndpoint = API_URL + authApi;
const tokenKey = "token";

export const login = async (email, password) => {
  const { data: jwt } = await http.post(apiEndpoint, {
    email,
    password,
  });
  console.log(jwt);
};

export default {
  login,
};
