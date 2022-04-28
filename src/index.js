import {cajaRecibos} from './modelos/cajaRecibos.js'

console.log("Esperar 7 segundos")
console.log('\n-------------------------------------------\n')

setTimeout(()=>{
console.log("Pasaron 7 segundos")
console.log('\n-------------------------------------------\n')

console.log("Recorrer e imprimir mostrando cliente e importe: ")
console.log(cajaRecibos.recorrerRecibos())
console.log('\n-------------------------------------------\n')

console.log("Recibos ordenados por importe")
cajaRecibos.ordenarPorImporte()
console.log(cajaRecibos)
console.log('\n-------------------------------------------\n')

console.log("Clientes que empiezan con letra 'R")
console.log(cajaRecibos.clientesConR())
console.log('\n-------------------------------------------\n')

console.log("Aumento del 30% del importe")
console.log(cajaRecibos.importeConAumento())
},7000)