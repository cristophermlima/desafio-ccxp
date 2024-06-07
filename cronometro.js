const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("min")
const segundo = document.getElementById("seg")

const lancamento = "31 dec 2022"

function countdown(){
    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    const segTotal = (hoje - dataLanc) / 1000;
    const dias = Math.floor((segTotal /3600 / 24));
    const horas = Math.floor((segTotal/3600) % 24);
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal % 60);

    dia.innerHTML = ` <strong>${dias}D</strong>`
    hora.innerHTML = ` <strong>${horas}D</strong>`
    minuto.innerHTML = ` <strong>${minutos}D</strong>`
    segundo.innerHTML = ` <strong>${segundos}D</strong>`
}

countdown();

setInterval(countdown,1000);