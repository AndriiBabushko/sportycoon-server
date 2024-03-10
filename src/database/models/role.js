'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoleModels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoleModels.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'RoleModels',
    },
  );
  return RoleModels;
};
