$(document).ready( ()=> {
    $("#getXLS").click(function() {
  $("#content").table2excel({
    exclude: ".noExl",
    name: "Worksheet Name",
    filename: "Inventario",
    fileext: ".xls"
  }); 
});
})

function calculoBalance() {
    var spanInputs = document.querySelectorAll(`span.total`);
    var resultado = 0;
  
    spanInputs.forEach(function(spanInputs) {
      resultado += parseInt(spanInputs.innerHTML) || 0;
    });
  
    document.querySelector(`#result`).innerHTML = resultado;
    var mesShow = document.querySelector("input#mes").value
    mesVal.innerHTML = mesShow
  }