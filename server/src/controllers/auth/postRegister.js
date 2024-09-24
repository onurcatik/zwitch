import User from "../../models/User.js";
import bcrypt from 'bcryptjs'
import Channel from "../../models/Channel.js";
import jwt from 'jsonwebtoken'

export const postRegister = async (req, res) => {
try { 
  const { username , email, password} = req.body;

  const userExists = await User.exists({ email });

  if (userExists) {
    return res.status(409).send("E-mail already in use");
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const newChannel = await Channel.create({

  })

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password: encryptedPassword,
    channel : newChannel._id,
  });

// create JWT token

const token = jwt.sign(
  // user details which we would like to encrypt in JWT token
  {
    userId: user._id,
    email: user.email,
  },
  // secret
  process.env.TOKEN_KEY,
  // addtional config
  {
    expiresIn: "8h",
  }
)

return res.status(201).json({
  userDetails: {
    email: user.email,
    username,
    token,
  },
});




// send succes response back to the user
} catch (err) {
  console.log(err);
  return res.status(500).send("Error occured. Please try again");
}


  return res.send("user has been added to database");
};
