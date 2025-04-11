const products = [
  { name: 'redmi', brand: 'xiaomi', price: 30000, color: 'black' },
  { name: 'OPPO', brand: 'OPPO', price: 32000, color: 'white' },
  { name: 'Apple', brand: 'Apple', price: 300000, color: 'golden' },
  { name: 'vivo', brand: 'vivo', price: 60000, color: 'blue' },
];

//const result = products.map(product => product.price);
//console.log(result);

products.forEach((product) => {
  //
});

//const result = products.filter(products.price >= 5000);
///console.log(result);

const result2 = products.find((product) => product.name === 'vivo');
console.log(result2);
