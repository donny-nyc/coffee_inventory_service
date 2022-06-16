import { 
	Association,
	CreationOptional,
	DataTypes,
	ForeignKey,
	HasOneSetAssociationMixin,
	InferAttributes, 
	InferCreationAttributes, 
	Model, 
	NonAttribute
} from 'sequelize';

import { AssetType } from './asset_type';
import { Location } from './location';

import sequelize from '../../config/db';

export class Asset extends Model<InferAttributes<Asset, { omit: 'assetType' }>,
	InferCreationAttributes<Asset, { omit: 'assetType' }>> {
	
	// id can be undefined during creation when using `autoIncrement`
	declare id: CreationOptional<number>;

	// Since TS cannot determine model associations at compile time
	// we declare them here purely virtually
	// these will not exist until `Model.init` gets called
	declare setAssetType: HasOneSetAssociationMixin<AssetType, number>;
	declare setLocation: HasOneSetAssociationMixin<Location, number>;
/*
	declare getAssetType: HasOneGetAssociationMixin<AssetType>;
	declare setAssetType: HasOneSetAssociationMixin<AssetType>;
	declare removeAssetType: HasOneRemoveAssociationMixin<AssetType>;
	declare hasAssetType: HasOneHasAssociationMixin<AssetType>;

*/
	declare assetType?: NonAttribute<AssetType>;

	declare static associations: {
		assetType: Association<Asset, AssetType>;
		location: Association<Asset, Location>;
	};
};

Asset.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
}, {
	sequelize, // pass in the connection instance
	modelName: 'asset',
	tableName: 'assets'
});

Asset.belongsTo(AssetType);
Asset.belongsTo(Location);
