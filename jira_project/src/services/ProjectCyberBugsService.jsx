import { baseService } from "./baseService";

export class ProjectCyberBugsSevice extends baseService {
  constructor() {
    super();
  }

  ProjectCyberBugs = () => {
    return this.get(`/api/Project/getAllProject`);
  };

  UpdateProject = (projectUpdateID) => {
    return this.put(`/api/Project/updateProject=${projectUpdateID}`);
  };
}

export const projectCyberBugsSevice = new ProjectCyberBugsSevice();
