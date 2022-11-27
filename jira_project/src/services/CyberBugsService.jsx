import { baseService } from "./baseService";

export class CyberBugsService extends baseService {
  constructor() {
    super();
  }

  UserCyberBugs = (userLogin) => {
    return this.post(`/api/Users/signin`, userLogin);
  };
}

export const cyberBugsService = new CyberBugsService();
