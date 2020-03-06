const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const partySchema = new Schema({
    name: {
        type:String,
        default: "New party"
    },
    image_url: {
        type:String,
        default: `https://source.unsplash.com/random?music-party`
    },
    forbiddenGenres: {
        type: [Array],
        default: ["No forbidden genres."]
    },
    themeMusic: {
        type: [Array],
        default: ["No theme music available."]
    },
    address: {
        type: String,
        default: "Any address provided"
    },
    location: {
        type: [Number],
        default: [0,0]
    },

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