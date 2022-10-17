import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
    test("getHeroeByIdAsync debe retornar un heroe ", () => {
        const id = 1;
        getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toEqual({
                id: 1,
                name: "Batman",
                owner: "DC",
            });
        });
    });
    test("getHeroeByIdAsync retorna error si no existe heroe ", (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            console.log(error);
            done();
        });
    });
});
