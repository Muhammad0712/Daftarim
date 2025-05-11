import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IDeviceCreationAttr {
    userId: number;
    name: string;
    last_active: Date;
    location: string;
    information: string;
}

@Table({tableName: 'devices', timestamps: false})
export class Device extends Model<Device, IDeviceCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    declare id: number;

    @Column({
        type: DataType.INTEGER
    })
    declare userId: number;

    @Column({
        type: DataType.STRING
    })
    declare name: string;

    @Column({
        type: DataType.DATE
    })
    declare last_active: Date;

    @Column({
        type: DataType.TEXT
    })
    declare location: string;

    @Column({
        type: DataType.STRING
    })
    declare information: string;
}
