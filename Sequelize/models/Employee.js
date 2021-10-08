// models/Employee.js
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Employees',
      underscored: true,
    });
  
    Employee.associate = (models) => {
      Employee.hasOne(models.Address,
        { foreignKey: 'employee_id', as: 'addresses' });
    };
  
    return Employee;
  };
//   A função Employee.associate = (models) => {} , que criamos é onde iremos declarar as 
//   associações daquele model . No nosso caso, estamos dizendo que a tabela Employees 
//   possui um Address, referenciado pela foreign key employee_id , e que o model Employee 
//   deve chamar de addresses (note a letra minúscula), como definido na propriedade as .
// Executing (default): SELECT `Employee`.`id`, 
// `Employee`.`first_name` AS `firstName`,
//  `Employee`.`last_name` AS `lastName`, 
//  `Employee`.`age`, 
//  `addresses`.`id` AS `addresses.id`, 
//  `addresses`.`city` AS `addresses.city`, 
//  `addresses`.`street` AS `addresses.street`, 
//  `addresses`.`number` AS `addresses.number`, 
//  `addresses`.`employee_id` AS `addresses.employeeId`, 
//  `addresses`.`employee_id` AS `addresses.employee_id` 
//  FROM `Employees` AS `Employee` 
//  LEFT OUTER JOIN `Addresses` AS `addresses` 
//  ON `Employee`.`id` = `addresses`.`employee_id`;
// Table 'associations.Addresses' doesn't exist

