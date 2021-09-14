'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('Orders', ['payment_status'], {
      name: 'Orders_payment_status'
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('Orders', 'Orders_payment_status');
  }
};
