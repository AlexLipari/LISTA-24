let idHotelreserva = [1,3,4,1,5]
let idHotel = [1,2,3,4,5]
let nomesHotel = ["Ibis","Hilton","Copacabana Palace","Emiliano","Ocean Palace"]
let categoriasHotel = ["****","*****","*****","****","***"]
let enderecosHotel = ["SP","RJ","RJ","SC","RN"]
let telefonesHotel = ["(11)","(21)","(21)","(47)","(84)"]
let idReserva = [6,7,8,9,10]
let nomesReserva = ["Sara","Bianca","Cris","Fabiana","Ligia"]
let entradasReserva = [1,2,3,4,5]
let saidasReserva = [5,6,7,8,9,]
 // cadastrar()
let idUsuario = parseInt(prompt("Digite o id do hotel que contem a reserva:")) 
procurarIdHotel(idUsuario)
let idUsuarioReserva = parseInt(prompt("Digite o id da reserva:"))
procurarIdReserva(idUsuarioReserva)
// function cadastrar (){
//     idHotel.push(prompt("Digite o id do Hotel:"))
//     nomesHotel.push(prompt("Digite o nome do hotel:"))
//     categoriasHotel.push(prompt("Digite a categoria do hotel:"))
//     enderecosHotel.push(prompt("Digite o endereço do hotel:"))
//     telefonesHotel.push(prompt("Digite o telefone do hotel:"))

//     console.log(idHotel,"-",nomesHotel,"-",categoriasHotel,"-",enderecosHotel,"-",telefonesHotel)

//     idReserva.push(prompt("Digite o id de reserva:"))
//     nomesReserva.push(prompt("Digite o nome da Reserva:"))
//     entradasReserva.push(prompt("Digite a entrada da reserva:"))
//     saidasReserva.push(prompt("Digite a saida da reserva:"))

//     console.log(idReserva,"-",nomesReserva,"-",entradasReserva,"-",saidasReserva)
//}

function procurarIdHotel(parametroIdHotel){
      let hotelIdAux=[]
    idHotelreserva.forEach((idUsuario,index) =>{
        if(idUsuario == parametroIdHotel){
            console.log("Id da reserva:",parametroIdHotel)
            hotelIdAux[hotelIdAux.length]=console.log("Id do Hotel:", idHotel[index])
            hotelIdAux[hotelIdAux.length]=console.log("Nome do Hotel:", nomesHotel[index])
            hotelIdAux[hotelIdAux.length]=console.log("Ospede:", nomesReserva[index])
            hotelIdAux[hotelIdAux.length]=console.log("dia de entrada:", entradasReserva[index])
            hotelIdAux[hotelIdAux.length]=console.log("dia de saída:", saidasReserva[index])
        }
    })
     hotelIdAux.forEach(idUsuario => console.log(idUsuario))
}
function procurarIdReserva(parametroIdReserva){
    let hotelIdReservaAux=[]
  idHotelreserva.forEach((idUsuarioReserva,index) =>{
      if(idUsuarioReserva == parametroIdReserva){
          console.log("Id da reserva:",parametroIdReserva)
          hotelIdReservaAux[hotelIdReservaAux.length]=console.log("Nome do Hotel:", nomesHotel[index])
          hotelIdReservaAux[hotelIdReservaAux.length]=console.log("Endereço:", enderecosHotel[index])
          hotelIdReservaAux[hotelIdReservaAux.length]=console.log("dia de entrada:", entradasReserva[index])
          hotelIdReservaAux[hotelIdReservaAux.length]=console.log("dia de saída:", saidasReserva[index])
      }
  })
   hotelIdReservaAux.forEach(idUsuarioReserva => console.log(idUsuarioReserva))
}



// class Calculadora {
//     NumeroUm
//     NumeroDois
    
//     somar(){
//         console.log(this.NumeroUm + this.NumeroDois)
//     }
//     subtrair(){
//         console.log(this.NumeroUm  - this.NumeroDois)
//     }
//     multiplicar(){
//         console.log(this.NumeroUm  * this. NumeroDois)
//     }
//     dividir(){
//         console.log(this.NumeroUm  / this.NumeroDois)
//     }
// }
// let calculadora = new Calculadora()
// calculadora.NumeroUm = 10
// calculadora.NumeroDois = 20

// calculadora.somar()
// calculadora.subtrair()
// calculadora.multiplicar()
// calculadora.dividir()