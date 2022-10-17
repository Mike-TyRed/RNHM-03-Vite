import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe ('05-funciones.test', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        //Compara el objeto user con el objeto testUser
        expect( testUser ).toEqual( user );
    })

    // Tarea
    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Miguel';
        
        const user = getUsuarioActivo( nombre );

        expect( user ).toStrictEqual( {
            uid: 'ABC567',
            username: nombre
        });
    })
})
