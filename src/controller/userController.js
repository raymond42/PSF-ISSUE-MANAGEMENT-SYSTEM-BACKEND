import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import models from '../sequelize/models/index';
import { genToken, hashedPassword } from '../helpers/auth';

dotenv.config();

const { User } = models;

class UserController {
  async login(req, res) {
    const { username, password } = req.body;

    const users = await User.findAll();

    const user = await User.findOne({
      where: { username },
    });

    const isPasswordMatch = await hashedPassword(password);

    if (!user || !isPasswordMatch) {
      return res.status(400).json({
        status: 400,
        error: 'Wrong email or password',
      });
    }

    const generatedToken = genToken(user);

    return res.status(200).json({
      status: 200,
      message: 'Success',
      data: user,
      token: generatedToken,
    });
  }
}

export default UserController;
