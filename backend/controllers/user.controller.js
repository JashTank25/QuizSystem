const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "candidate"
    });

    res.status(201).json({ msg: "User registered successfully", success: true, user });
  } catch (err) {
    res.status(500).json({ msg: "Registration failed", success: false, error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 1000 * 60 * 60 * 2 
      })
      .json({ msg: "Login successful", success: true, user });
  } catch (err) {
    res.status(500).json({ msg: "Login failed", success: false, error: err.message });
  }
};

const logout = (req, res) => {
  res.clearCookie("token").json({ msg: "Logout successful", success: true });
};

const updateProfile = async (req, res) => {
  const userId = req.id;
  const { name } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.name = name || user.name;
    user.college = college || user.college;

    await user.save();
    res.json({ msg: "Profile updated", success: true, user });
  } catch (err) {
    res.status(500).json({ msg: "Update failed", success: false, error: err.message });
  }
};

module.exports = {
    register,
    login,
    logout,
    updateProfile
}
