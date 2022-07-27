'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {

    static associate(models) {

    }
  }
  food.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    calories: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    carbohidrates: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fat: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};