const address = {
    street: 'wer',
    city: 'kkkk',
    country: 'DE' 
};

// old way of access variables
/*
const street = address.street;
const city = address.city;
const country = address.country;
*/

const {  city, country } = address;

// assigning street to new variable st
const { street: st } = address

console.log(st, city, country);

