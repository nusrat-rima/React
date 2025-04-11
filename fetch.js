// const person ={
//   name :"Nusrat Jahan",
//   age:22,
//   friends:"Rabeya khatun",
//   family:{
//     husband: "M A",
//     motherName:"Mst Shahanaj"
//   }
// }

// const jsonData = JSON.stringify(person);
// //console.log(jsonData);
// const planData = JSON.parse(jsonData);
//console.log(planData);

//fetch

/**fetch("url")
.then(res=>res.json())
.then(data=>console.log(""))
*/

const person = {
  name: 'hero alom',
  age: 40,
  friends: ['bd', 'cd'],
  family: {
    wife: 'M A',
    motherName: 'Mst Shahanaj',
  },
};

// const keys = Object.keys(person);
// const values = Object.values(person);
// console.log(keys);


const products = [
  { name: 'redmi', brand: 'xiaomi', price: 30000, color: 'black' },
  { name: 'OPPO', brand: 'OPPO', price: 32000, color: 'white' },
  { name: 'Apple', brand: 'Apple', price: 300000, color: 'golden' },
  { name: 'vivo', brand: 'vivo', price: 60000, color: 'blue' },
];


const newData ={
  name:"walton",
  brand:"walton",
  price:35000,
  color:"grey"
}

const newArray =[...products,newData];
const remainingProducts=products.filter(p=>p.brand!=="xiaomi")
console.log(remainingProducts)

const newArray2 =[...remainingProducts,newData]
console.log(newArray2);