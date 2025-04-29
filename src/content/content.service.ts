import { Injectable } from "@nestjs/common";
import { CreateContentDto } from "./dto/create-content.dto";
import { UpdateContentDto } from "./dto/update-content.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Content } from "./models/content.model";

@Injectable()
export class ContentService {
  constructor(@InjectModel(Content) private contentModel: typeof Content) {}
  create(createContentDto: CreateContentDto) {
    return this.contentModel.create(createContentDto);
  }

  findAll() {
    return this.contentModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.contentModel.findByPk(id);
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.contentModel.update(updateContentDto, { where: { id } });
  }

  async remove(id: number) {
    const data = await this.contentModel.destroy({ where: { id } });
    if (data > 0) {
      return ["Information deleted succesfully!"]
    }
    return ["Information not found!"];
  }
}
