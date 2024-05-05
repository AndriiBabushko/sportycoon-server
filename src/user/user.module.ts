import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '@prisma/prisma.service';

@Module({
  imports: [],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
