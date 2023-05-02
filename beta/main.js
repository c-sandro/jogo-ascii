var mapa = [["*",   "*"   ,   "*"   ,   "*"   ,   "*"   ,   "*"   ,   "*"   ,   "*"   ,   "*"   ,   "*"   ],
            ["*", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*", "\u2000",   "k"   , "\u2000",   "*"   ,   "*"   , "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*", "\u2000", "\u2000", "\u2000",   "*"   ,   "*"   , "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000", "\u2000",   "*"   ], 
            ["*",   "*"   ,   "*"   ,   "*"   ,   "H"   ,   "*"   ,   "*"   ,   "*"   ,   "*"   ,   "*"   ]]
var coordPlayer = [2,2]
var textTela = document.getElementById("textTela")

renderizarMapa(10,10)

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
            for(var i = 0; i < 10; i++){
                for(var j = 0; j < 10; j++){
                    if(mapa[i][j] == "H"){
                        mapa[i][j] = "U"
                    }
                }
            }
            mapa[coordPlayer[0]][coordPlayer[1]] = "\u2000"
        }

    }
    renderizarMapa(10,10)
}

function renderizarMapa(x,y){
    textTela.innerText = ""
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(coordPlayer[0] == i && coordPlayer[1] == j){
                textTela.innerText += " &"
            }else if(Math.pow((i - coordPlayer[0]), 2) + Math.pow((j - coordPlayer[1]), 2) <= 10){
                textTela.innerText += " " + mapa[i][j]
            }else{
                textTela.innerText += " \u2000"
            }
        } 
        textTela.innerHTML += "<br>"
    }
}