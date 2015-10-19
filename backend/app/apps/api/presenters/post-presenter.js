import BasePresenter from './base-presenter';

class PostPresenter extends BasePresenter {
  constructor(post) {
    super(post);
    this.fields = ['title', 'content', 'created'];
  }
}

export default PostPresenter
