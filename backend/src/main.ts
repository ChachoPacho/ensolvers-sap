import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path/posix';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  app.useStaticAssets(join(__dirname, 'client'));
  app.setBaseViewsDir(join(__dirname, 'client'));

  await app.listen(process.env.PORT);
}
bootstrap();
