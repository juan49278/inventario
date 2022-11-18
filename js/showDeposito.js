addEventListener('DOMContentLoaded', async () => {
    showSpinner()
    if (localStorage.getItem('tableDeposito')) {
        table.innerHTML = localStorage.getItem('tableDeposito')
        let pCant = document.querySelectorAll('p.cant')
        let pPrecio = document.querySelectorAll('p.precio')
        let iCant = document.querySelectorAll('input.cant')
        let iPrecio = document.querySelectorAll('input.precio')
        for (let i = 0; i < pCant.length; i++) {
            iCant[i].value = pCant[i].innerHTML
            for (let i = 0; i < pPrecio.length; i++) {
                iPrecio[i].value = pPrecio[i].innerHTML
            }
        }
        hideSpinner()
    } else {
        let promise = await fetch('json/productosDeposito.json')
        let result = await promise.json()
        data = result
        show(data.productos)
        hideSpinner()
    }
})

function show() {
    let toAppened = []
    for (let i = 0; i < data.productos.length; i++) {
        toAppened += `<tr>
          <th scope="row">${[i + 1]}</th>
          <td class="col-span-2">${data.productos.sort()[i]}</td>
          <td class="col-span-2"><input type="number" placeholder="Cant." class="form-control cant col-8 col-md-3" value="" aria-label="cant"><p class="cant d-none"></p>
          <td class="col-span-2"><input type="number" placeholder="$" oninput="calcular()" onchange="guardarLocal()" class="form-control precio col-10 col-md-3" value="" aria-label="precio"><p class="precio d-none"></p>
          <td class="col-span-2">$<span class="total" id="${i}total"></span>
          </tr>`
    }
    document.getElementById('productos').innerHTML = toAppened
}

