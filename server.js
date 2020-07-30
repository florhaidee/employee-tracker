const cTable = require('console.table');
require('dotenv').config();
const inquirer = require('inquirer');
const db = require('./db/database');
const displayMenu = require('./utils/displayMenu');

displayMenu()  
.then(()=> {
    console.log('\n');
})
.catch(err => {
    console.log(err);
});
