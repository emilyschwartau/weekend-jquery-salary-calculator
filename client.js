//console.log("js working");

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

//add inputs to table row// need to figure out how to get the in right columns
$(`#table`).append(`<tr><td>${inputObject.firstName}<td><tr>`);
$(`#table`).append(`<tr><td>${inputObject.lastName}<td><tr>`);
$(`#table`).append(`<tr><td>${inputObject.ID}<td><tr>`);
$(`#table`).append(`<tr><td>${inputObject.title}<td><tr>`);
$(`#table`).append(`<tr><td>${inputObject.annualSalary}<td><tr>`);

}//end runSubmitClick