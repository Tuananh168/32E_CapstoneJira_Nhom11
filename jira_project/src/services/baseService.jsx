import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN } from "../utils/setting/config";

export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  post = (url, model) => {
    console.log(localStorage.getItem(ACCESS_TOKEN));
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };
}
