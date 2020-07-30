const cTable = require('console.table');
require('dotenv').config();
const inquirer = require('inquirer');
const db = require('./db/database');
const displayMenu = require('./utils/displayMenu');
const {addEmployee, updateRole, getAllEmployees, addingEmployee} = require('./utils/employees');

//addDepartment('testing');
// getAllRoles();
//addRole('Intern', 80000, 2);
// getAllEmployees()
// .then(()=> {
//     console.log('\n');
//     //displayMenu()
// })
// .catch(err => {
//     console.log(err);
// });
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
