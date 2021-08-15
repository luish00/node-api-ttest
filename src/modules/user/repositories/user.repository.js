const { User } = require('../models/user.model');
const mongoose = require('mongoose');

const userRepository = {}

userRepository.findById = function (id) {
  return User.findById(mongoose.Types.ObjectId(id))
    .then((result) => {
      result = result.toJSON();

      return result;
    });
};

userRepository.create = function (user) {
  const newUser = new User(user);
  return newUser.save();
}

userRepository.list = function ({ perPage, page }) {
  return new Promise(function (resolve, reject) {
    User.find().limit(perPage).skip(perPage * page)
      .exec(function (error, users) {
        if (error) {
          reject(error);
        } else {
          resolve(users);
        }
      });
  });
}

userRepository.patch = function ({ id, user }) {
  const options = { returnNewDocument: true };

  return User.findOneAndUpdate({ _id: id }, user, options)
    .then(function (userUpdated) {
      return userUpdated;
    });
}

userRepository.remove = function (id) {
  console.log('id', id)

  return new Promise(function (resolve, reject) {
    User.deleteOne({ _id: mongoose.Types.ObjectId(id) }, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve(id);
      }
    })
  })
}


module.exports = userRepository;
