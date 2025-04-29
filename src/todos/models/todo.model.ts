import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITodosCreationAttr {
  content: string;
  is_completed: boolean;
}

@Table({ tableName: "todos", timestamps: false })
export class Todo extends Model<Todo, ITodosCreationAttr> {

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
        type: DataType.BOOLEAN
    })
    declare is_completed: boolean;
}
