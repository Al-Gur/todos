import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { NewTodoDto } from '../dto/NewTodoDto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() todoDto: NewTodoDto) {
    return this.todoService.create(todoDto);
  }

  @Get()
  retrieveAll() {
    return this.todoService.retrieveAll();
  }
}
