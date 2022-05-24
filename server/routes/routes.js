const express = require("express");
const { ObjectId } = require("mongodb");

function routes(app, database) {
  const router = express.Router();

  router.route("/record").get(function (req, res, next) {
    database
      .collection("records")
      .find({})
      .toArray((err, data) => {
        if (err) {
          console.log(err);
          next(err);
        }
        res.json(data);
      });
  });

  router.route("/record/:id").get(function (req, res) {
    let myquery = { _id: ObjectId(req.params.id) };
    database.collection("records").findOne(myquery, (err, data) => {
      if (err) {
        console.log(err);
        next(err);
      }
      res.json(data);
    });
  });

  router.route("/record/add").post((req, res) => {
    let myobj = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    database.collection("records").insertOne(myobj, function (err, data) {
      if (err) {
        console.log(err);
        next(err);
      }
      res.json(data);
    });
  });

  router.route("/update/:id").post((req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    database
      .collection("records")
      .updateOne(myquery, newvalues, function (err, data) {
        if (err) {
          console.log(err);
          next(err);
        }
        console.log("1 record updated");
        res.json(data);
      });
  });

  router.route("/:id").delete((req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    database.collection("records").deleteOne(myquery, (err, data) => {
      if (err) {
        console.log(err);
        next(err);
      }
      console.log("1 document deleted");
      res.json(data);
    });
  });

  app.use(router);
  return app;
}

module.exports = routes;
