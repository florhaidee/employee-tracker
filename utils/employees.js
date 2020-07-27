const cTable = require('console.table');
const con = require('../db/database');

//Display Menu
const displayMeny = () => {
    con.end()
};
//add a new Employee
const addEmployee = (firstName, lastName, roleId, managerId) => {
    con.promise().query(
        `INSERT INTO employees SET ?`,
        {
            first_name: firstName,
            last_name: lastName,
            manager_id: managerId,
            role_id: roleId
        },
        )
        .then(([rows, fields]) => {
            console.log('new employee added')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log(error)
            }
        })
        .then( ()=> displayMeny());
};

//Get All Employees
const getAllEmployees = () => {
    con.promise().query(
        `SELECT e.id, e.first_name, e.last_name, title AS Job_Title, salary, name AS Department_Name, 
            IFNULL(CONCAT(m.first_name, ', ', m.last_name),'NULL') AS 'Manager'
        FROM employees e
        LEFT JOIN employees m ON e.manager_id = m.id
        LEFT JOIN roles ON e.role_id = roles.id
        LEFT JOIN departments ON roles.department_id = departments.id
        ORDER BY e.id  ASC;`)
        .then(([rows, fields]) => {
            console.log('Employees......')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log(error)
            }
        })
        .then( () => displayMeny());
};


module.exports = { getAllEmployees, addEmployee };