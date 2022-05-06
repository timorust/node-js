const express = require("express");
const router = express.Router();
const Contacts = require("../models/contacts");
const createPath = require("../helpers/create-path");

router.get("/contacts", (req, res) => {
  const title = "Contacts";

  Contacts.find()
    .then(contacts => res.render(createPath("contacts"), { contacts, title }))
    .catch(error => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});

module.exports = router;