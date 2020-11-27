function teskstoTikrinimas(tekstas) {
    //input validation


    //logic
    const re = /\n\n[A-Za-z]/gi;
    const arr = tekstas.match(re);
    const kiekParagrafu = arr.length;
   
    //post logic validation
    

    //result
    return kiekParagrafu;
}

export {teskstoTikrinimas};