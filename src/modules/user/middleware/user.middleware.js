exports.validUser = function (req, res, next) {
  const { body } = req;

  // validaciones campos requeridos

  if (!body.name || !body.email || !body.password) {
    res.status(400).send({
      error: 'field requied: name, email, password',
    });
  }

  req.body.isValid = true;

  next();
}