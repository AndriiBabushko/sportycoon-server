import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from '@auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@user/user.module';

@Module({
  imports: [PassportModule, UserModule],
  providers: [AuthService, AuthResolver, LocalStrategy],
})
export class AuthModule {}
