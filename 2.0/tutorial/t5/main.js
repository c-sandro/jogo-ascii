var mapa = [[" ", " ", " ", " ", " ", " ", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
            [" ", " ", " ", "*", "*", "*", "*", " ", " ", "#", "#", "#", "#", " ", "*"],
            [" ", " ", " ", "*", " ", " ", " ", " ", " ", "#", "#", "#", "#", " ", "*"],
            [" ", " ", " ", "*", " ", " ", " ", " ", " ", "#", "#", "#", "#", " ", "*"],
            ["*", "*", "*", "*", " ", "O", " ", " ", " ", "#", "#", "#", "#", " ", "H", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "#", "#", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "#", "#", " ", "*"],
            ["*", " ", " ", " ", " ", " ", " ", " ", " ", "#", "#", "#", "#", " ", "*"],
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]]
var coordPlayer = [6,2], coordMonstro = [1,13]
var xouy = ""
var textTela = document.getElementById("textTela")  
var tamY = 9, tamX = 15
var monstroMorto = false
var fim = false
renderizarMapa(tamY, tamX)
// função do player andar 
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
    }else if (tecla.key == "3"){
        if(fim == true){
            window.location.href = "../../menu/index.html"            
        }
    }
    //função do botão O, acionamento dos espinhos 
    if(mapa[coordPlayer[0]][coordPlayer[1]] == "O"){
        for(var i = 0; i < tamY; i++){
            for(var j = 0; j < tamX; j++){
                if(mapa[i][j] == "#"){
                    mapa[i][j] = "M"
                }
            }
        }
    }else{
        for(var i = 0; i < tamY; i++){
            for(var j = 0; j < tamX; j++){
                if(mapa[i][j] == "M"){
                    mapa[i][j] = "#"
                }
            }
        }
    }
    // função do Montro andar
    if(tecla.key == "w" || tecla.key == "a" || tecla.key == "s" || tecla.key == "d" || tecla.key == "e"){
        moverMonstro()
    }

    renderizarMapa(tamY, tamX)
}
function moverMonstro(){
    if(monstroMorto == false){
        if((xouy == "y" || coordPlayer[0] == coordMonstro[0]) && coordPlayer[1] != coordMonstro[1]){
            if(coordPlayer[1] > coordMonstro[1]){
                if(coordMonstro[0] == coordPlayer[0] && coordMonstro[1] + 1 == coordPlayer[1]){
                    coordPlayer = [6,2]
                    coordMonstro = [1,13]
                }
                else if(mapa[coordMonstro[0]][coordMonstro[1] + 1] != "*" && mapa[coordMonstro[0]][coordMonstro[1] + 1] != "H"){
                    coordMonstro[1]++ 
                }
            }else if(coordPlayer[1] < coordMonstro[1]){
                if(coordMonstro[0] == coordPlayer[0] && coordMonstro[1] - 1 == coordPlayer[1]){
                    coordPlayer = [6,2]
                    coordMonstro = [1,13]
                }
                else if(mapa[coordMonstro[0]][coordMonstro[1] - 1] != "*" && mapa[coordMonstro[0]][coordMonstro[1] - 1] != "H"){
                    coordMonstro[1]--
                }
            }
        }else if(xouy == "x" || coordPlayer[1] == coordMonstro[1]){
            if(coordPlayer[0] > coordMonstro[0]){
                if(coordMonstro[0] + 1 == coordPlayer[0] && coordMonstro[1] == coordPlayer[1]){
                    coordPlayer = [6,2]
                    coordMonstro = [1,13]
                }
                else if(mapa[coordMonstro[0] + 1][coordMonstro[1]] != "*" && mapa[coordMonstro[0] + 1][coordMonstro[1]] != "H"){
                    coordMonstro[0]++  
                }
            }else if(coordPlayer[0] < coordMonstro[0]){
                if(coordMonstro[0] - 1 == coordPlayer[0] && coordMonstro[1] == coordPlayer[1]){
                    coordPlayer = [6,2]
                    coordMonstro = [1,13]
                }
                else if(mapa[coordMonstro[0] - 1][coordMonstro[1]] != "*" && mapa[coordMonstro[0] - 1][coordMonstro[1]] != "H"){
                    coordMonstro[0]--
                }
            }
        }
        if(coordMonstro[0] == coordPlayer[0] && coordMonstro[1] == coordPlayer[1]){
            coordPlayer = [6,2]
            coordMonstro = [1,13]
        }
        if(mapa[coordMonstro[0]][coordMonstro[1]] == "M"){
            coordMonstro = [-1,-1]
            monstroMorto = true
            mapa[4][14] = "U"
        }
    }
    if(coordPlayer[0] == 4 && coordPlayer[1] == 14) {
        document.getElementById("instrucao").innerHTML = "Você completou o Tutorial, parabéns!. <br>"
        document.getElementById("instrucao").innerText += "Aperte 3 para voltar ao menu"
        fim = true
    }
}        

function renderizarMapa(y,x){
    textTela.innerHTML = ""
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerHTML += "<span style='color:  #311dad'> &</span>"
            }else if(coordMonstro[0] == i && coordMonstro[1] == j){
                textTela.innerHTML += "<span style='color: #820903'> §</span>"
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
}