import { 
	Model, 
	InferAttributes, 
	InferCreationAttributes, 
	CreationOptional,
	Association,
	DataTypes,
	HasOneHasAssociationMixin,
	HasOneAddAssociationMixin,
	HasOneGetAssociationMixin,
	HasOneRemoveAssociationMixin,
	NonAttribute
} from 'sequelize';

import sequelizeConnection from '../../config/db'

class Asset extends Model<InferAttributes<Asset, { omit: 'asset_category' }>,
	InferCreationAttributes<Asset, { omit: 'asset_category' }>> {
	
	// id can be undefined during creation when using `autoIncrement`
	declare id: CreationOptional<number>;

	// Since TS cannot determine model associations at compile time
	// we declare them here purely virtually
	// these will not exist until `Model.init` gets called
	declare getAssetCategory: HasOneGetAssociationMixin<AssetCategory>;
	declare setAssetCategory: HasOneSetAssociationMixin<AssetCategory>;
	declare removeAssetCategory: HasOneRemoveAssociationMixin<AssetCategory>;
	declare hasAssetCategory: HasOneHasAssociationMixin<AssetCategory>;

	declare assetCategory?: NonAttribute<AssetCategory>;

	declare static associations: {
		assetCategory: Association<Asset, AssetCategory>;
	};
};

Asset.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: true,
		primaryKey: true
	},
}, {
	sequelizeConnection, // pass in the connection instance
	modelName: 'Asset'
});

console.log(Asset === sequelizeConnection.models.Asset);
