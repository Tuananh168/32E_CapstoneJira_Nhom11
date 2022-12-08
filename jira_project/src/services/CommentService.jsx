import { baseService } from "./baseService";

export class CommentService extends baseService {
  constructor() {
    super();
  }

  commentTask = (taskId) => {
    return this.get(`/api/Comment/getAll?taskId=${taskId}`);
  };

  insertComment = (newComment) => {
    return this.post(`/api/Comment/insertComment`, newComment);
  };
  deleteComment = (idComment) => {
    return this.delete(`/api/Comment/deleteComment?idComment=${idComment}`);
  };
}

export const commentService = new CommentService();
