console.log('Inicio de program');

setTimeout(() => {
    console.log('Primer Timeou')
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeou')
}, 0);

setTimeout(() => {
    console.log('Tercer Timeou')
}, 0);

console.log('Fin de programa')