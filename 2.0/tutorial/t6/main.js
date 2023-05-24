var mapa = [[" ", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", " "],
            ["*", " ", " ", " ", " ", " ", " ", " ", "*", "*", "*", "*", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", " ", "*", "*", "*", "*", "*", "*", "*", "*", "H", "*", "*"],
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", "*"],
            ["*", " ", "*", "*", "*", " ", " ", " ", " ", " ", "*", " ", "*"],
            ["*", " ", "*", "*", "*", " ", " ", " ", "*", "*", "*", " ", "*"],
            ["*", "U", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]]
var coordPlayer = [5,6], coordBomba = [5,8,3]
var textTela = document.getElementById("textTela")  
var tamY = 8, tamX = 13
var fim = false
renderizarMapa(tamY, tamX)
// função do player andar 
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
    }else if(tecla.key == "x"){
        explodir()
    }else if (tecla.key == "3"){
        if(fim == true){
            window.location.href = "../../menu/index.html"            
        }
    }
    if(tecla.key == "w" || tecla.key == "a" || tecla.key == "s" || tecla.key == "d" || tecla.key == "e"){
        if(coordBomba[0] == coordPlayer[0] && coordBomba[1] == coordPlayer[1]){
            moverBomba(tecla.key)
        }
        if(coordPlayer[0] == 7 && coordPlayer[1] == 1) {
            document.getElementById("instrucao").innerHTML = "Você completou o tutorial! <br> Aperte 3 para retornar ao menu"
            fim = true
        }
    }

    renderizarMapa(tamY, tamX)
}

function explodir(){
    coordBomba[2]--
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            mapa[coordBomba[0] + i - 1][coordBomba[1] + j - 1] = " "
            if(coordBomba[0] + i - 1 == coordPlayer[0] && coordBomba[1] + j - 1 == coordPlayer[1]){
                mapa = [[" ", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", " "],
                        ["*", " ", " ", " ", " ", " ", " ", " ", "*", "*", "*", "*", "*"],
                        ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
                        ["*", " ", "*", "*", "*", "*", "*", "*", "*", "*", "H", "*", "*"],
                        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", "*"],
                        ["*", " ", "*", "*", "*", " ", " ", " ", " ", " ", "*", " ", "*"],
                        ["*", " ", "*", "*", "*", " ", " ", " ", "*", "*", "*", " ", "*"],
                        ["*", "U", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]]
                coordPlayer = [5,6]
                coordBomba = [5,8,3]
                i = 3
                j = 3
            }
        }
    }
    if(coordBomba[2] <= 0){
        coordBomba = [0,14,0]
    }
}

function moverBomba(direcao){
    if(direcao == "w"){
        if(mapa[coordBomba[0] - 1][coordBomba[1]] != "*" && mapa[coordBomba[0] - 1][coordBomba[1]] != "H"){
            coordBomba[0]--
        }else{
            coordPlayer[0]++
        }
    }else if(direcao == "a"){
        if(mapa[coordBomba[0]][coordBomba[1] - 1] != "*" && mapa[coordBomba[0]][coordBomba[1] - 1] != "H"){
            coordBomba[1]--
        }else{
            coordPlayer[1]++
        }
    }else if(direcao == "s"){
        if(mapa[coordBomba[0] + 1][coordBomba[1]] != "*" && mapa[coordBomba[0] + 1][coordBomba[1]] != "H"){
            coordBomba[0]++
        }else{
            coordPlayer[0]--
        }
    }else if(direcao == "d"){
        if(mapa[coordBomba[0]][coordBomba[1] + 1] != "*" && mapa[coordBomba[0]][coordBomba[1] + 1] != "H"){
            coordBomba[1]++
        }else{
            coordPlayer[1]--
        }
    }
}       

function renderizarMapa(y,x){
    textTela.innerHTML = ""
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerHTML += "<span style='color:  #311dad'> &</span>"
            }else if(coordBomba[0] == i && coordBomba[1] == j){
                textTela.innerHTML += "<span style='color: #990000'> ■</span>"
            }else if(mapa[i][j] == "H"){
                textTela.innerHTML += "<span style='color: #946506'> H</span>"
            }else if (mapa[i][j] == "U"){
                textTela.innerHTML += "<span style='color: #946506'> U</span>"
            }else if (mapa[i][j] == "#"){
                textTela.innerHTML += "<span style='color: #5e5e5c'> #</span>"
            }else if (mapa[i][j] == "M"){
                textTela.innerHTML += "<span style='color: #5e5e5c'> M</span>"
            }else if (mapa[i][j] == "O"){
                textTela.innerHTML += "<span style='color: #00ba10'> O</span>"
            }else{
                textTela.innerHTML += " " + mapa[i][j]   
            }
        } 
        textTela.innerHTML += "<br>"
    }
    if (coordBomba[2] <= 0) {
        coordBomba[2] = 0; // garante que a contagem não fique negativa após as 3 tentativas 
      }
    document.getElementById("usos").innerText = `A bomba possui ${coordBomba[2]} usos`
}