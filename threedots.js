const ages = [10, 12, 14, 12, 15, 16];
const ages2 = [15, 16, 12, 35, 41, 14];
const ages3 = [25, 63, 16, 23, 41, 44];
const allAges = ages.concat(ages2).concat([5, 5, 5, 5]).concat(ages3);
console.log(allAges);
// spread operator
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 450;
const socheb = 250;
const tkPoisa = [650,210,120,521,256,5566,886];
const maximum1 = Math.max(...tkPoisa);
const maximum = Math.max(business, minister, socheb);
console.log(maximum);
console.log(maximum1);
