//File where are all the question to display to user

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
    message: 'Please select the department that role belongs to:',
    choices: departmentsArr,
  },
  ];
  return Questions;
} 

//questions to add a new role
const addEmployeeQuestions = (roles,managers)=>{
    let rolesArr=[]; 
    roles.forEach(role =>{
      let aux = role.id +'.'+ role.title;
      rolesArr.push(aux);
    })
    let managersArr=[]; 
    managers.forEach(manager =>{
      let aux = manager.id +'.'+ manager.first_name +' '+ manager.last_name;
      managersArr.push(aux);
    })
    managersArr.push('NULL. No manager to add')
    console.log(`rolesArr:`,rolesArr);
    console.log(managersArr)
    let Questions = [
    {
      type: 'input',
      name: 'firstName',
      message: "Please enter Employee's first name: (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter Employee's first name`);
          return false;
        }
      },
    },
    {
        type: 'input',
        name: 'lastName',
        message: "Please enter Employee's last name: (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter Employee's last name`);
            return false;
          }
        },
    },
    {
        type: 'list',
        name: 'role',
        message: `Please select the employee's role: `,
        choices: rolesArr,
    },
    {
        type: 'list',
         name: 'manager',
         message: `Please select the manager: `,
         choices: managersArr,
    },
    ];
    return Questions;
} 

module.exports = {MenuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions}