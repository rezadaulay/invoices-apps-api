const db = require('../db/models');
const OrderModel = db.Orders;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: orders } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, orders, totalPages, currentPage };
};

// Create and Save a new Order
exports.create = (req, res) => {
    const order = {
        inv_number: req.body.inv_number,
        transaction_date: req.body.transaction_date,
        customer_name: req.body.customer_name,
        customer_username: req.body.customer_username,
        customer_email: req.body.customer_email,
        payment_status: req.body.payment_status === 'paid',
        fulfillment_status: req.body.fulfillment_status === 'fulfillment',
        total_amount: req.body.total_amount
    };
    // Save Order in the database
    OrderModel.create(order).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
        message:
            err.message || "Some error occurred while creating the Order."
        });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
    const { page, size, inv_number, payment_status, customer_username, sort, sort_direction } = req.query;

    let condition = {};
    if (inv_number) {
        condition['inv_number'] = { [Op.iLike]: `%${inv_number}%` };
    }
    if (customer_username) {
        condition['customer_username'] = { [Op.iLike]: `%${customer_username}%` };
    }
    if (payment_status) {
        condition['payment_status'] = payment_status == 1;
    }

    const { limit, offset } = getPagination(page, size);

    OrderModel.findAndCountAll({ where: Object.keys(condition).length ? condition : null, order: [ [sort ? sort : 'transaction_date', sort_direction === 'asc' ? 'ASC': 'DESC' ] ], limit, offset }).then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Order."
        });
    });
};

// Find a single Order with an id
exports.findOne = (req, res) => {
    const id = req.params.id
    OrderModel.findByPk(id).then(data => {
        if (data === null) {
            return res.status(404).json({
                message: "Error retrieving Order with id=" + id
            });
        } else {
            res.json(data);
        }
    })
    .catch(() => {
        res.status(500).json({
        message:
            err.message || "Some error occurred while creating the Order."
        });
    });
};

// Delete a Order with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id
    OrderModel.findByPk(id).then(data => {
        if (data === null) {
            return res.status(404).json({
                message: "Error retrieving Order with id=" + id
            });
        } else {
            data.destroy();
            res.json({
                message: "Deleted Order with id=" + id
            });
        }
    })
    .catch(() => {
        res.status(500).json({
        message:
            err.message || "Some error occurred while creating the Order."
        });
    });
};
