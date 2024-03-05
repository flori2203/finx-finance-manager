import { prisma } from './prisma';

export const initalSetup = async () => {
  const userAmount = await prisma.user.count();

  if (userAmount === 0) {
    console.log('Creating admin user');
    await prisma.user.create({
      data: {
        name: 'Admin',
        email: 'test@test.de',
        password: 'test',
      },
    });
  }
};
