var mapa = [[" ", " ", " ", " ", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", " "],
            [" ", " ", " ", " ", "*", "M", " ", " ", "M", " ", " ", " ", "*", " ", " "],
            [" ", " ", " ", " ", "*", " ", "M", " ", " ", " ", "M", " ", "*", "*", "*"],
            [" ", " ", " ", " ", "*", " ", " ", " ", " ", " ", "M", " ", "M", " ", "*"],
            ["*", "*", "*", "*", "*", " ", " ", "M", " ", " ", "*", " ", "M", " ", "U"],
            ["*", " ", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", "M", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", "M", " ", " ", "M", " ", "*", " ", "*"],
            ["*", " ", " ", "M", "*", " ", "M", " ", " ", "*", " ", " ", " ", " ", "*"],
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]]
var coordPlayer = [6,2]
const textTela = document.getElementById("textTela")  
const tamY = 9, tamX = 15
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
        coordPlayer = [6,2]
    }
    if(coordPlayer[0] == 4 && coordPlayer[1] == 14) {
        document.getElementById("instrucao").innerHTML = "Você completou o Tutorial, parabéns!. <br>"
        document.getElementById("instrucao").innerText += "Aperte 3 para voltar ao menu"
        fim = true
    }
    renderizarMapa(tamY, tamX)
}

function renderizarMapa(y, x){
    textTela.innerText = ""
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            if (coordPlayer[0] == i && coordPlayer[1] == j) {
                textTela.innerText += " &"
            }else{
                textTela.innerText += " " + mapa[i][j]
            }
        }
        textTela.innerHTML += "<br>"
        }
}