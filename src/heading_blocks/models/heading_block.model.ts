import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IHeadingBlockCreationAttr{
    content: string;
    level: number;
}

@Table({tableName: "heading_blocks", timestamps: false})
export class HeadingBlock extends Model<HeadingBlock, IHeadingBlockCreationAttr> {
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
        type: DataType.INTEGER
    })
    declare level: number;
}
