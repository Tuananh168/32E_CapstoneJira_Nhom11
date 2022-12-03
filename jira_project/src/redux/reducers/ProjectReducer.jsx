const initialState = {
  projectEdit: {},
  projectDetail: {},
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_PROJECT": {
      state.projectEdit = action.projectEditModel;
      // console.log("projectEdit", state.projectEdit);
      // console.log("abc", action.projectEditModel);
      return { ...state, creator: 0 };
    }
    case "PUT_PROJECT_DETAIL": {
      state.projectDetail = action.projectDetail;
      return { ...state };
    }
    default:
      return state;
  }
};
