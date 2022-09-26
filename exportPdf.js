function getPDF() {
    var doc = new jsPDF();
    var specialElementHandlers = {
      '#getPDF': function(element, renderer){
        return true;
      },
      '.controls': function(element, renderer){
        return true;
      }
    };
    doc.fromHTML($('#table').get(0), 15, 15, {
      'width': 170, 
      'elementHandlers': specialElementHandlers
    });
  
    doc.save('Generated.pdf');
  }