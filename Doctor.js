"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Doctor {
    //Constructor of the Class Doctor 
    constructor(id, name, specialization) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
    }
    toString() {
        return `${this.id},${this.name},${this.specialization}`;
        //return (this.id) + (this.name)+ (this.specialization);
    }
}
exports.Doctor = Doctor;
