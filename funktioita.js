const tulostus = require("./tulostus");
const tulosta = tulostus.tulostaTahtia;


const tulostaNelio = (sivu, tulosta) => {
    for (let i = 0; i < sivu; i++) {
        tulosta(sivu);
    }
}

const tulostaSuorakulmio = (leveys, korkeus, tulosta) => {
    for (let i = 0; i < korkeus; i++) {
        tulosta(leveys);
    }
}

const tulostaKolmio = (korkeus, tulosta) => {
    for (let i = 1; i <= korkeus; i++) {
        tulosta(i);
    }
}

const lukusarjanSumma = n => {
    let vastaus = 0;
    for (let i = 1; i <= n; i++) {
        vastaus += i;
    }
    return vastaus;
}

const kertoma = n => {
    if (n < 2) {
        return 1;
    } else {
        return n * kertoma(n-1);
    }
}

module.exports = {
    tulostaNelio, 
    tulostaSuorakulmio,
    tulostaKolmio,
    lukusarjanSumma,
    kertoma
}