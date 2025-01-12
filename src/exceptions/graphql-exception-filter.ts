import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';

@Catch(HttpException)
export class GraphQLExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const response = gqlHost.getContext().res;

    const status = exception.getStatus();
    const message = exception.message;

    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}
