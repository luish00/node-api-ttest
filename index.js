const express = require('express');

const userRoute = require('./src/modules/user/routes.config');

const app = express();

app.use(express.json());

userRoute.routesConfig(app);

const port = process.env.PORT || 3333;
app.listen(port, function() {
  console.log('app listening at port %s', port);
});