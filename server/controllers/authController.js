
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hash });
    await newUser.save();
    res.status(201).json('User registered!');
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json('User not found');

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) return res.status(400).json('Wrong password');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
