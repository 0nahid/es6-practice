const person = {
    name: 'Nahid',
    age: 17,
    job: 'Coding',
    gf: 'nai, jonmo thika single',
    address: 'Tangail',
    phone: '01628719587',
    friends: [
        'Robin',
        'Alamin',
        'Saown',
        'Hassan'
    ]
};
// const gfName = person.gf;
// const phone = person.phone;

const {
    phone,
    gf,
    address
} = person;

const complexObject = {
    name: 'Nahid Hassan Bulbul',
    info: {
        address = 'Dhaka',
        leader = 'Tiger'
    }
}
const {
    leader
} = complexObject.info;

console.log(gf);
console.log(phone);
console.log(address);