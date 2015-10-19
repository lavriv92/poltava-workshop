import co from 'co';
import Post from '../../db/models/post';

class PostRepository {
  all() {
    return co(function *() {
      try {
        return yield Post.find({}).exec();
      } catch (e) {
        throw new Error(e.message);
      }
    });
  }

  get_by_id(id) {
    return co(function *() {
      try {
        return yield Post.findOne({ _id: id });
      } catch (e) {
        throw new Error(e.message);
      }
    });
  }
}

export default PostRepository;
