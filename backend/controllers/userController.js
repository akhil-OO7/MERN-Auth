// login

const loginUser = async (req, res) => {
  res.status(200).json({ mssg: "Login user" });
};

const signupUser = async (req, res) => {
  res.status(200).json({ mssg: "Signup user" });
};

module.exports = {
  loginUser,
  signupUser,
};
