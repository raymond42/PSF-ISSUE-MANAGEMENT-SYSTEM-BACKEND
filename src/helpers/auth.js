import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import bcrypt from 'bcrypt';

config();

const genToken = (user) =>
  jwt.sign(
    {
      role: user.role,
      username: user.userName,
    },
    process.env.SECRET_KEY,
    { expiresIn: '1d' },
  );

const hashedPassword = (password) =>
  bcrypt.hashSync(password, 10);

const unHashedPassword = (hashedPass, compare) =>
  bcrypt.compareSync(hashedPass, compare);

export { genToken, hashedPassword, unHashedPassword };
