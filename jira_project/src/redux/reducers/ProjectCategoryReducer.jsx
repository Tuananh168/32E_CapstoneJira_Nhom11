import { GET_PROJECT_CATEGORY } from "../constants/ConstantReducer/CatogoryConstantReducer";

const initialState = {
  listProjectCategory: [],
};

export const ProjectCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_CATEGORY:
      state.listProjectCategory = action.listProjectCategory;
      return { ...state };

    default:
      return { ...state };
  }
};
