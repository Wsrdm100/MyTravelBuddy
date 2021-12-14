const { Rating } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const {rate, comment} = req.body

  try{
    const rating = await Rating.create({ rate, comment })
  
    return res.json(rating)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}


module.exports = { test, register };
