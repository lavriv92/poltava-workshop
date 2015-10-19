import co from 'co';
import Comment from '../../db/models/comment';

class CommentRepository {
  all() {
    return co(function *() {
      try {
        return yield Post.find({}).exec();
      } catch (e) {
        throw new Error(e.message);
      }
    })
  }
}

export default PostRepository;
