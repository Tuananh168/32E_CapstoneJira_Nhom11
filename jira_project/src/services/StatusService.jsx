import { baseService } from "./baseService";

export class StatusService extends baseService {
  constructor() {
    super();
  }

  statusProject = () => {
    return this.get(`/api/Status/getAll`);
  };
}

export const statusService = new StatusService();
