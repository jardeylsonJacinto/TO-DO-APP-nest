import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { todos } from './todos-mock';

let todosData = todos;

@Controller('todos')
export class TodoController {
  @Get()
  getTodos(): TodoDTO[] {
    return todosData;
  }

  @Post()
  createTodo(@Body() createTodo: TodoDTO): TodoDTO {
    const newTodo: TodoDTO = {
      id: (todosData.length + 1).toString(),
      ...createTodo,
    };

    todosData = [...todosData, newTodo];

    return newTodo;
  }
}
