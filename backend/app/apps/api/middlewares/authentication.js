export default (req, res, next) => {

  if(req.body.token) {
    // do something
    next();
  } else {
    res.json({
      'error': 'Ivalid token'
    });
  }
};
