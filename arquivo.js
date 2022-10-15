function codificar(){
    var verificCifra = document.getElementById("cifraCesar").selected;
    var verificBase64 = document.getElementById("base64").selected;
    var cod = document.getElementById("cod").checked;
    var dec = document.getElementById("dec").checked;
    var texto = document.getElementById("conteudo").value;
    var modificador = parseInt(document.getElementById("modificador").value);
    var array = [];
    
    if (verificCifra  == true) {
        for (var i = 0; i < texto.length; i++){
            var x = texto[i].charCodeAt();
            if ((x <= 65) || (x >= 125)){
                array.push(String.fromCharCode(x));
                continue;
            }
            else {
                if(cod == true){
                   cripto = x + modificador;
                   array.push(String.fromCharCode(cripto)); 
                }
                if(dec == true){
                    cripto = x - modificador;
                    array.push(String.fromCharCode(cripto));
                }
            }
        }
        document.getElementById("conteudo2").value = array.join("");
    }

    if(verificBase64 == true) {
        if(cod == true){
           document.getElementById("conteudo2").value = btoa(texto);
           return;
        }
        if(dec == true){
           document.getElementById("conteudo2").value = atob(texto);
           return;
        }
    }
}

function display() {
    var mod = document.getElementById("modificador");
    var verificarCifra = document.getElementById("cifraCesar").selected;
    var verificarBase64 = document.getElementById("base64").selected;
  
  
    if(verificarCifra == true){
      if (mod.style.display === "none") {
        mod.style.display = "block";
        document.getElementById("incr").style.display = "block";      
      } else {
        mod.style.display = "block";
        document.getElementById("incr").style.display = "block"
      }
    }if(verificarBase64 == true){
      if (mod.style.display === "block") {
        mod.style.display = "none";
        document.getElementById("incr").style.display = "none";
      } else {
        mod.style.display = "none";
        document.getElementById("incr").style.display = "none"
      }
    }
  
  
  
}

function b(){
    var selectCod = document.getElementById("cod").checked;
    var selectDec = document.getElementById("dec").checked;
    var botao = document.getElementById("codif");
    
    if(selectCod == true){
        botao.innerText = "Codificar Mensagem";
    }
    if(selectDec == true){
        botao.innerText = "Decodificar Mensagem";
    }    
}