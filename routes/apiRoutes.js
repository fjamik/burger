// import our burgers model
const burgers = require("../models/burgers");

module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function (req, res) {
    burgers.findAll()
      .then(burgersDb => res.json(burgersDb))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create a new burger
  app.post("/api/burgers", function (req, res) {

    burgers.create(req.body)
      .then(burgersDb => res.json(burgersDb))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a burger by its id
  app.get("/api/burgers/:id", function (req, res) {
    burgers.findById(req.params.id)
      .then(burgersDb => res.json(burgersDb))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // update a burger devoured
  app.put("/api/burgers/:id", function (req, res) {

    burgers.update(req.body.devoured, req.params.id)
      .then(burgersDb => res.json(burgersDb))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // remove each by id
  app.delete("/api/burgers/:id", function (req, res) {
    burgers.remove(req.params.id)
      .then(burgersDb => res.json(burgersDb))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}