var mapa = [[" ", " ", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
            [" ", " ", "*", " ", " ", " ", " ", " ", " ", " ", " ", "*"],
            [" ", " ", "*", " ", "*", "*", "*", "*", "*", "*", " ", "*"],
            [" ", " ", "*", "▼", "*", " ", " ", " ", " ", "*", " ", "*"],
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", " ", "*"],
            ["*", "►", " ", " ", " ", " ", " ", " ", "*", "◄", " ", "*"],
            ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
            [" ", " ", "*", "▲", " ", " ", " ", " ", " ", " ", " ", "U"],
            [" ", " ", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]]
var coordPlayer = [5,7]
var textTela = document.getElementById("textTela")  
var tamY = 9, tamX = 12
var fim = false
renderizarMapa(tamY, tamX)
// função do player andar 
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
    if(tecla.key == "w" || tecla.key == "a" || tecla.key == "s" || tecla.key == "d" || tecla.key == "e"){
        if(coordPlayer[0] == 7 && coordPlayer[1] == 11) {
            document.getElementById("instrucao").innerHTML = "Você completou o tutorial! <br> Aperte 3 para retornar ao menu"
            fim = true
        }
        teleporte()
    }
    renderizarMapa(tamY, tamX)
}

function teleporte(){
    if(mapa[coordPlayer[0]][coordPlayer[1]] == "▲"){
        for(var i = 0; i < tamY; i++){
            if(mapa[i].includes("▼") == true){
                coordPlayer[0] = i
                coordPlayer[1] = mapa[i].indexOf("▼")
            }
        }
    }else if(mapa[coordPlayer[0]][coordPlayer[1]] == "▼"){
        for(var i = 0; i < tamY; i++){
            if(mapa[i].includes("▲") == true){
                coordPlayer[0] = i
                coordPlayer[1] = mapa[i].indexOf("▲")
            }
        }
    }else if(mapa[coordPlayer[0]][coordPlayer[1]] == "►"){
        for(var i = 0; i < tamY; i++){
            if(mapa[i].includes("◄") == true){
                coordPlayer[0] = i
                coordPlayer[1] = mapa[i].indexOf("◄")
            }
        }
    }else if(mapa[coordPlayer[0]][coordPlayer[1]] == "◄"){
        for(var i = 0; i < tamY; i++){
            if(mapa[i].includes("►") == true){
                coordPlayer[0] = i
                coordPlayer[1] = mapa[i].indexOf("►")
            }
        }
    }
}      

function renderizarMapa(y,x){
    textTela.innerHTML = ""
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerHTML += "<span style='color:  #311dad'> &</span>"
            }else if(mapa[i][j] == "H"){
                textTela.innerHTML += "<span style='color: #946506'> H</span>"
            }else if(mapa[i][j] == "U"){
                textTela.innerHTML += "<span style='color: #946506'> U</span>"
            }else if(mapa[i][j] == "▲" || mapa[i][j] == "►" || mapa[i][j] == "▼" || mapa[i][j] == "◄"){
                textTela.innerHTML +=`<span style='color: #990099'> ${mapa[i][j]}</span>`
            }else{
                textTela.innerHTML += " " + mapa[i][j]   
            }
        } 
        textTela.innerHTML += "<br>"
    }
}