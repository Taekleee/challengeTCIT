import http from "../http-common";

class PostDataService {
  getAll() {
    return http.get("/postList");
  }

  create(data) {
    return http.post("/posts", data);
  }

  delete(name) {
    return http.post(`/deletePost`, {name});
  }

}

export default new PostDataService();