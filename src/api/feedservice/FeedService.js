import apiConfig from "../apiConfig";
import axios from "axios";

const baseurl = apiConfig.baseUrl;
const apitype = "feed";

const feedservice = {
  async PostFeed(user, title, content, movieid) {
    try {
      await axios.post(
        baseurl + apitype,
        {
          topicName: title,
          content: content,
          author: user,
          movieId: movieid,
        }
      );
    }catch (error) {
      throw error;
    }
  },
};

export default feedservice;
