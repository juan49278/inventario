$(document).ready(() => {
  $("#getXLS").click(function () {
    alert()
    $("#content").table2excel({
      exclude: ".noExl",
      name: "Worksheet Name",
      filename: "Inventario" + "_" + (document.title) + "_" + (document.getElementById("mes").value),
      fileext: ".xls"
    });
  });
})

function calcular() {
  let todosInputs = document.querySelectorAll('input');
  for (let i = 0; i < todosInputs.length; i++) {
    let a = document.querySelectorAll('input.cant')[i].value;
    let b = document.querySelectorAll('input.precio')[i].value;
    let c = b * a;
    document.querySelectorAll('span')[i].innerHTML = c
    document.querySelectorAll('p.cant')[i].innerHTML = a
    document.querySelectorAll('p.precio')[i].innerHTML = b
  }
}

function calculoBalance() {
  let spanInputs = document.querySelectorAll(`span.total`);
  let resultado = 0;

  spanInputs.forEach(function (spanInputs) {
    resultado += parseInt(spanInputs.innerHTML) || 0;
  });

  document.querySelector(`#result`).innerHTML = resultado;
  let mesShow = document.querySelector("input#mes").value
  mesVal.innerHTML = mesShow
}
let showSpinner = function () {
  document.getElementById("animation").style.display = "block";
}

let hideSpinner = function () {
  document.getElementById("animation").style.display = "none";
}

function guardarLocal() {
  let table = document.getElementById('table').innerHTML
  localStorage.setItem('table' + document.title, table)
}

function sumCant(){
  let newCant = moreCant.value
  let idNumber = toId.value
  let actualValue = document.querySelectorAll('input.cant')[idNumber -1].value
  let result = parseInt(actualValue) + parseInt(newCant)
  document.querySelectorAll('input.cant')[idNumber -1].value = result
  if(document.querySelectorAll('input.cant')[idNumber -1].value == ""){
    alertError()
  }
}

/* function addProduct(){
  product = []
  let index = document.querySelectorAll('tr').length
  let newProduct = productAdd.value
 product = `<th scope="row">${index -1}</th>
 <td class="col-span-2">${newProduct}</td>
 <td class="col-span-2"><input type="number" placeholder="Cant." class="form-control cant col-8 col-md-3" aria-label="cant"><p class="cant d-none"></p>
 <td class="col-span-2"><input type="number" placeholder="$" oninput="calcular()" onchange="guardarLocal()"class="form-control precio col-10 col-md-3" aria-label="precio"><p class="precio d-none"></p>
 <td class="col-span-2"> $<span class="total"></span>`
 document.querySelector('lastProduct').innerHTML += product
} */
function alertError(){
  Swal.fire({
    title:'Error',
    text: 'Para poder sumar primero debes verificar que el producto ya tenga una cantidad',
    icon: 'error'
  })
}
function alert(){
  Swal.fire({
    title: 'Listo!',
    text: 'Se empezó a descargar tu Excel',
    icon: 'info'
  })
}

const swal = require('sweetalert2')