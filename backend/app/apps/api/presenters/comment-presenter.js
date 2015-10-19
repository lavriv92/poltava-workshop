import BasePresenter from './base-presenter';

class CommentPresenter extends BasePresenter {
  constructor(post) {
    super(post);
    this.fields = ['post', 'content', 'created'];
  }
}

export default CommentPresenter
