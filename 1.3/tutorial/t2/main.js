var mapa = [[" ", " ", " ", " ", " ", "*", "*", "*", "*", "*", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", "*", " ", " ", " ", "*", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", "*", " ", " ", " ", "*", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", "*", " ", " ", " ", "*", " ", " ", " ", " ", " "],
            ["*", "*", "*", "*", "*", "*", "*", " ", "*", "*", "*", "*", "*", "*", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", " ", "k", " ", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", "H"],
            ["*", " ", " ", " ", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*"],
            ["*", "*", "*", "*", "*", " ", " ", " ", " ", " ", "*", "*", "*", "*", "*"]]
var coordPlayer = [2,7]
const textTela = document.getElementById("textTela")  
const tamY = 9, tamX = 15
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
    }else if(tecla.key == "e"){
        if(mapa[coordPlayer[0]][coordPlayer[1]] == "k"){
            for(var i = 0; i < tamY; i++){
                for(var j = 0; j < tamX; j++){
                    if(mapa[i][j] == "H"){
                        mapa[i][j] = "U"
                    }
                }
            }
            mapa[coordPlayer[0]][coordPlayer[1]] = " "
        }
    }
    if (coordPlayer[0] == 6 && coordPlayer[1] == 14) {
        window.location.href = "../t3/index.html"
    }
    renderizarMapa(tamY, tamX)
}

function renderizarMapa(y, x) {
    textTela.innerText = ""
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerText += " &"
            }else{
                textTela.innerText += " " + mapa[i][j]
            }
        }
        textTela.innerHTML += "<br>"
    }
}