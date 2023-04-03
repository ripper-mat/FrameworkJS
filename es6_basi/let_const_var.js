console.log("Ciao")

let a = 0
// let a=1

const colori = []
colori.push("rosso")

// colori = "rosso"

const numeri = [7,2,1,5,10,9,6,4]

const numeri_raddoppiati = numeri.map(function (numero) {
    // console.log(numero)
    return numero*2
})

// numeri.filter(()=> è come scrivere function () {}
const numeri_pari = numeri.filter((numero)=>{
    if(numero % 2 === 0){
        return true
    }
    return false
})

const numeri_dispari = numeri.filter(numero => numero % 2 === 1)

const somma_tutti_numeri = numeri.reduce((accumulatore, numero) => {
    return numero + accumulatore
},0)

console.log(numeri)
console.log("numeri raddoppiati", numeri_raddoppiati)
console.log("numeri pari", numeri_pari)
console.log("numeri dispari", numeri_dispari)
console.log("numeri sommati", somma_tutti_numeri)




