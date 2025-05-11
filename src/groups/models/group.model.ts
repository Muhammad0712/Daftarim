import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IGroupCreationAttr {
    name: string;
    icon: string;
    description: string;
    created_by: number;
}

@Table({tableName: 'groups', timestamps: false})
export class Group extends Model<Group, IGroupCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    declare id: number;

    @Column({
        type: DataType.STRING
    })
    declare name: string;

    @Column({
        type: DataType.STRING
    })
    declare icon: string;

    @Column({
        type: DataType.TEXT
    })
    declare description: string;

    @Column({
        type: DataType.INTEGER
    })
    declare created_by: number;
}
