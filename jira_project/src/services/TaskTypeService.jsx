import { baseService } from "./baseService";

export class TaskTypeService extends baseService {
  constructor() {
    super();
  }

  taskTypeProject = () => {
    return this.get(`/api/TaskType/getAll`);
  };
}

export const taskTypeService = new TaskTypeService();
