import { Injectable } from "@nestjs/common";
import { CreateTextDto } from "./dto/create-text.dto";
import { UpdateTextDto } from "./dto/update-text.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Text } from "./models/text.model";

@Injectable()
export class TextsService {
  constructor(@InjectModel(Text) private textModel: typeof Text) {}
  create(createTextDto: CreateTextDto) {
    return this.textModel.create(createTextDto);
  }

  findAll() {
    return this.textModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.textModel.findByPk(id);
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    return this.textModel.update(updateTextDto, { where: { id } });
  }

  async remove(id: number) {
    const data = await this.textModel.destroy({ where: { id } });
    if (data > 0) {
      return ["Text deleted succesfully!", data]
    }
    return ["Text not found!"];
  }
}
