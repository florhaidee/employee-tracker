const cTable = require('console.table');
const con = require('../db/database');

//add a new Employee
const addEmployee = (employee) => {
    console.log(employee)
    let getId = employee.role.split(".");
    let roleId = parseInt(getId);
    let getMId = employee.manager.split(".");
    let managerId ='';
    let data = {}
    if(getMId[0] !== 'NULL'){
        console.log(getMId,`not NULL`)
        managerId = parseInt(getMId);
        data = {
            first_name: employee.firstName,
            last_name: employee.lastName,
            manager_id: managerId,
            role_id: roleId
        }
    } else if(getMId[0] === 'NULL'){
        console.log(getMId,`IS NULL`)
        data = {
            first_name: employee.firstName,
            last_name: employee.lastName,
            role_id: roleId
        }
    }
    
    return con.promise().query(
        `INSERT INTO employees SET ?`,
        data,
        )
        .then(([rows, fields]) => {
            console.log('new employee added')
            console.log(data);
        })
        .catch(error =>{
            if (error){
                console.log('error adding new employee: ', error)
            }
        })
};

//Update Employees Role
const updateRole = (employeeId, roleId)=>{
    con.promise().query(
        `UPDATE employees SET ? WHERE employees.id = ?`,
        [{role_id: roleId }, employeeId]
        )
        .then(([rows, fields]) => {
            console.log('employee updated')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log(`error adding updating employee's role: `, error)
            }
        })
        .then( ()=> displayMeny());    
};

//Display All Employees
const displayAllEmployees = () => {
    return con.promise().query(
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
                console.log('error viewing all employees: ', error)
            }
        })
};

//Get All Employees to be use to create a new employee
const getAllEmployees = () => {
    return con.promise().query(
        `SELECT id , first_name, last_name
         FROM employees`)
};

module.exports = { addEmployee, updateRole, displayAllEmployees, getAllEmployees };