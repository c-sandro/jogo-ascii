var mapa = [[" ", " ", " ", " ", " ", "*", "*", "*", "*", "*", "*", "*", " "],
            [" ", " ", " ", " ", "*", " ", " ", " ", " ", " ", " ", " ", "*"],
            [" ", " ", " ", " ", "*", " ", " ", " ", " ", " ", " ", " ", "*"],
            [" ", " ", " ", " ", "*", " ", " ", " ", " ", " ", " ", " ", "*"],
            [" ", "*", "*", "*", "*", "*", "*", "*", "*", "M", "M", "M", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", "M", " ", " ", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", "M", " ", " ", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", "M", " ", " ", " ", "*"],
            ["*", "M", "M", "M", "*", "*", "*", "*", "*", "*", "*", "*", " "],
            ["*", " ", " ", " ", "M", " ", " ", " ", "*", " ", " ", " ", " "],
            ["*", " ", " ", " ", "M", " ", " ", " ", "U", " ", " ", " ", " "],
            ["*", " ", " ", " ", "M", " ", " ", " ", "*", " ", " ", " ", " "],
            [" ", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]]
var coordPlayer = [2,6], coordBloco = [2,10,0]
const textTela = document.getElementById("textTela")  
const tamY = 13, tamX = 13
var fim = false
renderizarMapa(tamY, tamX)

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
    }else if (tecla.key == "3"){
        if(fim == true){
            window.location.href = "../../menu/index.html"            
        }
    }
    if(mapa[coordPlayer[0]][coordPlayer[1]] == "M"){
        coordPlayer = [2,6]
        coordBloco = [2,10,0]
        for(var i = 0; i < tamY; i++){
            for(var j = 0; j < tamX; j++){
                if(mapa[i][j] == "v"){
                    mapa[i][j] = "M"
                }
            }
        }
    }
    if(coordPlayer[0] == 4 && coordPlayer[1] == 14) {
        document.getElementById("instrucao").innerHTML = "Você completou o Tutorial, parabéns!. <br>"
        document.getElementById("instrucao").innerText += "Aperte 3 para voltar ao menu"
        fim = true
    }
    if(coordPlayer[0] == coordBloco[0] && coordPlayer[1] == coordBloco[1]){
        moverBloco(tecla.key)
        if(mapa[coordBloco[0]][coordBloco[1]] == "M"){
            mapa[coordBloco[0]][coordBloco[1]] = "v"
            if(coordBloco[2] == 0){
                coordBloco = [6, 10, 1]
            }else if(coordBloco[2] == 1){
                coordBloco = [6, 6, 2]
            }else if(coordBloco[2] == 2){
                coordBloco = [6, 6, 3]
            }else{
                coordBloco = [14, 1]
            }
        }
    }
    renderizarMapa(tamY, tamX)
}

function moverBloco(direcao){
    if(direcao == "w"){
        if(mapa[coordBloco[0] - 1][coordBloco[1]] != "*" && mapa[coordBloco[0] - 1][coordBloco[1]] != "H"){
            coordBloco[0]--
        }else{
            coordPlayer[0]++
        }
    }else if(direcao == "a"){
        if(mapa[coordBloco[0]][coordBloco[1] - 1] != "*" && mapa[coordBloco[0]][coordBloco[1] - 1] != "H"){
            coordBloco[1]--
        }else{
            coordPlayer[1]++
        }
    }else if(direcao == "s"){
        if(mapa[coordBloco[0] + 1][coordBloco[1]] != "*" && mapa[coordBloco[0] + 1][coordBloco[1]] != "H"){
            coordBloco[0]++
        }else{
            coordPlayer[0]--
        }
    }else if(direcao == "d"){
        if(mapa[coordBloco[0]][coordBloco[1] + 1] != "*" && mapa[coordBloco[0]][coordBloco[1] + 1] != "H"){
            coordBloco[1]++
        }else{
            coordPlayer[1]--
        }
    }
}

function renderizarMapa(y, x){
    textTela.innerText = ""
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            if (coordPlayer[0] == i && coordPlayer[1] == j) {
                textTela.innerText += " &"
            }else if(coordBloco[0] == i && coordBloco[1] == j){
                textTela.innerText += " □"
            }else if(mapa[i][j] == "v"){
                textTela.innerText += "  "
            }else{
                textTela.innerText += " " + mapa[i][j]
            }
        }
        textTela.innerHTML += "<br>"
        }
}