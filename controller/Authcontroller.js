const UserModel = require("../model/User");

const register = async(req,res) => {
    const {fname,lname,email,password} = req.body;

    const userExist = await UserModel.findOne({email})

    if(userExist){
        return res.status(404).json({status: false, message : "User Already Exist"})
    }
    
    const user = UserModel({
        
        firstName : fname, 
        lastName: lname,
        email:email,
        password: password
    })
    
    user.save()

    return res.status(200).json({status: true, message : "User Register Successfully"})
}

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Check password (for now plain text, later use hashing)
    if (user.password !== password) {
      return res.status(401).json({ status: false, message: "Invalid password" });
    }

    // Successful login
    return res.status(200).json({
      status: true,
      message: "Login successful",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePic: user.profilePic || "" // optional field
      }
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, message: "Server error" });
  }
}


module.exports = AuthController = { register,login}




