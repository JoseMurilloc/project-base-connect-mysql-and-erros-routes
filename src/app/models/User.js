import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
  
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

}

export default User;