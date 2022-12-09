import { GET_COMMENT_ALL } from "../constants/ConstantReducer/CommentConstantReducer";

const initialState = {
  listCommentTask: [],
};

export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_ALL:
      state.listCommentTask = action.listCommentTask;
      return { ...state };

    default:
      return state;
  }
};
