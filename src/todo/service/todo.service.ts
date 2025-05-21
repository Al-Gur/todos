import { Injectable } from '@nestjs/common';
import { NewTodoDto } from '../dto/NewTodoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../model/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  create(todoDto: NewTodoDto) {
    const todo = this.todoRepository.create(todoDto);
    return this.todoRepository.save(todo);
  }

  retrieveAll() {
    return this.todoRepository.findBy({status:"in progress"});
  }
}
