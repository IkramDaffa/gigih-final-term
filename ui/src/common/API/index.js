import axios from "axios";

export const API = {
  get: async function (endpoint) {
    try {
      const response = await axios.get(endpoint);
      return response;
    } catch (error) {
      throw error.response;
    }
  },
  post: async function (endpoint, params) {
    try {
      const response = await axios.post(
        "http://localhost:3080/" + endpoint,
        params
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  },
};
