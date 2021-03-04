const Sequelize = require('sequilize')
const env = require('../env')

const sequelize = new Sequelize('node-complete', 'root', env.DB_PASSWORD, {
 dialect: 'mysql',
 host: 'localhost'
})

module.exports = sequelize;