import { baseService } from "./baseService";

export class ProjectCyberBugsSevice extends baseService {
  constructor() {
    super();
  }

  ProjectCyberBugs = () => {
    return this.get(`/api/Project/getAllProject`);
  };

  UpdateProject = (projectUpdateId) => {
    return this.put(`/api/Project/updateProject=${projectUpdateId}`);
  };

  deleteProject = (id) => {
    return this.delete(`/api/Project/deleteProject?projectId=${id}`);
  };
}

export const projectCyberBugsSevice = new ProjectCyberBugsSevice();
