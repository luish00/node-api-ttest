const {
  findById,
  insert,
  list,
  path,
  remove,
} = require('./controllers/user.controller');
const { validUser } = require('./middleware/user.middleware')

const route = {};

route.routesConfig = (app) => {
  app.post('/users', [validUser, insert]);
  app.get('/users', list);
  app.get('/users/:id', findById);
  app.path('/users/:id', path);
  app.delete('/users/:id', remove);
};

module.exports = route;
