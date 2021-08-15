let UserRepository = null;

if (process.env.enviroment === 'testing') {
  UserRepository = require('../repositories/user.repository.posgress');
} else {
  UserRepository = require('../repositories/user.repository'); 
}

exports.list = ({ perPage, page, res }) => {
  // Validaciones de negocio

  UserRepository.list({ perPage, page }).then((result) => {
    res.status(200).send(result);
  })
}