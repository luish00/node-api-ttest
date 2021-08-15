const mongose = require('../../common/services/mongoose.service');

const UserEntity = require('./user.entity');

const Schema = mongose.Schema;

const userShema = new Schema({
  name: String,
  email: String,
  password: String,
});

userShema.virtual('id').get(function () {
  return this._id.toHexString();
});

userShema.set('toJSON', { virtuals: true });

userShema.findById = function (cb) {
  return this.model('users').find({ id: this.id }, cb);
};

const User = mongose.model('users', userShema);

exports.User = User;