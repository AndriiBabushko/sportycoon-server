import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as process from 'node:process';

const port = process.env.API_PORT || 3000;
console.log(
  `Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`,
);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:8080',
      'http://localhost:8000',
      'https://sportycoon-dashboard.vercel.app',
      'https://sportycoon-server.onrender.com',
      'https://sportycoon.vercel.app',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      process.env.SPORTYCOON_DASHBOARD_URL || '*',
    );
    if (req.path === '/graphql') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Apollo-Require-Preflight', true);
    }

    next();
  });

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  // app.setViewEngine('ejs');

  await app.listen(port, '0.0.0.0');
}

bootstrap();
