import {
  CLOSE_DRAWER,
  OPEN_DRAWER,
  OPEN_DRAWER_EDIT_FORM,
  SET_SUBMIT_EDIT_PROJECT,
} from "../constants/CyberBugs/DrawerCyberBugs";

const initialState = {
  visible: false,
  componentContentDrawer: <p>default</p>,
  callBackSubmit: () => {
    alert("xin chào");
  },
};

export const DrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, visible: true };
    case CLOSE_DRAWER:
      return { ...state, visible: false };
    case OPEN_DRAWER_EDIT_FORM:
      return {
        ...state,
        visible: true,
        componentContentDrawer: action.component,
      };
    case SET_SUBMIT_EDIT_PROJECT: {
      state.callBackSubmit = action.submitFunction;
      return { ...state, visible: false };
    }

    default:
      return state;
  }
};
