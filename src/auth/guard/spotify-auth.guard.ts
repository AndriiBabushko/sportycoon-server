import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export class SpotifyAuthGuard extends AuthGuard('spotify') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
