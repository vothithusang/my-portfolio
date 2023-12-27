export interface ParamComment extends ParamPage {
  postId_eq: number;
  parentId_nul?: number;
}

export type ParamPage = {
  page?: number;
  limit?: number;
  sortBy?: string;
  isOwner_eq?: number;
  post_exists?: number;
};

export interface DataError {
  messages: string[];
  codeName: string;
  moduleName: string;
  path: string;
  method: string;
  timestamp: string;
}
