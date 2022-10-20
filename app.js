
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
const colors = require('colors');

//const base = 3;
console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow) )
    .catch( err => console.log(err) );


