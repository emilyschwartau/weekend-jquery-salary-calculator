//console.log("js working");

//add global variable to handle table information
let employeeList = [];

$(document).ready(readyNow);

//main function for other functions & click events to go in to
function readyNow(){
    //add main functions to run here
  
//console.log("jquery working");

//submit click event
$(`#submitButton`).on(`click`, runSubmitClick );

}//end readyNow


//make function to add inputs to DOM at click
function runSubmitClick() {
//console.log("submit click works!");

//make object to organize input data fields
const inputObject = {
firstName: $(`#firstNameIn`).val(),
lastName: $(`#lastNameIn`).val(),
ID: $(`#idIn`).val(),
title: $(`#titleIn`).val(),
annualSalary: $(`#annualSalaryIn`).val()
}//end inputObject
//console.log(inputObject);

//add to employeeList
employeeList.push(inputObject);
console.log(employeeList);

addToDom();
monthlyCosts();
console.log(monthlyCosts());

//empty inputs after clicking submit
$(`#firstNameIn`).val('');
$(`#lastNameIn`).val('');
$(`#idIn`).val('');
$(`#titleIn`).val('');
$(`#annualSalaryIn`).val('');
}//end runSubmitClick


//create function to add array to the table on the DOM
function addToDom() {
    //clear body so it doesn't exponentially add list
    $('#table').empty();

    for(let inputObject of employeeList) {
        const row = $(`
        <tr>
            <td>${inputObject.firstName}</td>
            <td>${inputObject.lastName}</td>
            <td>${inputObject.ID}</td>
            <td>${inputObject.title}</td>
            <td>${inputObject.annualSalary}</td>
            <td><button>Delete</button></td>
        </tr>
        `);
        $('#table').append(row);
    }//end for 
}//end addToDom


//create a function to calculate monthly costs and append to DOM

function monthlyCosts() {
    let totalMonthly = 0;
   for (inputObject of employeeList) {
       totalMonthly += inputObject.annualSalary*1;  
   }//end for
   
   $(`#totalMonthly`).empty();
   $(`#totalMonthly`).append(`<h2>Total Monthly: $${totalMonthly}</h2>`);
   return totalMonthly;
}//end monthlyCosts
