class student {
    constructor(sId, sName){
        this.id=sId;
        this.name=sName;
        this.school = 'GCPSC';
    }
}
const student1 = new student(1001,'Nahid');
const student2 = new student(1002,'Hassan');
console.log(student1, student2);