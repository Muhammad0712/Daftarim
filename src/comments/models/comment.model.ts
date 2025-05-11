import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICommentCreationAttr{
    content: string;
    userId: number;
    blockId: number;
    is_edited: boolean;
}

@Table({tableName: "comments", timestamps: false})
export class Comment extends Model<Comment, ICommentCreationAttr> {

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
    declare userId: number;

    @Column({
        type: DataType.INTEGER
    })
    declare blockId: number;

    @Column({
        type: DataType.BOOLEAN
    })
    declare is_edited: boolean;

}
