addEventListener('DOMContentLoaded', async()=>{
  showSpinner()
  let promise = await fetch('json/productosCongelados.json')
  let result = await promise.json()
  data = result
  show(data.productos)
  hideSpinner()
  })
  
  function show(){
      let toAppened = []
      for(let i= 0; i < data.productos.length; i ++){
          toAppened += `<tr>
          <th scope="row">${[i+1]}</th>
          <td class="col-span-2">${data.productos.sort()[i]}</td>
          <td class="col-span-2"><input type="number" placeholder="Cant." class="form-control cant col-8 col-md-3" value="" aria-label="cant"><p class="cant d-none"></p>
          <td class="col-span-2"><input type="number" placeholder="$" oninput="calcular()" class="form-control precio col-10 col-md-3" value="" aria-label="precio"><p class="precio d-none"></p>
          <td class="col-span-2">$<span class="total" id="${i}total"></span>
          </tr>`
      }
      document.getElementById('productos').innerHTML = toAppened
  }
  