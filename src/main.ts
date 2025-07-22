import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ===== Swagger Настройка =====
  const config = new DocumentBuilder()
    .setTitle('Site Health Check API')
    .setDescription('API для мониторинга доступности сайтов')
    .setVersion('1.0')
    .addBearerAuth() // Для JWT-аутентификации
    .addTag('sites', 'Управление отслеживаемыми сайтами')
    .addTag('monitoring', 'Проверка статуса сайтов')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Site Health Check API',
    swaggerOptions: {
      persistAuthorization: true, // Сохранение авторизации при обновлении
      tagsSorter: 'alpha', // Сортировка тегов
      operationsSorter: 'alpha', // Сортировка методов
    },
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `Application is running on: http://localhost:${process.env.PORT}/docs`,
  );
}
bootstrap();
