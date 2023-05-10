const mapa = [["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"], 
              ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
              ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
              ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
              ["*", " ", " ", " ", " ", " ", " ", "*", " ", "*"], 
              ["*", " ", "k", " ", " ", " ", " ", "H", " ", "*"], 
              ["*", " ", "O", " ", " ", " ", " ", "#", " ", "*"], 
              ["*", " ", " ", " ", " ", " ", " ", " ", " ", "*"], 
              ["*", " ", " ", " ", " ", " ", "M", " ", " ", "*"], 
              ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
              [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]] 
var coordPlayer = [4,2], coordMonstro = [4,6], coordBloco = [7,5]
var xouy = ""
const textTela = document.getElementById("textTela")
const tamX = 10, tamY = 10
var vidas = 3
var monstro = false, monstroMorto = false, tomaDano = false
renderizarMapa(tamY, tamX)

window.onkeydown = function andar(tecla){
    //botoes de movimento
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
        //botao de interacao
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
    //botoes para teste
    }else if(tecla.key == "m"){
        monstro = !monstro
    }else if(tecla.key == "v"){
        vidas += 3
    }else if(tecla.key == "n"){
        tomaDano = !tomaDano
    }else if(tecla.key == "b"){
        coordBloco = [7,5]
    }
    //ativar o botao, ou seja, colocar os espinhos
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
    //se o player se mover ou pegar algo, roda
    if(tecla.key == "w" || tecla.key == "a" || tecla.key == "s" || tecla.key == "d" || tecla.key == "e"){
        moverMonstro()
        if((mapa[coordPlayer[0]][coordPlayer[1]] == "M" || mapa[coordPlayer[0]][coordPlayer[1]] == "W") && tomaDano == true){
            vidas-- 
        }
    }
    //se o player estiver em cima do bloco, roda
    if(coordPlayer[0] == coordBloco[0] && coordPlayer[1] == coordBloco[1]){
        moverBloco(tecla.key)
    }
    //ativar o botao de novo
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
    //se o bloco estiver em espinhos, quebra
    if(mapa[coordBloco[0]][coordBloco[1]] == "M"){
        mapa[coordBloco[0]][coordBloco[1]] = " "
        coordBloco = [10, 0]
    }else if(mapa[coordBloco[0]][coordBloco[1]] == "W"){
        coordBloco = [10, 0]
    }
    //se o monstro estiver em espinhos, morre
    if(mapa[coordMonstro[0]][coordMonstro[1]] == "W" || mapa[coordMonstro[0]][coordMonstro[1]] == "M"){
        coordMonstro = [10, 0]
        monstroMorto = true
    }

    renderizarMapa(tamY,tamX)
}

function moverMonstro(){
if(monstro == true && monstroMorto == false){
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

function moverBloco(direcao){
    //se a coordenada que o bloco for nao tiver parede ou porta fechada, ele vai
    //senao, ele empurra o player de volta
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

function renderizarMapa(y,x){
    textTela.innerText = ""
    //leitura de cada coordenada do mapa, e escrita de cada um
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerText += " &"
            }else if(coordMonstro[0] == i && coordMonstro[1] == j){
                textTela.innerText += " §"
            }else if(coordBloco[0] == i && coordBloco[1] == j){
                textTela.innerText += " □"
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
    //escrita das vidas do player na tela
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