import axios from "axios";

const IDEAURL = "/api/ideas";


export default {
  where: function (activity) {
    console.log("activity:" + JSON.stringify(activity));
    return axios.get(IDEAURL + 
      // "/" + activity.activeness + 
      "/" + activity.where +"/" + activity.age)
    
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
  saveIdea: function (ideaData) {
    return axios.post("/api/ideas", ideaData);
  }
};