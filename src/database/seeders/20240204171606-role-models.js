'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   'RoleModels',
    //   [
    //     {
    //       name: 'admin',
    //       description: 'Admin',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: 'user',
    //       description: 'User',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: 'coach',
    //       description: 'Coach',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: 'moderator',
    //       description: 'Moderator',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    // if (foreignKeys) {
    //   const constraintName = Object.keys(foreignKeys)[0];
    //
    //   // Remove foreign key constraint
    //   await queryInterface.removeConstraint('UserGoalsModels', constraintName);
    // }
    //
    // await queryInterface.bulkDelete('RoleModels', null, {});
  },
};
