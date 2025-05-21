import { Injectable } from '@nestjs/common';
import { NewTodoDto } from '../dto/NewTodoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../model/todo.entity';
import { Repository } from 'typeorm';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler';

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

  retrieveAll(requestedStatus: string) {
    //console.log(requestedStatus);
    return this.todoRepository.findBy({ status: requestedStatus });
  }

  update(todoDto: NewTodoDto) {
    let result: Todo = { title: '', status: '', id: 0 };
    const todo = this.todoRepository.findOneBy({ title: todoDto.title });
    todo.then((value) => {
      if (value) {
        result = value;
      }
    });
    if (result) {
      result.status = todoDto.status;
      return this.todoRepository.save(result);
    }
  }

  delete(todoDto: NewTodoDto) {
    let result: Todo = { title: '', status: '', id: 0 };
    const todo = this.todoRepository.findOneBy({ title: todoDto.title });
    todo.then((value) => {
      if (value) {
        result = value;
      }
    });
    if (result) {
      return this.todoRepository.remove([result]);
    }
  }
}
