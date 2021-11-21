const { Administrator } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const {name, firstname, email, password, image} = req.body

  try{
    const administrator = await Administrator.create({ name, firstname, email, password, image})
  
    return res.json(administrator)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}


module.exports = { test, register };