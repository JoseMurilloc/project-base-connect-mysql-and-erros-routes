'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('users', 'height', {
        type: Sequelize.FLOAT,
        allowNull: false,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users');
  }
};
