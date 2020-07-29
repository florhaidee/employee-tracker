const cTable = require('console.table');
require('dotenv').config();
const inquirer = require('inquirer');
const db = require('./db/database');
const {displayAllDepartments, addDepartment, getAllDepartments, returnDepartment} = require('./utils/departments');
const {getAllRoles, addRole} = require('./utils/roles');
const {getAllEmployees, addEmployee, updateRole} = require('./utils/employees');
const displayMenu = require('./utils/displayMenu');
const { NULL } = require('mysql2/lib/constants/types');


//addDepartment('testing');
// getAllRoles();
//addRole('Intern', 80000, 2);
//getAllEmployees();
//addEmployee('Sara','Doe', 4);
//updateRole(7,5)

displayMenu()  
.then(()=> {
    console.log('\n');
    //displayMenu()
})
.catch(err => {
    console.log(err);
});