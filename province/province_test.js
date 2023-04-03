console.log("---------------")
//Per scegliere tra le varie sintassi da far riconoscere aggiungere il type nel file package.json
//Importazione file system:
//sintassi common js, senza framework
//const fs = require('fs')
//sintassi angular/react e maggior parte dei framework
import fs from "fs";
//dentro un modulo le funzioni sono tutte private, tipo "private" degli attributi delle classi
import {cercaProvincia} from "./filtri_province.js"
import {cercaRegione} from "./filtri_province.js"

const data = fs.readFileSync("province.json")
    const province = JSON.parse(data);

console.log(province)

// const province = [];

//funzione di ordine superiore, è na funzione 
//che può essere inserita come argomento di un'altra funzione o può essere restituita come ggetto di un'altra funzione
const risultato = province.filter(cercaProvincia("TO"));
console.log("risultato",risultato)
const regione = province.filter(cercaRegione("Piemonte"))
console.log("regione ", regione)