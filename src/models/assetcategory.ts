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

class AssetCategory extends Model<InferAttributes<AssetCategory>,
	InferCreationAttributes<AssetCategory>> {
	declare id: CreationOptional<number>;

	declare description: string;
}
