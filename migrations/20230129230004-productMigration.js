'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
      idProduct: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
          type: Sequelize.DataTypes.STRING(45),
          unique: true,
          allowNull: false
      },
      value: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false
      },
      unit: {
          type: Sequelize.DataTypes.STRING(10),
          allowNull: false
      },
      monthly: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
      },
      density: {
          type: Sequelize.DataTypes.FLOAT
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Product')
  }
};
