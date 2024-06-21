
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'sc_admin',
    'sc',
    'bl@ckh@t',
    {
        host:'localhost',
        dialect:'postgres'
    }
)


module.exports = {
Sequelize : Sequelize,
sequelize : sequelize
}