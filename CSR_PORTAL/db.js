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

// const Event = db.define('event', {
//     name: {

//     },
//     venue: {

//     },
//     description: {

//     },
// })

module.exports = {
    db, User
}

