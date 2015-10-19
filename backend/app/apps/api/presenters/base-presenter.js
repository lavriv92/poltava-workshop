
class BasePresenter {
  constructor(model) {
    this.fields = [];
    this.model = model;
  }

  toJSON() {
    let isCollection = Array.isArray(this.model);
    if(isCollection) {
      return this.collectionToJSON(this.model);
    }
    return this.objectToJSON(this.model);
  }

  objectToJSON(model) {
    let payload = {};    
    payload['_id'] = model['_id'];
    for (let field of this.fields) {
      payload[field] = model[field];
    }
    return payload;
  }

  collectionToJSON(model) {
    let payload = model.map((item) => {
      let a = this.objectToJSON(item);
      return a;
    });
    return payload;
  }
}

export default BasePresenter;
