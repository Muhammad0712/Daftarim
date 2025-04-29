import { Column, DataType, Model } from "sequelize-typescript";
interface IContentsCreationAttr{
    blockId: number;
    childId: number;
}

export class Content extends Model<Content, IContentsCreationAttr> {
  @Column({
    type: DataType.INTEGER,
  })
  declare blockId: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare childId: number;
}
