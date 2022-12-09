import {
  EDIT_PROJECT,
  PUT_PROJECT_DETAIL,
} from "../constants/ConstantReducer/ProjectConstantReducer";

const initialState = {
  projectEdit: {},
  projectDetail: {},
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROJECT: {
      state.projectEdit = action.projectEditModel;

      return { ...state, creator: 0 };
    }
    case PUT_PROJECT_DETAIL: {
      state.projectDetail = action.projectDetail;
      return { ...state };
    }
    default:
      return state;
  }
};
