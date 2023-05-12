var mapa = [["*", "U", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"], 
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*", " ", " ", " ", "#", "#", "#", " ", " ", " ", " ", " ", " ", " ", "*"], 
            ["*", "*", " ", "*", "*", " ", "*", "*", "*", "*", "*", "*", " ", "*", " ", "*", " ", "O", " ", "#", "#", "#", " ", " ", " ", " ", " ", " ", " ", "H"], 
            ["*", " ", " ", "M", "M", "M", "M", "M", "M", " ", " ", " ", " ", "M", " ", "*", " ", " ", " ", "#", "#", "#", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*", "*", "*", "*", "*", " ", " ", " ", " ", " ", " ", " ", "*", "*", "*", "*", "*", " ", "*"],
            ["*", " ", "*", "*", "M", "M", "*", "*", "M", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", "M", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", " ", "M", " ", " ", " ", "M", " ", " ", " ", "M", " ", " ", " ", "M", "*", " ", " ", " ", " ", " ", " ", " ", "*", "*", "*", " ", " ", " ", "*"],
            ["*", " ", "M", " ", "M", " ", " ", " ", "M", " ", " ", " ", " ", "M", "M", "*", " ", "M", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", " ", " ", " ", "M", "M", "M", " ", " ", "M", "M", "M", " ", " ", " ", "*", " ", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", " ", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", "*", "M", " ", " ", " ", "M", " ", " ", " ", " ", "M", "M", " ", " ", "*", " ", " ", " ", " ", " ", " ", "*", "*", "*", "*", "*", " ", " ", "*"],
            ["*", "M", " ", " ", "M", " ", " ", "M", " ", "M", " ", "M", "M", " ", " ", "*", "*", "*", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", "M", "*"],
            ["*", " ", "M", " ", "M", " ", "M", " ", " ", "M", " ", "M", "M", " ", "M", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*", "*"],
            ["*", "M", " ", " ", "M", " ", " ", "M", " ", "M", " ", "M", "M", " ", "M", "*", " ", " ", " ", " ", "*", "*", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", " ", "M", " ", "M", " ", "M", " ", " ", "M", " ", " ", " ", " ", " ", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*"],
            ["*", "M", " ", " ", "M", " ", " ", "M", " ", "M", " ", "M", "M", " ", "M", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", "M", " ", " ", "M", " ", "M", "M", " ", "M", " ", "M", "M", " ", "M", "*", " ", " ", " ", " ", " ", " ", "M", " ", " ", " ", " ", " ", " ", "*"],
            ["*", "M", "M", " ", "M", " ", " ", " ", " ", "M", " ", " ", "M", " ", " ", "*", " ", "*", "*", "*", "*", " ", "*", " ", "*", "*", "*", "*", "*", "*"],
            ["*", "*", "*", " ", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "O", " ", "*"],
            ["*", "M", " ", " ", " ", " ", " ", " ", "M", "M", "M", " ", " ", " ", "M", "*", "#", "#", "#", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            ["*", "*", "*", "*", "*", "*", "*", " ", " ", " ", " ", " ", " ", " ", "M", "*", "#", "#", "#", " ", "O", " ", " ", " ", " ", "*", "*", "*", " ", "*"],
            ["*", "M", "M", "*", " ", " ", "*", "*", "*", "*", "*", "*", "*", " ", " ", "*", "#", "#", "#", " ", " ", " ", " ", " ", " ", " ", "#", "#", "#", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*", "*", "*", "*", " ", " ", " ", " ", " ", " ", " ", "#", "#", "#", "*"],
            ["*", "*", " ", " ", " ", " ", "*", "M", "M", "M", "*", "*", "*", "*", "*", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", " ", "#", "#", "#", "*"],
            ["*", " ", " ", "M", "M", "M", "M", "M", "M", " ", " ", "*", "*", "*", "*", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", "*", "*", "*", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "H", " ", " ", " ", " ", " ", " ", " ", " ", " ", "H", " ", " ", " ", "*"],
            ["*", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "*", " ", " ", " ", " ", " ", "M", " ", " ", " ", "*", " ", " ", " ", "*"],
            ["*", "M", "M", "M", "M", "M", "M", "M", "M", "M", "k", "M", "M", "M", "M", "*", " ", " ", " ", " ", " ", "*", " ", " ", " ", "*", " ", " ", " ", "*"],
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "*"]]  
var coordPlayer = [1,1], coordBloco = [4,9,0], coordMonstro = [27,27]
const textTela = document.getElementById("textTela")
const tamX = 30, tamY = 30
var vidas = 3
var monstroMorto = false
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
    }
    if(mapa[coordPlayer[0]][coordPlayer[1]] == "O" || mapa[coordMonstro[0]][coordMonstro[1]] == "O" || mapa[coordBloco[0]][coordBloco[1]] == "O"){
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
        if(mapa[coordPlayer[0]][coordPlayer[1]] == "M" || mapa[coordPlayer[0]][coordPlayer[1]] == "W"){
            vidas-- 
            coordPlayer = [1,1]
        }
    }
    if(coordPlayer[0] == coordBloco[0] && coordPlayer[1] == coordBloco[1]){
        moverBloco(tecla.key)
    }
    if((mapa[coordPlayer[0]][coordPlayer[1]] == "O" || mapa[coordMonstro[0]][coordMonstro[1]] == "O" || mapa[coordBloco[0]][coordBloco[1]] == "O") && mapa.includes("#") == true){
        mapa = mapa.replaceAll("#","W")
    }else{
        if(mapa.includes("W") == true){
            mapa = mapa.replaceAll("W", "#")
        }
    }
    if(mapa[coordBloco[0]][coordBloco[1]] == "M"){
        if(coordBloco[2] == 0){
            coordBloco = [21,5,1]
        }else{
            coordBloco = [50,0,2]
        }
        console.log("w")
        mapa[coordBloco[0]][coordBloco[1]] = " "
    }
    if(mapa[coordMonstro[0]][coordMonstro[1]] == "W" || mapa[coordMonstro[0]][coordMonstro[1]] == "M"){
        coordMonstro = [10, 0]
        monstroMorto = true
    }

    renderizarMapa(tamY,tamX)
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

function moverMonstro(){
    if(monstroMorto == false){
        //se o player estiver se movendo na vertical ou o monstro estiver alinhado verticalmente
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
        //se o player estiver se movendo na horizontal ou o monstro estiver alinhado horizontalmente
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
    }
    }

function renderizarMapa(y,x){
    textTela.innerText = ""
    for(var i = 0; i < y; i++){
        if(Math.abs(i - coordPlayer[0]) <= 5){
            for(var j = 0; j < x; j++){
                if(coordPlayer[0] == i && coordPlayer[1] == j){
                    textTela.innerText += " &"
                }else if(Math.pow((i - coordPlayer[0]), 2) + Math.pow((j - coordPlayer[1]), 2) <= 35){
                    if(coordBloco[0] == i && coordBloco[1] == j){
                        textTela.innerText += " □"
                    }else if(coordMonstro[0] == i && coordMonstro[1] == j){
                        textTela.innerText += " §"
                    }else{
                        textTela.innerText += " " + mapa[i][j]
                    }
                }else{
                    textTela.innerText += "  "
                }
            }
            textTela.innerText += " "
            textTela.innerHTML += "<br>"
        }else{
            textTela.innerHTML += "<br>"
        }   
    }
    textTela.innerText = textTela.innerText.replaceAll(",", " ")
    if(coordPlayer[0] == 1 && coordPlayer[1] == 29){
        window.location.href = "../../final/index.html"
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