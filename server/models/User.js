const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  spotifyID: String,
  token: String,
  refreshToken: String,
  photo: String,
  product: String,
  spotifyUri: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
