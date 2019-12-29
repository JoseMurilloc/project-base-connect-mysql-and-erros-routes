import Sequelize, { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
        name: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
        weight: DataTypes.FLOAT,
        height: DataTypes.FLOAT,
        sexo: DataTypes.STRING
      }, {
        sequelize
      }
    );
  }

  // checkPassword(password) {
  //   return bcrypt.compare(password, this.password_hash);
  // }

}

export default User;