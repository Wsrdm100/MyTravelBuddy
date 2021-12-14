const { User } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const {name, firstname, email, password, image, isAdmin} = req.body

  try{
    const user = await User.create({ name, firstname, email, password, image, isAdmin })
  
    return res.json(user)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}


module.exports = { test, register };