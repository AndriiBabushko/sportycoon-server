import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '@entities/user/user.module';
import { AuthController } from '@entities/auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@entities/auth/local.strategy';
import { SessionSerializer } from '@entities/auth/session.serializer';

@Module({
  controllers: [AuthController],
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
