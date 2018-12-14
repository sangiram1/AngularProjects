"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Doctor_1 = require("./Doctor");
//Rest Parameter
function showDoctors(doctorList) {
    //Arrow Function 
    doctorList.forEach(eachDoctor => { console.log(eachDoctor.toString()); });
}
function displayDoctor(...doctors) {
    //Arrow Function 
    doctors.forEach(eachDoctor => { console.log(eachDoctor.toString()); });
}
function showTransaction(txn) {
    console.log(txn.id);
    console.log(txn.value);
    console.log(txn.description);
    console.log(txn.txnDate);
}
const ram = new Doctor_1.Doctor(101, 'Ram', 'ENT');
const shyam = new Doctor_1.Doctor(101, 'Shyam', 'EYE');
const docList = [ram, shyam];
showDoctors(docList);
displayDoctor(ram);
const txn = { id: 102, value: 50000, description: 'Sugar', txnDate: new Date() };
showTransaction(txn);
