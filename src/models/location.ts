import {
	Association,
	CreationOptional,
	DataTypes,
	HasManyAddAssociationsMixin,
	HasManyGetAssociationsMixin,
	InferAttributes,
	InferCreationAttributes,
	Model,
	NonAttribute
} from 'sequelize';

import { Asset } from './asset';

import sequelize from '../../config/db';

export class Location extends Model<InferAttributes<Location>,
	InferCreationAttributes<Location>> {
	declare id: CreationOptional<number>;

	declare country: string | null;
	declare name: string | null;
	declare administrativeArea: string | null;
	declare subAdministrativeArea: string | null;
	declare locality: string | null;
	declare postalCode: string | null;
	declare thoroughfare: string | null;
	declare premise: string | null;		

	declare getAssets: HasManyGetAssociationsMixin<Asset>;
	declare addAsset: HasManyAddAssociationsMixin<Asset, number>;

	declare assets?: NonAttribute<Asset[]>;

	declare static associations: {
		assets: Association<Location, Asset>;
	}
};

Location.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	country: {
		type: DataTypes.STRING(2),
	},
	name: {
		type: DataTypes.STRING,
	},
	administrativeArea: {
		type: DataTypes.STRING,
	},
	subAdministrativeArea: {
		type: DataTypes.STRING,
	},
	locality: {
		type: DataTypes.STRING,
	},
	postalCode: {
		type: DataTypes.STRING,
	},
	thoroughfare: {
		type: DataTypes.STRING,
	},
	premise: {
		type: DataTypes.STRING,
	}
}, {
	sequelize,
	modelName: 'location',
	tableName: 'locations',
});
