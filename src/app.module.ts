import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo/todo/todo.controller';

@Module({
  imports: [MongooseModule.forRoot('')],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
