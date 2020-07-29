const inquirer = require('inquirer');
const {displayAllDepartments, addDepartment, getAllDepartments} = require('../utils/departments');
const {getAllRoles, addRole} = require('../utils/roles');
const con = require('../db/database');

//menu questions
const MenuQuestions =  {
    type: 'list',
    name: 'menuChoice',
    message: 'What would you like to do?',
    choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
    ],
};

//questions to add a new adepartment
const addDepartmentQuestions =  {
  type: 'input',
  name: 'name',
  message: "Please enter Department's name: (Required)",
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log(`Please enter a Department's name`);
      return false;
    }
  },
};

//questions to add a new role
const addRoleQuestions = (departments)=>{
  let departmentsArr=[]; 
  departments.forEach(department =>{
    let aux = department.id +'.'+ department.name;
    departmentsArr.push(aux);
  })
  let Questions = [
  {
    type: 'input',
    name: 'title',
    message: "Please enter Role's title: (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log(`Please enter a role's title`);
        return false;
      }
    },
  },
  {
    type: 'number',
    name: 'salary',
    message: "Please enter Role's salary: (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log(`Please enter a role's salary`);
        return false;
      }
    }
  },
  {
   type: 'list',
    name: 'menuChoice',
    message: '{What would you like to do?',
    choices: departmentsArr,
  },
  ];

  return Questions;

} 

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
    }else if (answers.menuChoice === 'View all roles') {
      console.log('\n');
      getAllRoles()
      .then(() => {
        console.log('\n')
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

module.exports = displayMenu;