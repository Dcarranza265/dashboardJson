const btnDaily = document.getElementById('btnDaily')
const btnWeekly = document.getElementById('btnWeekly')
const btnMonthly = document.getElementById('btnMonthly')
const frecuency = document.querySelectorAll('.frecuency')
const horasActuales = document.querySelectorAll('.horasActuales')
const horasAnteriores = document.querySelectorAll('.horasAnteriores')

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarDatos(btnDaily.textContent)
})

btnDaily.addEventListener('click', () =>{
    mostrarDatos(btnDaily.textContent)
}) 
btnWeekly.addEventListener('click', () =>{
    mostrarDatos(btnWeekly.textContent)
})
btnMonthly.addEventListener('click', () =>{
    mostrarDatos(btnMonthly.textContent)
})

function mostrarDatos(frecuencia){
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'data.json', true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {            
            let datos = JSON.parse(this.responseText)      
            obtenerDatos(datos, frecuencia)     
            //  for (let dato of datos){
            //      console.log(dato)
            //     }
        }
    }
}

function obtenerDatos(data, intervalo){    
    for (let i = 0; i < 6; i++) {
        if (intervalo == "Daily") frecuency[i].textContent = "Day"                        
        else if(intervalo == "Weekly") frecuency[i].textContent = "Week"            
        else frecuency[i].textContent = "Month"

        // frecuency[i].textContent = intervalo        
        horasActuales[i].textContent = data[i].timeframes[intervalo.toLowerCase()].current
        horasAnteriores[i].textContent = data[i].timeframes[intervalo.toLowerCase()].previous
    }
}