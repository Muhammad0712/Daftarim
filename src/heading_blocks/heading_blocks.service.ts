import { Injectable } from "@nestjs/common";
import { CreateHeadingBlockDto } from "./dto/create-heading_block.dto";
import { UpdateHeadingBlockDto } from "./dto/update-heading_block.dto";
import { InjectModel } from "@nestjs/sequelize";
import { HeadingBlock } from "./models/heading_block.model";

@Injectable()
export class HeadingBlocksService {
  constructor(
    @InjectModel(HeadingBlock) private headingBlockModel: typeof HeadingBlock
  ) {}
  create(createHeadingBlockDto: CreateHeadingBlockDto) {
    return this.headingBlockModel.create(createHeadingBlockDto);
  }

  findAll() {
    return this.headingBlockModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.headingBlockModel.findByPk(id);
  }

  update(id: number, updateHeadingBlockDto: UpdateHeadingBlockDto) {
    return this.headingBlockModel.update(updateHeadingBlockDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const data = await this.headingBlockModel.destroy({ where: { id } });
    if (data > 0) {
      return ["Information deleted succesfully!"]
    }
    return ["Heading_block not found!"];
  }
}
