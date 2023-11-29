const { Post } = require("../models");

const postdata = [
  {
    title: "MVC",
    content:
      "MVC allows developers to maintain true separation of concerns",
    user_id: 1,
  },
  {
    title: "Authentication",
    content:
      "There is a difference between authentication and authorization",
    user_id: 2,
  },
  {
    title: "ORMS",
    content:
      "I have really loved learning about ORMS.",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;