addEventListener('DOMContentLoaded', async()=>{
let promise = await fetch('/productos.json')
let result = await promise.json()
data = result
show(data.productos)
})

function show(){
    let toAppened = []
    for(let i= 0; i < data.productos.length; i ++){
        toAppened += `<tr>
        <td>${data.productos.sort()[i]}</td>
        <td><input type="number" id="cantidad">
        <td><input type="number" id="precio">
        <td"id="total">
        </tr>`
    }
    document.getElementById('productos').innerHTML = toAppened
}