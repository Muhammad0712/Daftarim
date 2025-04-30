import { Column, DataType, Model, Table } from "sequelize-typescript";
interface IContentsCreationAttr{
    blockId: number;
    childId: number;
}
@Table({tableName: "contents", timestamps: false})
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
