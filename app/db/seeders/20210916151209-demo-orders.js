'use strict';
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');
const orders = [...Array(100)].map((order) => (
  {
    id: uuidv4(),
    inv_number: faker.datatype.number(),
    transaction_date: faker.date.past(),
    customer_name: faker.name.findName(),
    customer_username: faker.internet.userName(),
    customer_email: faker.internet.email(),
    payment_status: faker.datatype.boolean(),
    fulfillment_status: faker.datatype.boolean(),
    total_amount: faker.finance.amount(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', orders, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
