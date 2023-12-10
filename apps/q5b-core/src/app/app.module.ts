import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './modules/cats/cats.controller';
import { DogsModule } from './modules/dogs/dogs/dogs.module';

@Module({
  imports: [DogsModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
