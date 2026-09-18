console.log("Hola mundo NODE")
let  edad1 = 19;
let  edad2 = 21;

console.log("edad promedio:");
console.log ((edad1+edad2)/2);

console.log("Medidor de procesos");

console.time('Miproceso');
for(let i=0 ;i< 100000000;i++){}
console.timeEnd('Miproceso');