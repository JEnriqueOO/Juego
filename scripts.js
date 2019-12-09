/* *********** REGLAS **************

 Piedra - Papel  - Tijera 
 
 Eventos Victorias:
 Piedra -Gana- Tijera 
 Papel - Gana - Piedra
 Tijera - Gana - Papel 
 
*/ 
var contador= 0;
var contadorMaquina= 0;
function jugar(a)
{
	 var opciones = ['Piedra', 'Papel', 'Tijera']; 
	 var numero = Math.floor(Math.random() * opciones.length);
	 var maquina = opciones[numero]; 
	// var maquina = 'Tijera';
	 var jugador =a;

if(jugador=='Piedra' && maquina=='Tijera' || jugador=='Papel' && maquina=='Piedra' || jugador=='Tijera' && maquina=='Papel'   ){
 
 contador++;
 var output = document.getElementById('output');
 output.innerHTML = 'VICTORIAS JUGADOR 1 = '+contador;
 var audio = document.getElementById("audio");
audio.play();	
alert(' LA MAQUINA DIJO: '+maquina);	
alert(' VICTORIA ');	
	
}

else if(jugador=='Piedra' && maquina=='Piedra' || jugador=='Papel' && maquina=='Papel' || jugador=='Tijera' && maquina=='Tijera'   ){
var audio = document.getElementById("audio3");
audio.play();
alert(' LA MAQUINA DIJO: '+maquina);	
alert('EMPATE  ');		
}

else{
contadorMaquina++;
 var output2 = document.getElementById('output2');
 output2.innerHTML = 'VICTORIAS MAQUINA = '+contadorMaquina;
 var audio = document.getElementById("audio2");
audio.play();
alert(' LA MAQUINA DIJO: '+maquina);	
alert('DERROTA  ');			
}

}