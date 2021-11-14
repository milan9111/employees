import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://yalantis-react-school-api.yalantis.com/",
});

export const employeesAPI = {
  getEmployees() {
    return instance.get(`api/task0/users`).then((response) => {
      return response.data;
    });
  },
};
