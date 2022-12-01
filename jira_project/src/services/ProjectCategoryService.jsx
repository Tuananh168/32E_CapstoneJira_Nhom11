import { baseService } from "./baseService";

export class ProjectCategoryService extends baseService {
  constructor() {
    super();
  }

  ProjectCategory = () => {
    return this.get(`/api/ProjectCategory`);
  };
}

export const projectCategoryService = new ProjectCategoryService();
