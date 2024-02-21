function ativarBotao(botao) 
var estaAtivo botao.classList.contains("ativo"); 

var botoes document.querySelectorAll(".botao");
for (var i = 0; 1 botoes.length; i++) { 
    botoes[i].classList.remove("ativo"); 
}
 if (!lestaAtivo){
  botao.classList.add("ativo"); 
  } 
}
var dataAlvo = new Date();
dataAlvo.setDate(dataAlvo.getDate() + 7); 
dataAlvo.setHours(23); dataAlvo.setMinutes(59); 
dataAlvo.setSeconds(59);
dataAlvo dataAlvo.getTime();

var intervalo = setInterval(function() { 
    var agora = new Date().getTime();

    var diferenca dataAlvo - agora; 
    
    var dias = Math.floor(diferenca / (1000 * 6060 * 24))
    var horas = Math.floor((diferenca % (1000)

