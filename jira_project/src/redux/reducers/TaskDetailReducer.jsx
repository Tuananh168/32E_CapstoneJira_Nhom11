const initialState = {
  taskDetailModal: {
    priorityTask: {
      priorityId: 1,
      priority: "High",
    },
    taskTypeDetail: {
      id: 2,
      taskType: "new task",
    },
    assigness: [
      {
        id: 3034,
        avatar: "https://ui-avatars.com/api/?name=Phát",
        name: "Phát",
        alias: "phat",
      },
      {
        id: 3021,
        avatar: "https://ui-avatars.com/api/?name=Phiet",
        name: "Phiet",
        alias: "phiet",
      },
    ],
    lstComment: [],
    taskId: 7352,
    taskName: "TEST DONE",
    alias: "test-done",
    description: "Xin chào mọi người ơi",
    statusId: "4",
    originalEstimate: 1,
    timeTrackingSpent: 3,
    timeTrackingRemaining: 7,
    typeId: 2,
    priorityId: 1,
    projectId: 9669,
  },
};

export const TaskDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASK_DETAIL": {
      state.taskDetailModal = action.taskDetailModal;
      return { ...state };
    }
    case "CHANGE_TASK_MODAL": {
      const { name, value } = action;
      return {
        ...state,
        taskDetailModal: { ...state.taskDetailModal, [name]: value },
      };
    }
    default:
      return state;
  }
};
