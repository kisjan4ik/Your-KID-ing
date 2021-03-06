import axios from "axios";

const IDEAURL = "/api/ideas";


export default {
  where: function (activity) {
    return axios.get(IDEAURL +
      // "/" + activity.activeness + 
      "/" + activity.where + "/" + activity.age)

  },

  activeness: function () {
    return axios.get(IDEAURL);
  },
  age: function () {
    return axios.get(IDEAURL);
  },
  // Gets all ideas
  getIdeas: function () {
    return axios.get("/api/ideas");
  },
  // Gets the book with the given id
  getIdea: function (id) {
    return axios.get("/api/ideas/" + id);
  },

  // Saves an idea 
  saveIdea: function (id, email) {
    return axios.post("/api/ideas/" + id + "/" + email);
  },

  getUserPlaces: function (id) {
    return axios.get("/api/ideas/dashboard/savedplaces/" + id)
  },

   //****************************/ delete the idea from the savedplaces /*********************************//

   deleteUserPlace: function (id, userId) {
    return axios({
      url: "/api/ideas/dashboard/savedplaces/" + id,
      data:{userId},
      method:"delete"
    })

  }
};