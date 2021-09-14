'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: function() {
        return uuidv4()
      },
      primaryKey: true
    },
    inv_number: {
      type: DataTypes.STRING
    },
    transaction_date: {
      type: DataTypes.DATEONLY
    },
    customer_name: {
      type: DataTypes.STRING
    },
    customer_username: {
      type: DataTypes.STRING
    },
    customer_email: {
      type: DataTypes.STRING
    },
    payment_status: {
      type: DataTypes.BOOLEAN
    },
    fulfillment_status: {
      type: DataTypes.BOOLEAN
    },
    total_amount: {
      type: DataTypes.DECIMAL
    }
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};