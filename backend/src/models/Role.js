const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Role = sequelize.define('role', {
    role: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });
};