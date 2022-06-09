import { 
	CreationOptional,
	DataTypes,
	InferAttributes, 
	InferCreationAttributes, 
	Model 
} from 'sequelize';
import sequelize from '../../config/db';

export class AssetType extends Model<InferAttributes<AssetType>, InferCreationAttributes<AssetType>> {
	declare id: CreationOptional<number>;
	declare name: string;
	declare description: string | null; // for nullable fields
};

AssetType.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true,
	}
}, {
	timestamps: false,
	sequelize,
	tableName: 'asset_types',
});

export default AssetType;
