const { readlink } = require('fs');
const { resolve } = require('path');
const { Readline } = require('readline/promises');
const { promiseHooks } = require('v8');

require('colors');

const MostrarMenu = () =>{
    return new Promise(resolve => {

    console.clear();
    console.log('==========================='.green);
    console.log('  Selecciona una opcion'.green);
    console.log('===========================\n'.green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tarea`);
    console.log(`${'3.'.green} Listar Tarea Completada`);
    console.log(`${'4.'.green} Listar Tarea Pendiente`);
    console.log(`${'5.'.green} Completar Tareas(s)`);
    console.log(`${'6.'.green} Borrar Tarea`);
    console.log(`${'0.'.green} Salir\n`);

    const Readline = require('readline').createInterface({
        input: process.stdin,
        output:process.stdout
    });

    Readline.question('Seleccionar una opcion : ',(option) =>{
        Readline.close();
        resolve(option)
    });
    })

}
const pausa = () =>{
    return new Promise(resolve =>{
    const Readline = require('readline').createInterface({
        input: process.stdin,
        output:process.stdout
    });

    Readline.question(`\n Presione ${'Enter'.red} para continuar`,(option) =>{
        Readline.close();
        resolve();
    }); 
    })    
    
}


module.exports = {
    MostrarMenu,
    pausa
}