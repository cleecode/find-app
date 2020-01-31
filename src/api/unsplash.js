import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 9bd92242479cd2fae0f197e1b6ef8fda23f382ef8b2371f580ffef42fffa156a"
  }
});
