const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize ({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
})

const User = db.define('user' ,{

    username: {
        type: DT.STRING(50),
        allowNull: false,
        unique: true
    }, 
    email: {
        type: DT.STRING(100),
        allowNull: false
    }, 
    password: {
        type: DT.STRING, 
        allowNull: false
    }
})

module.exports = {
    db, User
}

