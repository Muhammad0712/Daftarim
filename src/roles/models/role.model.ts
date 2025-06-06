import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { UserRole } from "../../users/models/user-role.model";

interface IRolesCreationAttr{
    value: string;
    description: string;
}

@Table({ tableName: "roles", timestamps: false })
export class Role extends Model<Role, IRolesCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare description: string;

  @BelongsToMany(()=> User, ()=> UserRole)
    users: User[];
}
