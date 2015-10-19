import co from 'co';
import Comment from '../../db/models/comment';


class CreateComment {
  create(commentData) {
    return co(function *() {
      try {
        return yield new Comment(commentData).save().exec();
      } catch (err) {
        throw err;
      }
    });
  }
}

export default CreateComment;
