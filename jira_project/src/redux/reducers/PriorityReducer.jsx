import { PRIORITY_PROJECT } from "../constants/ConstantReducer/PriorityConstantReducer";

const initialState = {
  arrPriority: [],
};

export const PriorityReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIORITY_PROJECT:
      return { ...state, arrPriority: action.arrPriority };

    default:
      return state;
  }
};
