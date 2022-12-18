import axios from 'axios';
import {BASE_URL} from '../configs/constants';

class Api {
  constructor(token) {
    this.token = token;
  }

  async postMethod(url, payload) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(`${BASE_URL}${url}`);
    const {data} = await axios.post(`${BASE_URL}${url}`, payload, config);
    return data;
  }

  async _PostMethod(url, payload) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    };
    const {data} = await axios.post(`${BASE_URL}${url}`, payload, config);
    return data;
  }

  async getMethod(url) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.get(`${BASE_URL}${url}`, config);
    return data;
  }

  async _getMethod(url) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    };
    console.log(`${BASE_URL}${url}`);
    const {data} = await axios.get(`${BASE_URL}${url}`,config);
    return data;
  }
}

export default Api;
