var mongoose = require('mongoose');
var GooseSchema = new mongoose.Schema({
    name: {type: String},
    creater: {type:String}
}, {timestamps: true})
mongoose.model("Goose", GooseSchema);
var Goose = mongoose.model("Goose");