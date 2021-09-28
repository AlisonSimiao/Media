var i = 1;
var notas;

function add(){ 
    var b   = document.querySelector("#aluno");
    if( b.value <= 10 && b.value >= 0){
        var a   = document.createElement("h1");
        notas   = document.querySelector("#notas");

        notas.appendChild(a);
        data = new Date();
        
        a.className     = "eachN";
        a.textContent   = b.value;
        a.addEventListener('click', 
            function() {
                notas.removeChild(this);
                i--;
                calcular();
            }
        );
            i++;
            calcular();
    }
    else{
        b.value = '';
        alert("limites => ( 00 , 10 )");
    }
}

function calcular() {
    alunosN =document.querySelectorAll(".eachN");
    rst = document.querySelector("#RST");
    aux = 0;

   for (const i in alunosN) {
       if (alunosN.hasOwnProperty.call(alunosN, i)) {
            const element        = alunosN[i];
            aux                  += parseInt(element.textContent)/alunosN.length;
            rst.textContent = aux;
       }
   }

    
}


document.onkeydown = function(e) {
    if(e.which == 13) 
        document.querySelector("#add").click();
};