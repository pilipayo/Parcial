import fs from 'fs'

const datos= fs.readFileSync('./src/recursos/nuevoTexto.txt', 'utf-8')

fs.appendFileSync('./src/recursos/nuevoTexto.txt', '\nnuevo texto\n')

