var mongoose = require("mongoose");
var Goose = mongoose.model("Goose");
module.exports = {
    index: function(req, res) {
        Goose.find({}, function(req, goose) {
            // console.log(goose);
            res.render("index", {gooses: goose})
        })
    },
    create: function(req, res) {
        var goose = new Goose(req.body);
        goose.save(function(err) {
            if(err) {
                res.redirect("/new");
            }
            else {
                res.redirect("/")
            }
        })
    },
    show: function(req, res) {
        var goose = req.params.id;
        Goose.find({_id: goose}, function(req, goose) {
            console.log(goose);
            res.render("show", {gooses: goose})
        })
    },
    edit: function(req, res) {
        var goose = req.params.id;
        Goose.findOne({_id: goose}, function(req, result) {
            console.log(goose);
            res.render("edit", {gooses: result})
        })
    },
    update: function(req, res) {
        var gooseid = req.params.id;
        Goose.update({_id: gooseid}, req.body, function(err) {
            if(err) {
                console.log(err);
                res.redirect("/mongooses/edit/" + gooseid);
            }
            else {
                res.redirect("/")
            }
        })
    },
    destroy: function(req, res) {
        var goose = req.params.id;
        Goose.remove({_id: goose}, function(err) {
            res.redirect("/")
        })
    }
}