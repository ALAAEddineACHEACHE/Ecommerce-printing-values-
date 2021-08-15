$(document).ready(function(){
    let qtte =$("#quantite_value");
    let prix = $("#prix_value");
    let nombre = $("#nombre_value");
    //printing the input values 
    $("#nombre").on("change",function(){
      nombre.text(`${this.value}`);
    });
    $("#quantite").on("change",function(){
      qtte.text(`${this.value}`);
    });

    $("#prix").on("change",function(){
      prix.text(`${this.value}`);
    });
    $("#taille").on("change",function(){
      $("#taille_value").text(`${this.value}`);
    });
    //Calcul Total
    function calculerTotal(){
        let total = $("#quantite_value").text()*$("#prix_value").text();
      if(total>=0){
        return total;
      }else{
         alert("error");
      }
    }
    //Printing Total
    $("#quantite").on("change",function(){
      $("#total_value").text(calculerTotal());
    });
    $("#prix").on("change",function(){
      $("#total_value").text(calculerTotal());
    });
})