function paragraf(tekstas) {
    //input validation
    if(typeof tekstas !== 'string') {
        console.error('ERROR: Duotas netinkamo tipo reiksme');
        return false;
    }
    if(tekstas.trim().length === 0) {
        console.error('ERROR: duotas tuscias tekstas');
        return false;
    }

    //logic
    const size = tekstas.length;
    let kiekParagrafu = 1;
    for(let i = 0; i < size; i++) {
        if(tekstas[i] === '\n' && tekstas[i + 1] === '\n') {
           if(tekstas[i + 2] !== '\n') {
               if(typeof tekstas[i + 2] !== 'undefined') {
                   kiekParagrafu ++;
               }
           }
        }else {
           
       }
    }

    //post logic validation
    if(typeof kiekParagrafu !== 'number') {
        console.error('ERROR:');
        return false;
    }

    //result

    return kiekParagrafu ;
}

export {paragraf};