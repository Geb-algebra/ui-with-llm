import { prisma } from '~/db.server.ts';

import config from '../playwright.config.ts';

export async function resetDB() {
  // execSync('npx prisma migrate reset --force');  // waste too much time
  await prisma.user.deleteMany();
  // add more deleteMany here if needed
}

export function ignoreQueryRegExp(url: string) {
  return new RegExp(`^${config.use?.baseURL}${url}(?:\\?.*)?$`, 'i');
}
