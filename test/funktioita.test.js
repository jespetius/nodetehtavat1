const testattava = 'funktioita';

let mod;
try {
    mod = require('../demo/' + testattava);
    testattava = '../demo/' + testattava;
} catch (e) {
    mod = require('../' + testattava);
}

const tarkistaES6 = (nimi) => {
    expect(nimi.toString().includes('function')).not.toBe(true);
    expect(nimi.toString().includes('var')).not.toBe(true);
}

describe(`Testataan moduulia ${testattava}`, () => {

    beforeAll(() => {
    });

    test('ES6', () => {
        [mod.tulostaNelio, mod.tulostaSuorakulmio, mod.tulostaKolmio, mod.lukusarjanSumma, mod.kertoma].forEach(tarkistaES6);
    });

    test('tulostaNelio', () => {
        const mock = jest.fn();
        mod.tulostaNelio(19, mock);
        expect(mock).toHaveBeenCalledTimes(19);
        expect(mock).toHaveBeenCalledWith(19);
    });

    test('tulostaSuorakulmio', () => {
        const mock = jest.fn();
        mod.tulostaSuorakulmio(45, 98, mock);
        expect(mock).toHaveBeenCalledTimes(98);
        expect(mock).toHaveBeenCalledWith(45);
    });

    test('tulostaKolmio', () => {
        const mock = jest.fn();
        mod.tulostaKolmio(4, mock);
        expect(mock).toHaveBeenCalledTimes(4);
        for (let i = 1; i <= 4; i++) {
            expect(mock).toHaveBeenNthCalledWith(i, i);
        }
    })

    test('lukusarjanSumma', () => {
        expect(mod.lukusarjanSumma(100)).toBe(5050);
        expect(mod.lukusarjanSumma(0)).toBe(0);
    })

    test('kertoma', () => {
        expect(mod.kertoma(5)).toBe(120);
        expect(mod.kertoma(0)).toBe(1);
    })

    afterAll(() => {
    });
});
