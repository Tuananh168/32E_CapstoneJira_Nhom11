import React from "react";

import {
  CLOSE_DRAWER,
  OPEN_DRAWER,
  OPEN_DRAWER_CREATE_FORM,
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
      state.visible = true;
      state.componentContentDrawer = action.component;
      state.title = action.title;
      return { ...state };
    case SET_SUBMIT_EDIT_PROJECT: {
      return { ...state, callBackSubmit: action.submitFunction };
    }
    case OPEN_DRAWER_CREATE_FORM: {
      state.visible = true;
      state.componentContentDrawer = action.component;
      state.title = action.title;
      return { ...state };
    }
    case "SET_SUBMIT_CREATE_TASK": {
      return { ...state, callBackSubmit: action.submitFunction };
    }

    default:
      return state;
  }
};
