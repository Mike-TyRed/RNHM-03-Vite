import { exact } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

// Desestructuración de arreglos
describe('Pruebas en 07-deses-arr', () => {
  test('Debe de retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo(); // ['ABC', 123]

    //El valor esperado es un string
    expect(letras).toBe('ABC');
    //El valor esperado es un numero
    expect(numeros).toBe(123);

    //Se espera que el tipo de dato sea un string
    expect(typeof letras).toBe('string');
    //Se espera que el tipo de dato sea un numero
    expect(typeof numeros).toBe('number');

    //Se espera que el arreglo sea cualquier tipo de string
    expect(letras).toEqual(expect.any(String));
  })
})
