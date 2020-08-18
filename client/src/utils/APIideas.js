import axios from "axios";

const IDEAURL = "http://localhost:3001/api/ideas";


export default {
  where: function () {
    return axios.get(IDEAURL);
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
//   // Deletes the idea with the given id
//   deleteIdea: function (id) {
//     return axios.delete("/api/ideas/" + id);
//   },
  // Saves an idea to the database
  saveIdea: function (ideaData) {
    return axios.post("/api/ideas", ideaData);
  }
};