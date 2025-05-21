import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
  retrieveAll(@Body() todoDto: NewTodoDto) {
    return this.todoService.retrieveAll(todoDto.status);
  }

  @Put()
  updateStatus(@Body() todoDto: NewTodoDto) {
    return this.todoService.update(todoDto);
  }

  @Delete()
  deleteTodo(@Body() todoDto: NewTodoDto) {
    return this.todoService.delete(todoDto);
  }
}
