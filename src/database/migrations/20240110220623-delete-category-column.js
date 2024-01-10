"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("products", "category");
  },

  async down(queryInterface) {
    await queryInterface.addColumn("products", "category");
  },
};
