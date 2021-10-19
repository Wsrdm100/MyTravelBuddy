const { User } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

module.exports = { test };
