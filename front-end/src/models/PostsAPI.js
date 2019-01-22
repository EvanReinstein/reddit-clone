import axios from 'axios';
const PostsUrl = `http://localhost:8080/api/posts`;

class PostsAPI {
  static index = () => axios.get(PostsUrl);

}

export default PostsAPI;
