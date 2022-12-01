const initialState = {
  projectEdit: {},
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_PROJECT": {
      state.projectEdit = action.projectEditModel;
      // console.log("projectEdit", state.projectEdit);
      // console.log("abc", action.projectEditModel);
      return { ...state };
    }
    default:
      return state;
  }
};
