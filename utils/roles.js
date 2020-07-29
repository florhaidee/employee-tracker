const cTable = require('console.table');
const con = require('../db/database');

//Display Menu
const displayMeny = () => {
    con.end()
};
//add a new department
const addRole = (role) => {
    let getid = role.menuChoice.split(".");
    let depId = parseInt(getid);
   return con.promise().query(
        `INSERT INTO roles SET ?`,
        {
            title: role.title,
            salary: role.salary,
            department_id: depId
        },
        )
        .then(([rows, fields]) => {
            console.log('new role added')
            console.log(role.title)
        })
        .catch(error =>{
            if (error){
                console.log('error adding a new role:',error)
            }
        })
};

//Get All Roles
const getAllRoles = () => {
    return con.promise().query(
        `SELECT roles.id, title AS Job_Title, salary, name AS Department_Name 
        FROM roles
            INNER JOIN departments ON roles.department_id = departments.id;`)
        .then(([rows, fields]) => {
            console.log('\n \n Roles......')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log('error connecting with database to get all roles: ',error)
            }
        })
};


module.exports = { getAllRoles, addRole };