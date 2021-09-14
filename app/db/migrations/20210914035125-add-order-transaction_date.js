'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('Orders', ['transaction_date'], {
      name: 'Orders_transaction_date'
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('Orders', 'Orders_transaction_date');
  }
};
