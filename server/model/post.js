var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate');
var shortid = require('shortid');
var textSearch = require('mongoose-text-search');

module.exports = mongoose.model('post', new mongoose.Schema({
    // User Id
    _uid: mongoose.Schema.Types.ObjectId,

    sid: {
        type: String,
        unique: true,
        index: true,
        'default': shortid.generate
    },

    slg: {
        type: String,
        unique: true,
        index: true
    },

    // Title
    tl: String,

    // Page Title
    pl: String,

    // Image

    img: String,

    // Source
    src: String,

    // Description 
    desc: String,

    // Html Content
    htm: String,

    tags: [String],

    v: { type: Number, default: 0 },

    stt: {
        type: Number,
        default: 0
    },

    at: {
        type: Date,
        default: Date.now
    },
    
    crt: {
        type: Date,
        default: Date.now
    },
    auth: {}

}, { collection: 'posts' }).plugin(mongoosePaginate).plugin(textSearch));
