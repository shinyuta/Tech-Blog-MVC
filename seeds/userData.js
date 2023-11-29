const { User } = require("../models");

const userdata = [
  {
    username: "Yuta",
    password: "password123",
  },
  {
    username: "Lernantino",
    password: "password1234",
  },
  {
    username: "Xanderomus",
    password: "password12345",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;