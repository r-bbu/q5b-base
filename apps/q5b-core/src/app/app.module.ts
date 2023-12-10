import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './modules/cats/cats.controller';
import { DogsModule } from './modules/dogs/dogs.module';
import { MiddlewaresModule } from './modules/middlewares/middlewares.module';
import { LoggerMiddleware } from './modules/middlewares/logger.middleware';

@Module({
  imports: [DogsModule, MiddlewaresModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      {
        path: 'cats',
        method: RequestMethod.ALL,
      },
      {
        path: 'dogs',
        method: RequestMethod.ALL,
      },
    );
  }
}
