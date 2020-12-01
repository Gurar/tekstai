// // - kiek yra paragrafu
// // - kiek yra sakiniu
// // - kiek yra zodziu
// // - kiek yra tekstiniu simboliu (isskaitant tarpus)
// // - kiek yra raidziu
// // - kiek yra skaiciu
// // - kiek yra tikriniu zodziu (ivardziai (vardas, pavarde) ir vietovardziai)

// function teskstoTikrinimas(tekstas) {
//     //input validation
//     if(typeof tekstas !== 'string') {
//         console.error('ERROR: Netinkama duota reiksme');
//         return false;
//     }

//     if(tekstas.length === 0) {
//         console.error('ERROR: duotas tuscias tekstas');
//         return false;
//     }

//     //logic
//     const regex = {
//         paragraf: /\n\n[A-Za-z]/gi,
//         sakinis: /[.?](?![.,])/gi,
//         zodziai: /[\s]/gi,
//         symboliai: /[,.?!\s]/gi,
//         raides: /[A-Za-z]/gi,
//         skaiciai: /[0-9]/gi
//     }
//     const arr = tekstas.match(regex.paragraf);
//     let kiekParagrafu = 0;
//     if(arr === null) {
//         kiekParagrafu = 1  
//     }else {
//         kiekParagrafu = 1 + arr.length;
//     }

//     const sakinis = tekstas.match(regex.sakinis);
//     const zodziai = tekstas.match(regex.zodziai);
//     const textiniaiSymbol = tekstas.match(regex.symboliai);
//     const raides = tekstas.match(regex.raides);
//     const skaiciai = tekstas.match(regex.skaiciai);

//     const result = {
//         sakinis: sakinis.length,
//         zodziai: zodziai.length,
//         textiniaiSymbol: textiniaiSymbol.length,
//         raides: raides.length,
//     }
        
//     //post logic validation
    

//     //result
//     return `kiek yra paragrafu ${kiekParagrafu}
//     kiek yra sakiniu ${result.sakinis}
//     kiek yra zodziu ${result.zodziai}
//     kiek yra tekstinius symboliu ${result.textiniaiSymbol}
//     kiek yra raidziu ${result.raides}
//     `;
// }

// export {teskstoTikrinimas};