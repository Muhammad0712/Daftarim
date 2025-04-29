import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITextCreationAttr {
  content: string;
  alignment: string;
}

@Table({ tableName: "texts", timestamps: false })
export class Text extends Model<Text, ITextCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    declare id: number;

    @Column({
        type: DataType.STRING
    })
    declare content: string;

    @Column({
        type: DataType.STRING
    })
    declare alignment: string;
}
