import { Column, DataType, Model } from "sequelize-typescript";

interface IBlocksCreationAttr {
  typeId: number;
  createdBy: number;
  parent: number;
  order_index: number;
  colorId: number;
  backgroundColorId: number;
}

export class Block extends Model<Block, IBlocksCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare typeId: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare createdBy: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare parent: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare order_index: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare colorId: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare backgroundColorId: number;
}
