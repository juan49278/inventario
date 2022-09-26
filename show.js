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
        <td class="col-span-2"><input type="text" class="cant">
        <td class="col-span-2"><input type="text" class="precio">
        <td class="col-span-2"><span id="${length}total">Total</span>
        </tr>`
    }
    document.getElementById('productos').innerHTML = toAppened
}
function calcular(){
let todosInputs = document.querySelectorAll('input')
for(productos of todosInputs){
    i = []
let a = document.querySelectorAll('input')[i].value
let b = document.querySelectorAll('input')[i+1].value
let c = b * a
document.querySelectorAll('span')[i].innerHTML = c
}
}