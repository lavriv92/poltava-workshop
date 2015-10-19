import co from 'co';
import Post from '../../db/models/post';


class PostCreateService {
  create(data) {
    return co(function *() {
      try {
        return yield new Post(data).save().exec();
      } catch(e) {
        throw e;
      }
    });
  }
}

export default PostCreateService;
