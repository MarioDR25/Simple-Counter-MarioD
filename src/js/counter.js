let reloj = null
let segundos = 0;
let minutos = 0;
let horas = 0;

const counterGeneral = (callbackRender) => {
  if (reloj !== null) return;
  console.log("Reloj Iniciado");

  reloj = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    let seg = segundos < 10 ? "0" + segundos : segundos;
    let min = minutos < 10 ? "0" + minutos : minutos;
    let hor = horas < 10 ? "0" + horas : horas;

    callbackRender(seg, min, hor)
  }, 1000);
}


const stopReloj = () => {

  clearInterval(reloj);
  reloj = null
  console.log("Reloj pausado");
}

const reiniciaReloj = (callbackRender) => {
  clearInterval(reloj)
  reloj = null
  segundos = 0;
  minutos = 0;
  horas = 0;
  console.log("Reloj Reiniciado");
  callbackRender()
}


const establecerYArrancar = (tiempoInicial, callbackRender) => {

  segundos = parseInt(tiempoInicial) + 1;
  if (reloj) {
    clearInterval(reloj);
    reloj = null;
  }
  console.log("Cuenta regresiva iniciada");
  reloj = setInterval(() => {
    segundos--;


    let m = Math.floor(segundos / 60);
    let h = Math.floor(m / 60);

    if (segundos <= 0) {
            clearInterval(reloj); 
            reloj = null;
            callbackRender(0, 0, 0); 
            setTimeout(() => alert("Tiempo Finalizado"), 100);
            return; 
        }
    
    callbackRender(segundos % 60, m % 60, h);
  }, 1000);
};


export { counterGeneral, stopReloj, reiniciaReloj, establecerYArrancar };


