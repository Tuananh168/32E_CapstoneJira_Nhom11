import { baseService } from "./baseService";

export class ProjectCyberBugsSevice extends baseService {
  constructor() {
    super();
  }

  createProject = (newProject) => {
    return this.post(`/api/Project/createProject`, newProject);
  };

  createProjectAuthorize = (newProject) => {
    return this.post(`/api/Project/createProjectAuthorize`, newProject);
  };

  ProjectCyberBugs = () => {
    return this.get(`/api/Project/getAllProject`);
  };

  UpdateProject = (projectUpdateId) => {
    return this.put(`/api/Project/updateProject=${projectUpdateId}`);
  };

  deleteProject = (id) => {
    return this.delete(`/api/Project/deleteProject?projectId=${id}`);
  };

  deleteUserFromProject = (userProject) => {
    return this.post(`/api/Project/removeUserFromProject`, userProject);
  };
}

export const projectCyberBugsSevice = new ProjectCyberBugsSevice();
