"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id:111,
          username: "soyUsuario",
          name: "John",
          surname: "Doe",
          email: "john@mail.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "1234567",
          phone: "12345678",
          birthdate: "12/12/12",
          password:
            "f9e3eda0b9d1f03951d3b70e16617b85454b0a108a12208bb858373105cd4b8a",
          salt: "sal",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:112,
          username: "soyAdmin",
          name: "Jane",
          surname: "Doe",
          email: "jane@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6541230",
          phone: "87456321",
          birthdate: "11/11/11",
          password: "super123inseguro",
          salt: "salGruesa",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:113,
          username: "MichaelDoe",
          name: "Michael",
          surname: "Doe",
          email: "michael@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6511230",
          phone: "874556321",
          birthdate: "11/11/11",
          password: "super123inseguro",
          salt: "asd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:114,
          username: "mobaRecharges",
          name: "recharges",
          surname: "moba",
          email: "recharges@moba.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "65112730",
          phone: "874556321",
          birthdate: "11/11/11",
          password:
            "3f62b6835e6e3a523dea5a927fface93f04952fdfe6e25bc9fa4d85a7454ddbd",
          salt:
            "3f62b6835e6e3a523dea5a927fface93f04952fdfe6e25bc9fa4d85a7454ddbd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:115,
          username: "JuanDoe",
          name: "Juan",
          surname: "Doe",
          email: "juan@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6511231",
          phone: "874556322",
          birthdate: "11/11/11",
          password: "asd123asd",
          salt: "asd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:116,
          username: "CamilaDoe",
          name: "Camila",
          surname: "Doe",
          email: "camila@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6511232",
          phone: "874556323",
          birthdate: "11/11/11",
          password: "asd123asd",
          salt: "asd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:117,
          username: "MarielaDoe",
          name: "Mariela",
          surname: "Doe",
          email: "mariela@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6511233",
          phone: "874556324",
          birthdate: "11/11/11",
          password: "asd123asd",
          salt: "asd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:118,
          username: "LucasDoe",
          name: "Lucas",
          surname: "Doe",
          email: "elbarba@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6511234",
          phone: "874556325",
          birthdate: "11/11/11",
          password: "asd123asd",
          salt: "asd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:119,
          username: "MartinDoe",
          name: "Martin",
          surname: "Doe",
          email: "martin@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6511235",
          phone: "874556326",
          birthdate: "11/11/11",
          password: "asd123asd",
          salt: "asd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:120,
          username: "LeticiaDoe",
          name: "Leticia",
          surname: "Doe",
          email: "leticia@mails.com",
          address: "calle",
          city: "ciudad",
          state: "estado",
          dni: "6511236",
          phone: "874556327",
          birthdate: "11/11/11",
          password: "asd123asd",
          salt: "asd",
          rol: "admin",
          recoveryToken: "asdfg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:121,
          username: "seedtest",
          name: "John",
          surname: "Wick",
          email: "test@moba.com",
          address: "Av. Corrientes 444",
          city: "Buenos Aires",
          state: "Buenos Aires",
          dni: "33777111",
          phone: "54777663",
          birthdate: "1998-03-12",
          password: "21a78e1d2a4772603d65c3942e6bbf798f69b90b822c298384326621e3b8a4b1",
          salt: "9qdBcd7Oe4wAuJy732tmVA==",
          rol: "admin",
          recoveryToken: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
