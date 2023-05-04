var mapa = [["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "H", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "k", " ", " ", "W", " ", "U"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", "*"],
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]]
var coordPlayer = [4,2]
var textTela = document.getElementById("textTela")  
var larguraMapa = 15, alturaMapa = 9
renderizarMapa(alturaMapa, larguraMapa)

window.onkeydown = function andar(tecla){
    if(tecla.key == "w"){
        if(mapa[coordPlayer[0] - 1][coordPlayer[1]] != "*" && mapa[coordPlayer[0] - 1][coordPlayer[1]] != "H"){
            coordPlayer[0]--
        }
    }else if(tecla.key == "a"){
        if(mapa[coordPlayer[0]][coordPlayer[1] - 1] != "*" && mapa[coordPlayer[0]][coordPlayer[1] - 1] != "H"){
            coordPlayer[1]--
        }
    }else if(tecla.key == "s"){
        if(mapa[coordPlayer[0] + 1][coordPlayer[1]] != "*" && mapa[coordPlayer[0] + 1][coordPlayer[1]] != "H"){
            coordPlayer[0]++
        }

    }else if(tecla.key == "d"){
        if(mapa[coordPlayer[0]][coordPlayer[1] + 1] != "*" && mapa[coordPlayer[0]][coordPlayer[1] + 1] != "H"){
            coordPlayer[1]++        
        }
    }else if(tecla.key == "e"){
        if(mapa[coordPlayer[0]][coordPlayer[1]] == "k"){
            for(var i = 0; i < alturaMapa; i++){
                for(var j = 0; j < larguraMapa; j++){
                    if(mapa[i][j] == "H"){
                        mapa[i][j] = "U"
                    }
                }
            }
            mapa[coordPlayer[0]][coordPlayer[1]] = " "
        }

    }
    if (coordPlayer[0] == 4 && coordPlayer[1] == 14) {
        document.getElementById("instrucao").innerHTML = `Você completou o Tutorial, parabéns!.<br>Aperte 3 para voltar ao menu`
    }
    if (tecla.key == "3"){
        window.location.href = "/MENU/menu.html"
    }
    renderizarMapa(alturaMapa,larguraMapa)
}

function renderizarMapa() {
    textTela.innerText = "";
    for (var i = 0; i < mapa.length; i++) {
      for (var j = 0; j < mapa[i].length; j++) {
        if (coordPlayer[0] == i && coordPlayer[1] == j) {
          textTela.innerText += " " + "&";
        } else {
          textTela.innerText += " " + mapa[i][j];
        }
      }
      textTela.innerHTML += "<br>";
    }
  }