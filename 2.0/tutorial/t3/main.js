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
    }
    if(mapa[coordPlayer[0]][coordPlayer[1]] == "M"){
        coordPlayer = [6,2]
    }
    if(coordPlayer[0] == 4 && coordPlayer[1] == 14) {
        window.location.href = "../t4/index.html"
    }
    renderizarMapa(tamY, tamX)
}

function renderizarMapa(y, x){
    textTela.innerText = ""
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerHTML += "<span style='color: #311dad'> &</span>"
            }else if(mapa[i][j] == "U"){
                textTela.innerHTML += "<span style='color: #946506'> U</span>"
            }else if(mapa[i][j] == "M"){
                textTela.innerHTML += "<span style='color: #5e5e5c'> M</span>"
            }else{
              textTela.innerHTML += " " + mapa[i][j]
            }
        }
        textTela.innerHTML += "<br>"
    }
}