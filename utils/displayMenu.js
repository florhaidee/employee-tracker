const inquirer = require('inquirer');
const {displayAllDepartments, addDepartment, getAllDepartments} = require('../utils/departments');
const {displayAllRoles, addRole, getAllRoles} = require('../utils/roles');
const { addEmployee, updateRole, displayAllEmployees, getAllEmployees, updateManager } = require('../utils/employees');
const {MenuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, UpdEmpRoleQuestions, updateMangerQuestions} = require('../utils/questions')
const con = require('../db/database');


//function to display menu
const displayMenu =() => {
  return inquirer.prompt(MenuQuestions)
  .then((answers) => {
    if (answers.menuChoice === 'Exit'){
      con.end();
      console.log('BYE!')
      return;
    }else if (answers.menuChoice === 'View all departments') {
      console.log('\n');
      displayAllDepartments()
      .then(() => {
        console.log('\n')
        displayMenu();
      })
    } else if (answers.menuChoice === 'View all roles') {
        console.log('\n');
        displayAllRoles()
        .then(() => {
          console.log('\n')
          displayMenu();
        })
    } else if (answers.menuChoice === 'View all employees') {
      console.log('\n');
      displayAllEmployees()
        .then(() => {
          console.log('\n');
          displayMenu();
        })
    }else if (answers.menuChoice === 'Add a department'){
        console.log('\n');
        promptAddDepartment();
    } else if (answers.menuChoice === 'Add a role'){
        getAllDepartments()
        .then(([rows, fields]) => {
          promptAddRole(rows)
        })
    } else if (answers.menuChoice === 'Add an employee'){
      getAllEmployees()
      .then(([managers, fields]) => {
        promptAddEmployee(managers)
      })
    } else if (answers.menuChoice === `Update an employee's role`){
      getAllEmployees()
      .then(([employees, fields]) => {
        promptUpdateEmployeeRole(employees)
      })
    } else if (answers.menuChoice === `Update an employee's manager`){
      getAllEmployees()
      .then(([employees, fields]) => {
        promptUpdateManager(employees)
      })
    }
  })
};

//function to add a new department
const promptAddDepartment = () =>{
  inquirer.prompt(addDepartmentQuestions)
  .then((answer)=>{
    console.log(answer.name);
    addDepartment(answer.name)
    .then(() => {
      console.log('\n')
      displayMenu();
    })
  })
  .catch(err => {
    console.log('error addind department:', err);
  })
}

//function to add a new role
const promptAddRole = (departments) =>{
  let questions= addRoleQuestions(departments);
  inquirer.prompt(questions)
  .then((answer)=>{
    addRole(answer)
    .then(() => {
      console.log('\n')
      displayMenu();
    })
  })
  .catch(err => {
    console.log('error adding role:', err);
  })
}

//function to add a new employee
const promptAddEmployee = (managers) =>{
  getAllRoles()
  .then(([roles, fields]) => {
    let questions= addEmployeeQuestions(roles,managers);
    inquirer.prompt(questions)
    .then((answer)=>{
      addEmployee(answer)
      .then(() => {
        console.log('\n')
        displayMenu();
      })
    })
    .catch(err => {
      console.log('error adding employee:', err);
    })
  })
}

//function to update employee's role
const promptUpdateEmployeeRole = (employees) =>{
  getAllRoles()
  .then(([roles, fields]) => {
    let questions= UpdEmpRoleQuestions(roles,employees);
    inquirer.prompt(questions)
    .then((answer)=>{
      updateRole(answer)
      .then(() => {
        console.log('\n')
        displayMenu();
      })
    })
    .catch(err => {
      console.log('error adding employee:', err);
    })
  })
}

//function to update employee's manager
const promptUpdateManager = (employees) =>{
  let questions= updateMangerQuestions(employees);
  inquirer.prompt(questions)
  .then((answer)=>{
    updateManager(answer)
    .then(() => {
      console.log('\n')
      displayMenu();
    })
  })
  .catch(err => {
    console.log('error updating manager:', err);
  })  
}
module.exports = displayMenu;