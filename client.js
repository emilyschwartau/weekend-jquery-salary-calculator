//console.log("js working");

//add global variable to handle table information
let employeeList = [];

$(document).ready(readyNow);

//main function for other functions & click events to go in to
function readyNow(){
    //add main functions to run here
  
//console.log("jquery working");

//submit button click event
$(`#submitButton`).on(`click`, runSubmitClick );
//delete button click event
$(`#table`).on(`click`, `#delete`, runDeleteClick);

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

//also run these other functions when submit is clicked
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
            <td>${formatCurrency(inputObject.annualSalary)}</td>
            <td><button id="delete">Delete</button></td>
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
   $(`#totalMonthly`).append(`<h2>Total Monthly:<span id = "usd">${formatCurrency(totalMonthly)}</span></h2>`);

   //turn background red if over 20k total
   if (totalMonthly > 20000) {
      $(`#usd`).css("background-color", "red");
      
   }//end if 

   return formatCurrency(totalMonthly);
}//end monthlyCosts

//function to delete row if delete button is clicked
function runDeleteClick() {
    console.log("delete click");
    $(this).parent().parent().remove();
}//end runDeleteClick

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    }).format(number);
  }