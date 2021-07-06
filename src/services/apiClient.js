// initialize a new api client class
import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "life_tracker_token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.err?.message;
      return { data: null, error: message || String(err) };
    }
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }
  // responsible for creating a new activity card
  async createCard(exercise) {
    return await this.request({
      endpoint: `exercises`,
      method: `POST`,
      data: exercise,
    });
  }

  async listExercises() {
    return await this.request({ endpoint: `exercises`, method: `GET` });
  }

  async loginUser(credentials) {
    return this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }
  async signupUser(credentials) {
    return this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }
}
export default new ApiClient(
  process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"
);
