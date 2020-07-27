const cTable = require('console.table');
const con = require('../db/database');

//Display Menu
const displayMeny = () => {
    con.end()
};
//add a new department
const addDepartment = name => {
    con.promise().query(
        `INSERT INTO departments SET ?`,
        {
            name: name
        },
        )
        .then(([rows, fields]) => {
            console.log('enter here')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log(error)
            }
        })
        .then( ()=> getAllDepartments());
};

//Get All Departments
const getAllDepartments = () => {
    con.promise().query("SELECT * FROM departments")
        .then(([rows, fields]) => {
            console.log('Departments......')
            console.table(rows);
        })
        .catch(error =>{
            if (error){
                console.log('error connecting with database')
            }
        })
        .then( () => displayMeny());
};


module.exports = { getAllDepartments, addDepartment };
