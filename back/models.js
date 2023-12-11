const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');

const Post = sequelize.define('Post', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
}, { tableName: 'posts' });



module.exports = {
 Post
};