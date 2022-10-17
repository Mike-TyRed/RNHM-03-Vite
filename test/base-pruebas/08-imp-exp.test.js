import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeByID debe retornar un heroe por ID ', () => {
    
        const id = 1;
        const heroes = getHeroeById(id);
        console.log(heroes)
        expect(heroes).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })
    //
    test('getHeroeByID debe retornar undefined si no existe ', () => {
    
        const id = 100;
        const heroes = getHeroeById(id);
        
        //Espera un undefined
        expect(heroes).toBe(undefined);
        //Espera un null
        expect(heroes).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC ', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes)
        expect(heroes).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'},
        ]);
    })
    //
    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel ', () => {
            
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes)
        expect(heroes.length).toBe(2);
    })
})
