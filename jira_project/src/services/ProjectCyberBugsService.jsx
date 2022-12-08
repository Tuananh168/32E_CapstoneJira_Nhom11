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
    console.log("projectUpdateId: ", projectUpdateId.id);
    return this.put(
      `/api/Project/updateProject?projectId=${projectUpdateId.id}`
    );
  };

  deleteProject = (id) => {
    return this.delete(`/api/Project/deleteProject?projectId=${id}`);
  };

  deleteUserFromProject = (userProject) => {
    return this.post(`/api/Project/removeUserFromProject`, userProject);
  };
  getProjectDetail = (projectId) => {
    return this.get(`/api/Project/getProjectDetail?id=${projectId}`);
  };
  getAllProject = () => {
    return this.get(`/api/Project/getAllProject`);
  };
  postTaskProject = (newTask) => {
    return this.post(`/api/Project/createTask`, newTask);
  };
  getTaskDetail = (taskId) => {
    return this.get(`/api/Project/getTaskDetail?taskId=${taskId}`);
  };
  updateStatusTask = (taskStatusId) => {
    return this.put(`/api/Project/updateStatus`, taskStatusId);
  };
  updateTaskProject = (newTask) => {
    return this.post(`/api/Project/updateTask`, newTask);
  };
}

export const projectCyberBugsSevice = new ProjectCyberBugsSevice();
