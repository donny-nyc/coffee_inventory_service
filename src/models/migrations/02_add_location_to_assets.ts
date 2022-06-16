import { DataTypes } from 'sequelize';
import { Migration } from '../../../umzug';

export const up: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().createTable('locations', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		country: {
			type: DataTypes.STRING(2),
			allowNull: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		administrativeArea: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		subAdministrativeArea: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		locality: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		postalCode: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		thoroughfare: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		premise: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
		}
	});

	await sequelize.getQueryInterface().addColumn('assets',
		'locationId',
		{
			type: DataTypes.INTEGER,
			references: { model: 'locations', key: 'id' },
			allowNull: true,
		}
	)
};

export const down: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().removeColumn('assets', 'locationId')	
	await sequelize.getQueryInterface().dropTable('locations');
};
