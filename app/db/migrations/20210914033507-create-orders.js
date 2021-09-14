'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      inv_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      transaction_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      customer_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      customer_username: {
        allowNull: true,
        type: Sequelize.STRING
      },
      customer_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      payment_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      fulfillment_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      total_amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};