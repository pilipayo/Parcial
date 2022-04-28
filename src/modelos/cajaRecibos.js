const cajaRecibos ={ 
    aRecibos:[
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ],

    recorrerRecibos(){
     this.aRecibos.forEach(recibo=>console.log("Cliente: " + recibo.cliente + " - Importe: " +  recibo.importe))
   },

    ordenarPorImporte(){
     this.aRecibos.sort((a,b)=>(a.importe-b.importe))
   },

   clientesConR(){
       return this.aRecibos.filter(recibo=>recibo.cliente.charAt(0)=='R')
   },
  
   importeConAumento(){
       return this.aRecibos.map(recibo=>{return{id: recibo.id, numero: recibo.numero, importe : recibo.importe*1.3, cliente: recibo.cliente}})
   }


}

    export {cajaRecibos}