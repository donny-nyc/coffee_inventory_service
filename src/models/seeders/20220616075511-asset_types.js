'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('asset_types', [
			{
				name: "Ground Coffee",
				description: "It's coffee, from the ground",
			}	
		])
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('asset_types', {
			name: "Ground Coffee"
		});	
  }
};
