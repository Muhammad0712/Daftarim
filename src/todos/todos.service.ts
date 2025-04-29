import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Todo } from "./models/todo.model";

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo) {}
  create(createTodoDto: CreateTodoDto) {
    return this.todoModel.create(createTodoDto);
  }

  findAll() {
    return this.todoModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.todoModel.findByPk(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.update(updateTodoDto, { where: { id } });
  }

  async remove(id: number) {
    const data = await this.todoModel.destroy({ where: { id } });
    if (data > 0) {
      return ["Information deleted succesfully!"]
    }
    return `Information not found!`;
  }
}
