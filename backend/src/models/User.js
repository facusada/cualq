const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,    
      unique: {
        args: true,
        message: "Email must be unique.",
    },
    validate: {
      isEmail: {
        msg: "El email tiene que ser un correo valido"
      }
    }
  },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "La contraseña tiene que tener minimamente 6 caracteres"
          }
        }
      },
/*     role: {
      type: DataTypes.String,
      default: 'shopper',
      enum: [
          'shopper',
          'bussines',
          'admin'
      ]
  }, */
    name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    photoDocument: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    }
  });
};