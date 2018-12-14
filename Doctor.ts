export class Doctor {
    //Properties of the Class Doctor - Public
    public id:number;
    public name:string;
    public specialization:string;
    
    //Constructor of the Class Doctor 
    constructor(id:number,name:string,specialization:string)
    {
    this.id=id;
    this.name=name;
    this.specialization=specialization;
    }

    toString():string {
        return `${this.id},${this.name},${this.specialization}`;
        //return (this.id) + (this.name)+ (this.specialization);
    }
}