const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  spotifyID: String,
  token: String,
  refreshToken: String,
  photo: {
    type: String,
    default: `../images/noPhoto.jpeg`
  },
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
