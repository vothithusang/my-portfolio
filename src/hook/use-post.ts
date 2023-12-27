import { useQuery } from "@tanstack/react-query";
import api from "../services/post.service";
import { ParamComment } from "../models/common.interface";

export const useCommentList = (paramUrl: ParamComment) => {
  const getCommentListService = ({
    queryKey,
  }: {
    queryKey: [string, ParamComment];
  }) => {
    const [, param] = queryKey;
    return api.getPost(param);
  };

  return useQuery({
    queryKey: ["comment-list", paramUrl],
    queryFn: getCommentListService,
    staleTime: 60 * 1000,
  });
};
