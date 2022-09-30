addEventListener('DOMContentLoaded', async()=>{
let promise = await fetch('productos.json')
let result = await promise.json()
data = result
show(data.productos)
})

function show(){
    let toAppened = []
    for(let i= 0; i < data.productos.length; i ++){
        toAppened += `<tr>
        <th scope="row">${[i+1]}</th>
        <td class="col-span-2">${data.productos.sort()[i]}</td>
        <td class="col-span-2"><input type="number" class="cant" value="">
        <td class="col-span-2"><input type="number" class="precio" value="">
        <td class="col-span-2"><span class="total" id="${i}total"></span>
        </tr>`
    }
    document.getElementById('productos').innerHTML = toAppened
}
function calcular(){
let todosInputs = document.querySelectorAll('input')
for(let i=0; i < todosInputs.length ;i ++){
let a = document.querySelectorAll('input.cant')[i].value
let b = document.querySelectorAll('input.precio')[i].value
let c = b * a
document.querySelectorAll('span')[i].innerHTML = c
}
}

function sumatoria(){
    var resultTotal = document.querySelectorAll('span')
   for(let i=0; i < resultTotal.length; i++){
    let valor = document.querySelectorAll('span.total')[i];
    let valorX = document.querySelectorAll('span.total')[i+1];
   let result = valor + valorX;
   document.getElementById('result').innerHTML = result
    }
}
/* document.getElementById('saveProgress').addEventListener('click', ()=> {
    let table = document.getElementById('table')
    if(!localStorage.getItem('table')){
        localStorage.setItem('table', table.innerHTML)
    }
}) */