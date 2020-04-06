const tulostaTahtia = maara => {
    let tahdet = "";
    for (let i = 0; i < maara; i++) {
        tahdet += " *";
    }	
    console.log(tahdet);	
}

const teeMerkkeja = (merkki, maara) => {
    let merkit = "";
    for (let i = 0; i < maara; i++) {
        merkit += `${merkki}`;
    }	
    return merkit;	
}

const tulostaTulos = tulos => {
    let teksti = String(tulos);
    let pituus = teksti.length;
    let viivat = teeMerkkeja("-", pituus);
    console.log(viivat);
    console.log(teksti);
    console.log(viivat);
}

module.exports = {
    tulostaTahtia, 
    teeMerkkeja, 
    tulostaTulos
}