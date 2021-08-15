const userRepository = {}

userRepository.findById = function (id) {
  return new Promise();
};

userRepository.create = function (user) {
  const newUser = new User(user);
  return newUser.save();
}

userRepository.list = function ({ perPage, page }) {
  return new Promise((resolve) => {
    resolve([
      {
        id: 'asdasd23w123',
        name: "Soy un nombre",
        email: 'soy_un_email@gmail.com'
      }
    ])
  });
}

userRepository.patch = function ({ id, user }) {
  const options = { returnNewDocument: true };

  return new Promise();
}

userRepository.remove = function (id) {
  return new Promise()
}


module.exports = userRepository;
