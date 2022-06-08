import { DataTypes } from 'sequelize';
import { Migration } from '../../../umzug';

export const up: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().createTable('asset_types', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
	});
};

export const down: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().dropTable('asset_types');
};
