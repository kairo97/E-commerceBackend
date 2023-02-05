const { Model, DataTypes } = require('sequelize');
const dataTypes = require('sequelize/lib/data-types');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    productId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true
      }
    },
    tagId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true
      }
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
