var mapa = [["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "U", "*"], 
            ["*", "*", " ", "*", "*", " ", "*", "*", "*", " ", "*", " ", "*", " ", "*"], 
            ["*", "*", " ", "*", "*", " ", "*", " ", "*", " ", "*", " ", "*", " ", "*"], 
            ["*", " ", " ", "*", "*", " ", " ", " ", "*", " ", "*", " ", "*", " ", "*"], 
            ["*", "*", "*", "*", "*", " ", "*", " ", "*", " ", "*", " ", "*", " ", "*"], 
            ["*", " ", " ", " ", "*", " ", "*", " ", "*", " ", " ", " ", "*", " ", "*"], 
            ["*", " ", "*", "*", "*", " ", "*", "*", "*", " ", "*", " ", "*", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", " ", "*", "*", "*"], 
            ["*", " ", "*", " ", "*", " ", "*", "*", "*", " ", "*", " ", " ", " ", "*"], 
            ["*", " ", "*", "*", "*", " ", " ", " ", "*", " ", "*", "*", "*", " ", "*"], 
            ["*", "*", "*", "*", " ", " ", "*", " ", "*", " ", " ", " ", " ", "*", "*"], 
            ["*", "k", "*", "*", "*", " ", "*", " ", "*", "*", " ", "*", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", "*", " ", " ", "*", " ", "*", "*", " ", "*"], 
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "H", "*"]]  
var coordPlayer = [1,13]
const textTela = document.getElementById("textTela")
const tamX = 15, tamY = 15
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
            mapa[14][13] = "U"
            mapa[coordPlayer[0]][coordPlayer[1]] = " "
        }
    }
    renderizarMapa(tamY,tamX)
}

function renderizarMapa(y,x){
    textTela.innerText = ""
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerHTML += "<span style='color: #311dad'> &</span>"
            }else if(Math.pow((i - coordPlayer[0]), 2) + Math.pow((j - coordPlayer[1]), 2) <= 10){
                if(mapa[i][j] == "k") {
                    textTela.innerHTML += "<span style='color: #ede85a'> k</span>"
                }else if(mapa[i][j] == "H"){
                    textTela.innerHTML += "<span style='color: #946506'> H</span>"
                }else if(mapa[i][j] == "U"){
                    textTela.innerHTML += "<span style='color: #946506'> U</span>"
                }else{
                    textTela.innerHTML += " " + mapa[i][j]
                }
            }else{
                textTela.innerHTML += "  "
            }
        } 
        textTela.innerHTML += "<br>"
    }
    if(coordPlayer[0] == 14 && coordPlayer[1] == 13){
        window.location.href = "../fase2/index.html"
    }
}