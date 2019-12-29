'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn('users', 'weight', {
      type: Sequelize.FLOAT,
      allowNull: false,
     });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('users', 'weight');
  }
};
