'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('macros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      calories: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      protein: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      carbohidrates: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fat: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('macros');
  }
};