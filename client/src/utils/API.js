import axios from "axios";

export default {
  searchPerson: function () {
    return axios.get("https://randomuser.me/api/");
  },
};
