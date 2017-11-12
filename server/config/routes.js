var mongoose = require("mongoose");
var Goose = mongoose.model("Goose");
var gooses = require("../controllers/gooses.js")
module.exports = function(app) {
    app.get("/", function(req, res) {
        gooses.index(req, res);
    })
    
    app.get("/mongooses/new", function(req, res) {
        res.render("new");
    })

    app.post("/mongooses", function(req, res) {
        gooses.create(req, res);
    })

    app.get("/mongooses/:id", function(req, res) {
        gooses.show(req, res);
    })
    
    app.get("/mongooses/edit/:id", function(req, res) {
        gooses.edit(req, res);
    })
    
    app.post("/mongooses/:id", function(req, res) {
        gooses.update(req, res);
    })
    
    app.post("/mongooses/destroy/:id", function(req, res) {
        gooses.destroy(req, res);
    })
}