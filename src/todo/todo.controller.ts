import { Controller, Get } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { todos } from './todos-mock';

const todosData = todos;

@Controller('todos')
export class TodoController {
  @Get()
  getTodos(): TodoDTO[] {
    return todosData;
  }
}
