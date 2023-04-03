
//export davanti alla funzione permette di farla uscire dal file in cui si trova per essere importata
export function cercaProvincia(sigla){
    return function (provincia) {
        // console.log("😎 "+sigla)
        // console.log(provincia.sigla)
    
    return provincia.sigla === sigla
    }
}

export function cercaRegione(regione){
    return function (provincia){
      return  provincia.regione === regione    }
}