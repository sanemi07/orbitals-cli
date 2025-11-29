import {prismaClient} from '../generated/prisma';
const globalForPrisma = global 
const prisma=new prismaClient();
if(process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
export  default prisma;