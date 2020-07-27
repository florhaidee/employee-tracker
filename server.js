const cTable = require('console.table');
require('dotenv').config();
const inquirer = require('inquirer');
const db = require('./db/database')
const {getAlldepartments, addDepartment} = require('./utils/departments')
const {getAllRoles, addRole} = require('./utils/roles')
const {getAllEmployees, addEmployee} = require('./utils/employees')

//addDepartment('testing');
// getAllRoles();
//addRole('Intern', 80000, 2);
getAllEmployees();