const { Model, DataTypes } = require('sequelize');
const dataTypes = require('sequelize/lib/data-types.js');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    tag_name:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlphanumeric:true
      }
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
