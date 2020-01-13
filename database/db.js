'use strict';
const Sequelize = require('sequelize'), appEnv =
require("cfenv").getAppEnv();
let dbUrl = appEnv.getServiceURL('demoDB', {
 pathname: "dbname",
 auth: ["username", "password"]
});

if (!dbUrl) {
 dbUrl =
'postgres://postgres:1234@localhost:5432/demoDB';
}
const sequelize = new Sequelize(dbUrl);

sequelize.authenticate()
 .then(() => console.log('Connection has been established successfully.'))
 .catch(err => console.error('Unable to connect to the database:', err));
const product = sequelize.define('product', {
 id: { type: Sequelize.STRING, primaryKey: true
},
 name: Sequelize.STRING,
 description : Sequelize.STRING,
 price: Sequelize.JSON,
 availability: Sequelize.JSON
});
product.sync();
exports.product = product;