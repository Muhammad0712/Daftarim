import { Injectable } from "@nestjs/common";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Block } from "./models/block.model";

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block) private blockModel: typeof Block) {}
  create(createBlockDto: CreateBlockDto) {
    return this.blockModel.create(createBlockDto);
  }

  findAll() {
    return this.blockModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.blockModel.findByPk(id);
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return this.blockModel.update(updateBlockDto, { where: { id } });
  }

  async remove(id: number) {
    const data = await this.blockModel.destroy({ where: { id } });
    if (data > 0) {
      return ["Block deleted succesfully!"]
    }
    return `Block not found`;
  }
}
