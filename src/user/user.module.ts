import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '@prisma/prisma.service';
import { UserResolver } from '@user/user.resolver';

@Module({
  providers: [UserService, PrismaService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
