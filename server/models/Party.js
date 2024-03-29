const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const partySchema = new Schema({
    name: {
        type: String,
        default: "New Sparty"
    },
    image_url: {
        type: String,
        default: `../images/default${randomInt(1,4)}.jpg`
    },
    address: {
        type: String,
        default: "Any address provided"
    },

    addressDetails: {
        type: String,
        default: ""
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    userToken: String,

    playlist: {
        type: String,
        default: "37i9dQZEVXbMDoHDwVN2tF"
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;