import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('bUIld website builder Api Documentation')
    .setVersion('1.0')
    .addTag('Web Builder NestJs')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api',app,document)

  app.enableCors()
  await app.listen(7000);
}
bootstrap();