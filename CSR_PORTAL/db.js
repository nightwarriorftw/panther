const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize ({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
})

const User = db.define('user' ,{

    name: {
        type: DT.STRING(100),
        allowNull: false
    },
    number: {
        type: DT.STRING,
        allowNull: false
    },
    email: {
        type: DT.STRING(100),
        allowNull: false
    }, 
    address: {
        type: DT.STRING(100),
        allowNull: false
    }, 
    pincode: {
        type: DT.STRING(100),
        allowNull: false
    }, 
    username: {
        type: DT.STRING(50),
        allowNull: false,
        unique: true
    },  
    password: {
        type: DT.STRING, 
        allowNull: false
    }
})

module.exports = {
    db, User
}
