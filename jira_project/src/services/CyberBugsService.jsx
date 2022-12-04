import { baseService } from "./baseService";

export class CyberBugsService extends baseService {
  constructor() {
    super();
  }

  userSignUp = (infoUser) => {
    return this.post(`/api/Users/signup`, infoUser);
  };

  UserCyberBugs = (userLogin) => {
    return this.post(`/api/Users/signin`, userLogin);
  };

  GetUser = (keyword) => {
    return this.get(`/api/Users/getUser?keyword=${keyword}`);
  };

  assignUserProject = (userProject) => {
    return this.post(`/api/Project/assignUserProject`, userProject);
  };
}

export const cyberBugsService = new CyberBugsService();
