var mapa = [["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", "*", " ", "*"], 
            ["*", " ", "k", " ", " ", " ", " ", "H", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]] 
var coordPlayer = [4,2], coordMonstro = [4,6]
var xouy = ""
var textTela = document.getElementById("textTela")
var tamX = 10, tamY = 10
renderizarMapa(tamY, tamX)

window.onkeydown = function andar(tecla){
    if(tecla.key == "w"){
        moverMonstro()
        if(mapa[coordPlayer[0] - 1][coordPlayer[1]] != "*" && mapa[coordPlayer[0] - 1][coordPlayer[1]] != "H"){
            coordPlayer[0]--
            xouy = "y"
        }
    }else if(tecla.key == "a"){
        moverMonstro()
        if(mapa[coordPlayer[0]][coordPlayer[1] - 1] != "*" && mapa[coordPlayer[0]][coordPlayer[1] - 1] != "H"){
            coordPlayer[1]--
            xouy = "x"
        }
    }else if(tecla.key == "s"){
        moverMonstro()
        if(mapa[coordPlayer[0] + 1][coordPlayer[1]] != "*" && mapa[coordPlayer[0] + 1][coordPlayer[1]] != "H"){
            coordPlayer[0]++
            xouy = "y"
        }
    }else if(tecla.key == "d"){
        moverMonstro()
        if(mapa[coordPlayer[0]][coordPlayer[1] + 1] != "*" && mapa[coordPlayer[0]][coordPlayer[1] + 1] != "H"){
            coordPlayer[1]++
            xouy = "x"    
        }  
    }else if(tecla.key == "e"){
        if(mapa[coordPlayer[0]][coordPlayer[1]] == "k"){
            moverMonstro()
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
    renderizarMapa(tamY,tamX)
}

function moverMonstro(){
    if(xouy == "y" || coordPlayer[0] == coordMonstro[0]){
        if(coordPlayer[1] > coordMonstro[1]){
            coordMonstro[1]++
        }else if(coordPlayer[1] < coordMonstro[1]){
            coordMonstro[1]--
        }else{
            if(coordPlayer[0] > coordMonstro[0]){
                coordMonstro[0]++
            }else if(coordPlayer[0] < coordMonstro[0]){
                coordMonstro[0]--
            }
        }
    }else if(xouy == "x" || coordPlayer[1] == coordMonstro[1]){
        if(coordPlayer[0] > coordMonstro[0]){
            coordMonstro[0]++
        }else if(coordPlayer[0] < coordMonstro[0]){
            coordMonstro[0]--
        }else{
            if(coordPlayer[1] > coordMonstro[1]){
                coordMonstro[1]++
            }else if(coordPlayer[1] < coordMonstro[1]){
                coordMonstro[1]--
            }
        }
    }
}

function renderizarMapa(y,x){
    textTela.innerText = ""
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerText += " &"
            }else if(coordMonstro[0] == i && coordMonstro[1] == j){
                textTela.innerText += " £"
            }else{
                textTela.innerText += " " + mapa[i][j]
            }
        } 
        textTela.innerHTML += "<br>"
    }
    if(coordPlayer[0] == 14 && coordPlayer[1] == 13){
        textTela.innerHTML += "<br> ganhasse"
    }
}