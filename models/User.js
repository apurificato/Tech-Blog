const sequelize = require("../db/client");
const { hash, compare } = require("bcrypt");
const { DataTypes, Model } = require("sequelize");

class User extends Model {
  async validatePass(password) {
    return await compare(password, this.password);
  }
}


User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 6,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "user with email already exists",
      },
      validate: {
        isEmail: true,
      },
      allowNull: false,
    }
  },
  {
    sequelize,
    hooks: {
      async beforeCreate(user) {
        user.password = await hash(user.password, 10);
      },
    },
    modelName: "User",
    scopes: {
      withoutPassword: {
        attributes: { exclude: ["password"] },
      },
    },
  }
);

module.exports = User;
