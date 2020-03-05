const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let defaultPhoto = randomInt(1,4).toString();

const partySchema = new Schema({
    name: {
        type:String,
        default: "New party"
    },
    image_url: {
        type:String,
        default: `../../client/public/default${defaultPhoto}.jpg`
    },
    forbiddenGenres: {
        type: [Array],
        default: []
    },
    themeMusic: {
        type: [Array],
        default: []
    },
    address: {
        type: String,
        default: "Any address provided"
    },
    location: [Number],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;