const UserRepository = require('../repositories/user.repository');
const UserManager = require('../managers/user.manager');


exports.insert = function (request, response) {
  const { body } = request;

  UserRepository.create(body).then((result) => {
    response.status(200).send({ data: result });
  });
}

exports.list = function (req, res) {
  const { query } = req;

  let page = 0;
  let limit = query.limit && query.limit <= 100 ? parseInt(query.limit) : 10;

  if (query && query.page) {
    query.page = parseInt(query.page);
    page = Number.isInteger(query.page) ? query.page : 0;
  }

  UserManager.list({ perPage: limit, page, res });

  // UserRepository.list({ perPage: limit, page }).then((result) => {
  //   res.status(200).send(result);
  // })
}

exports.findById = function (req, res) {
  const { params } = req;

  UserRepository.findById(params.id).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    console.log('error', error)
    res.status(500).send({data: null, message: "valio chetos"})
  })
}


exports.path = function (request, response) {
  const { body, params } = request;

  UserRepository.patch({ id: params.id, user: body }).then((result) => {
    if (result && result._id) {
      response.status(201).send({ id: result._id });
    } else {
      response.status(400).send({});
    }
  });
}

exports.remove = function (req, res) {
  UserRepository.remove(req.params.id).then((result) => {
    // res.status(202).send({ id: req.params.id })
    res.status(204).send({});
  });
};