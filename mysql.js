const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with MySQL connection details
const sequelize = new Sequelize('mysql://root:Apjq@18@localhost:3306/mydb');

// Define a model for the users table
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('MySQL connected and user model synchronized');
  })
  .catch((error) => {
    console.error('MySQL connection failed:', error);
  });

module.exports = User;
