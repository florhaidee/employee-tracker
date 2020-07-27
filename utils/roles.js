const cTable = require('console.table');
const con = require('../db/database');

//Display Menu
const displayMeny = () => {
    con.end()
};
//add a new department
const addRole = role => {
    con.promise().query(
        `INSERT INTO roles SET ?`,
        {
            name: role.name,
            salary: role.salary,
            department_id: role.department_id
        },
        )
        .then(([rows, fields]) => {
            console.log('new role added')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log(error)
            }
        })
        .then( ()=> displayMeny());
};

//Get All Roles
const getAllRoles = () => {
    con.promise().query(
        `SELECT roles.id, title AS Job_Title, salary, name AS Department_Name 
        FROM roles
            INNER JOIN departments ON roles.department_id = departments.id;`)
        .then(([rows, fields]) => {
            console.log('Roles......')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log(error)
            }
        })
        .then( () => displayMeny());
};


module.exports = { getAllRoles, addRole };