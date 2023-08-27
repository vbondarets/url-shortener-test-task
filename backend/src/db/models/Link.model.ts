import { sequelize } from '../db.js';
import { DataTypes, Model, Optional } from 'sequelize';

interface LinkAttributes {
  id: number,
  old_link: string,
  new_link: string,
  createdAt?: Date;
  updatedAt?: Date;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LinkInput extends Optional<LinkAttributes, 'id'> { }
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LinkOuput extends Required<LinkAttributes> { }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type LinkCreationAttributes = Optional<LinkAttributes, 'id'>;
class Link extends Model<LinkAttributes, LinkInput> implements LinkAttributes {
  public id!: number;
  public old_link!: string;
  public new_link!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}
Link.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  old_link: { type: DataTypes.STRING, unique: false, allowNull: false },
  new_link: { type: DataTypes.STRING, unique: false },
}, {
  timestamps: true,
  sequelize: sequelize,
  paranoid: true
})
export default Link

