import { ParamComment } from "../models/common.interface";
import api from "./axios";

const getPost = (signal?: ParamComment) => {
  console.log("signal", signal);
  return api.get(
    `/bvcorps/tags?paging_ignored=false&page=${signal?.page}&preload=no_of_post&state=public&parent_category_slug=&sort=highlighted%2Cdesc&highlighted=true`
  );
};

const PostService = {
  getPost,
};

export default PostService;
