import bcrypt from 'bcrypt';

export const up = (queryInterface) =>
  queryInterface.bulkInsert(
    'User',
    [
      {
        username: 'raymond',
        password: bcrypt.hashSync('User321!', 10),
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );

export const down = (queryInterface) =>
  queryInterface.bulkDelete('User', null, {});
