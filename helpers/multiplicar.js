const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base=5, listar=false, hasta=10 ) => {
    return new Promise( ( resolve, reject ) => {
        let salida = '';
        let salida2 = '';

        for (let i=1; i<=hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            salida2 += `${base} ${ 'x'.green } ${i} ${ '='.red} ${base*i}\n`;
        }
        if (listar) {
            console.log('================='.green);
            console.log(`   ${ 'Tabla del'.yellow } `, colors.green(base));
            console.log('================='.green);
            console.log(salida2);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt creado`);
    });
};

module.exports = {
    crearArchivo
}