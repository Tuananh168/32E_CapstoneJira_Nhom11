import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/setting/config";

export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
