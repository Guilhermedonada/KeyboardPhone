var teclado = ['MGJ', 'YIZ','DKG'];
var mensagem = "GYGJZ";

var st = "";
var vetor_botao = [];
var vetor_quantidade = [];

for(var k =0; k <= mensagem.length-1; k++){
  for(var i =0;i <= teclado.length-1; i++){
    for(var j =0; j <= teclado[i].length-1; j++){			
        if(mensagem[k] == teclado[i][j]){
          vetor_botao.push(i+1);
          vetor_quantidade.push(j+1)
          break;
      }
    }    
    if(mensagem[k] == teclado[i][j]){        
      break;
    }   
  }
} 
//Botao X (vetor_botao[i]), clicado X vezes(vetor_quantidade[i])
console.log(vetor_botao)
console.log(vetor_quantidade)
