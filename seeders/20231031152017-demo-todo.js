'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [{
      title: "Ngegame",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Mager",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Jalan",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Ngampus",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {})
  }
};