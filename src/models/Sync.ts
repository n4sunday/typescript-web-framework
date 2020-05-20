import axios, { AxiosResponse, AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/users/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}/users`, data);
    }
  }
}
