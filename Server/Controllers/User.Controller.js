const UserModel = require("../Model/User.Model");
const asyncHandler = require("express-async-handler");
exports.register = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
  
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Fields");
    }
  
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      res.status(400);
      res.send("User already exists");
    }
  
    const user = await UserModel.create({
      name,
      email,
      password,
      pic,
    })
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        emamil: user.email,
        
      })
    }
  
  });