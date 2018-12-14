import {Doctor} from './Doctor';
import {Transaction} from'./Transaction';
//Rest Parameter
    function showDoctors(doctorList : Doctor[]):void{
        //Arrow Function 
        doctorList.forEach(eachDoctor => {console.log(eachDoctor.toString())});
    }
    function displayDoctor(...doctors:Doctor[]):void{
        //Arrow Function 
        doctors.forEach(eachDoctor => {console.log(eachDoctor.toString())});
    }
    
    function showTransaction(txn:Transaction):void{
        console.log(txn.id);
        console.log(txn.value);
        console.log(txn.description);
        console.log(txn.txnDate);
        }
    const ram= new Doctor(101,'Ram','ENT');
    const shyam= new Doctor(101,'Shyam','EYE');

    const docList=[ram,shyam];

    showDoctors(docList);
    displayDoctor(ram);

    const txn:Transaction={id:102,value:50000,description:'Sugar',txnDate:new Date()};
    showTransaction(txn);

    