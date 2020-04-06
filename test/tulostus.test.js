let mod; // = require('../demo/arrays');

const testattava = 'tulostus';

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

    test('tulostaTahtia', () => {
        expect(typeof mod.tulostaTahtia).toBe('function');
        tarkistaES6(mod.tulostaTahtia);
        console.log = jest.fn();
        mod.tulostaTahtia(5);
        mod.tulostaTahtia(100);
        expect(console.log.mock.calls[0][0].trim()).toBe('* * * * *');
        expect(console.log.mock.calls[1][0].trim()).toBe('* '.repeat(100).trim());
        console.log.mockRestore();
    });

    test('tulostaTulos', () => {
        expect(typeof mod.tulostaTulos).toBe('function');
        tarkistaES6(mod.tulostaTulos);
        console.log = jest.fn();
        mod.tulostaTulos("Testi");
        expect(console.log.mock.calls[0][0]).toEqual('-----');
        expect(console.log.mock.calls[1][0]).toEqual('Testi');
        expect(console.log.mock.calls[2][0]).toEqual('-----');
        console.log.mockRestore();
    });

    afterAll(() => {
    });
});
