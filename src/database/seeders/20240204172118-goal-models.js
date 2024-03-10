// 'use strict';
//
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert(
//       'GoalModels',
//       [
//         {
//           name: 'Blabla',
//           description: 'Blabla',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//       ],
//       {},
//     );
//   },
//
//   async down(queryInterface, Sequelize) {
//     await queryInterface.removeConstraint('UserGoalsModels', 'userID');
//     await queryInterface.bulkDelete('GoalModels', null, {});
//   },
// };
