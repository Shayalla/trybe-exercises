module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false, // nulo?
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        references: {
          model: 'Employees',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};
//  npx sequelize migration:generate --name create-addresses
// references.model : Indica qual tabela nossa FK está referenciando.
// references.key : Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key .
// onUpdate e onDelete : Configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os produtos daquele usuário serão alterados ou excluídos.
// depois de tudo, para criar:  npx sequelize db:migrate