import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './models/group.model';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupModel: typeof Group) {}
  create(createGroupDto: CreateGroupDto) {
    return this.groupModel.create(createGroupDto);
  }

  findAll() {
    return this.groupModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.groupModel.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupModel.update(updateGroupDto, { where: { id } });
  }

  remove(id: number) {
    return this.groupModel.destroy({ where: { id } });
  }
}
