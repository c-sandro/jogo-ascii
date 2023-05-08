var mapa = [["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", "*", " ", "*"], 
            ["*", " ", "k", " ", " ", " ", " ", "H", " ", "*"], 
            ["*", " ", "O", " ", " ", " ", " ", "#", " ", "*"], 
            ["*", " ", " ", " ", " ", "□", " ", " ", " ", "*"], 
            ["*", " ", " ", " ", " ", " ", "M", " ", " ", "*"], 
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]] 
var coordPlayer = [4,2], coordMonstro = [4,6]
var xouy = ""
var textTela = document.getElementById("textTela")
var tamX = 10, tamY = 10
var vidas = 3
var monstro = false, monstroMorto = false, tomaDano = false
renderizarMapa(tamY, tamX)

window.onkeydown = function andar(tecla){
    if(tecla.key == "w"){
        if(mapa[coordPlayer[0] - 1][coordPlayer[1]] != "*" && mapa[coordPlayer[0] - 1][coordPlayer[1]] != "H"){
            coordPlayer[0]--
            xouy = "y"
        }
    }else if(tecla.key == "a"){
        if(mapa[coordPlayer[0]][coordPlayer[1] - 1] != "*" && mapa[coordPlayer[0]][coordPlayer[1] - 1] != "H"){
            coordPlayer[1]--
            xouy = "x"
        }
    }else if(tecla.key == "s"){
        if(mapa[coordPlayer[0] + 1][coordPlayer[1]] != "*" && mapa[coordPlayer[0] + 1][coordPlayer[1]] != "H"){
            coordPlayer[0]++
            xouy = "y"
        }
    }else if(tecla.key == "d"){
        if(mapa[coordPlayer[0]][coordPlayer[1] + 1] != "*" && mapa[coordPlayer[0]][coordPlayer[1] + 1] != "H"){
            coordPlayer[1]++
            xouy = "x"    
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
    }else if(tecla.key == "m"){
        monstro = !monstro
    }else if(tecla.key == "v"){
        vidas += 3
    }else if(tecla.key == "b"){
        tomaDano = !tomaDano
    }
    if(mapa[coordPlayer[0]][coordPlayer[1]] == "O"){
        for(var i = 0; i < tamY; i++){
            for(var j = 0; j < tamX; j++){
                if(mapa[i][j] == "#"){
                    mapa[i][j] = "W"
                }
            }
        }
    }else{
        for(var i = 0; i < tamY; i++){
            for(var j = 0; j < tamX; j++){
                if(mapa[i][j] == "W"){
                    mapa[i][j] = "#"
                }
            }
        }
    }
    if(tecla.key == "w" || tecla.key == "a" || tecla.key == "s" || tecla.key == "d" || tecla.key == "e"){
        moverMonstro()
        if((mapa[coordPlayer[0]][coordPlayer[1]] == "M" || mapa[coordPlayer[0]][coordPlayer[1]] == "W") && tomaDano == true){
            vidas-- 
        }
    }
    renderizarMapa(tamY,tamX)
}

function moverMonstro(){
if(monstro == true && monstroMorto == false){
    if((xouy == "y" || coordPlayer[0] == coordMonstro[0]) && coordPlayer[1] != coordMonstro[1]){
        if(coordPlayer[1] > coordMonstro[1]){
            if(coordMonstro[0] == coordPlayer[0] && coordMonstro[1] + 1 == coordPlayer[1]){
                vidas--
            }
            else if(mapa[coordMonstro[0]][coordMonstro[1] + 1] != "*" && mapa[coordMonstro[0]][coordMonstro[1] + 1] != "H"){
                coordMonstro[1]++ 
            }
        }else if(coordPlayer[1] < coordMonstro[1]){
            if(coordMonstro[0] == coordPlayer[0] && coordMonstro[1] - 1 == coordPlayer[1]){
                vidas--
            }
            else if(mapa[coordMonstro[0]][coordMonstro[1] - 1] != "*" && mapa[coordMonstro[0]][coordMonstro[1] - 1] != "H"){
                coordMonstro[1]--
            }
        }
    }else if(xouy == "x" || coordPlayer[1] == coordMonstro[1]){
        if(coordPlayer[0] > coordMonstro[0]){
            if(coordMonstro[0] + 1 == coordPlayer[0] && coordMonstro[1] == coordPlayer[1]){
                vidas--
            }
            else if(mapa[coordMonstro[0] + 1][coordMonstro[1]] != "*" && mapa[coordMonstro[0] + 1][coordMonstro[1]] != "H"){
                coordMonstro[0]++  
            }
        }else if(coordPlayer[0] < coordMonstro[0]){
            if(coordMonstro[0] - 1 == coordPlayer[0] && coordMonstro[1] == coordPlayer[1]){
                vidas--
            }
            else if(mapa[coordMonstro[0] - 1][coordMonstro[1]] != "*" && mapa[coordMonstro[0] - 1][coordMonstro[1]] != "H"){
                coordMonstro[0]--
            }
        }
    }
    if(coordMonstro[0] == coordPlayer[0] && coordMonstro[1] == coordPlayer[1]){
        vidas--
    }
    if(mapa[coordMonstro[0]][coordMonstro[1]] == "W"){
        coordMonstro = [-1,-1]
        monstroMorto = true
        console.log("w")
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
                textTela.innerText += " §"
            }else{
                if(mapa[i][j] == "W"){
                    textTela.innerText += " M"
                }else{
                    textTela.innerHTML += " " + mapa[i][j]   
                }
            }
        } 
        textTela.innerHTML += "<br>"
    }
    for(var i = 0; i < vidas; i++){
        textTela.innerText += "     "
    }
    textTela.innerHTML += "<br>"
    for(var i = 0; i < vidas; i++){
        textTela.innerText += "(`´) "
    }
    textTela.innerHTML += "<br>"
    for(var i = 0; i < vidas; i++){
        textTela.innerText += " \\/  "
    }
}