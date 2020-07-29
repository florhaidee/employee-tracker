const cTable = require('console.table');
const con = require('../db/database');

//add a new department
const addDepartment = name => {
    return con.promise().query(
        `INSERT INTO departments SET ?`,
        {
            name: name
        },
        )
        .then(([rows, fields])=>{
            console.log('department added')
        })
        .catch(error =>{
            if (error){
                console.log(error)
            }
        })
};

//display All Departments
const displayAllDepartments = () => {
   return con.promise().query("SELECT * FROM departments")
        .then(([rows, fields]) => {
            console.log('\n\n Departments......');
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log('error connecting with database')
            }
        })
};

//get departments to display on prompt
const getAllDepartments = () => {
   return con.promise().query("SELECT * FROM departments")
}


module.exports = { displayAllDepartments, addDepartment, getAllDepartments};
