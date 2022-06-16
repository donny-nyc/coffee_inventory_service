'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('locations', [
			{
				country: "US",
				name: "408 3rd Ave",
				administrativeArea: "New York",
				locality: "Brooklyn",
				postalCode: "11215",
				thoroughfare: "408 3rd Avenue",
			},
		]);
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('locations', {});
  }
};
