'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Location,{through: "user_location", foreignKey: "user_id"})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:  {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
    IsAdmin:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};