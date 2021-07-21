import bcrypt from 'bcrypt';

export const up = (queryInterface) =>
  queryInterface.bulkInsert(
    'User',
    [
      {
        username: 'raymond',
        password: bcrypt.hashSync('password', 10),
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'blaise',
        password: bcrypt.hashSync('password', 10),
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'moise',
        password: bcrypt.hashSync('password', 10),
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'irakoze',
        password: bcrypt.hashSync('password', 10),
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'emma',
        password: bcrypt.hashSync('password', 10),
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'fabmanzi',
        password: bcrypt.hashSync('password', 10),
        role: 'Staff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'penny',
        password: bcrypt.hashSync('password', 10),
        role: 'Staff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'yossam',
        password: bcrypt.hashSync('password', 10),
        role: 'Staff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );

export const down = (queryInterface) =>
  queryInterface.bulkDelete('User', null, {});
