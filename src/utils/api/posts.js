import {axios} from "../../core/index";

export default {
  get: () => axios.get('/posts'),
};