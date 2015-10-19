import co from 'co';
import User from '../../db/models/user';

export default {
  create(userData, cb) {
    co(function *() {
      try {
        let user = new User(userData);
        let created = yield user.save();
        return created;
      } catch(err) {
        console.log(err);
        throw new Error(err.message);
      }
    }).then((user) => {
      cb(null, user);
    }, (err) => {
      cb(err);
    });
  }
}
