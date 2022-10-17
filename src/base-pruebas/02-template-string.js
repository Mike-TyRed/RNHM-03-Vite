export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
const nombre = 'Elden Ring';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );