import {cajaRecibos} from './modelos/cajaRecibos.js'
import {gestorArchivos} from './services/gestorArchivos.js'

console.log(gestorArchivos)

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