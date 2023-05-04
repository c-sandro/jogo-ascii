window.onkeydown = function jogar(tecla) {
    if (tecla.key == "1") {
        window.location.href = "../fases/fase1/index.html"     //ajustar de acordo com a localização da pasta do jogo
    } else if (tecla.key == "2") {
        window.location.href = "../tutorial/t1/index.html" //ajustar de acordo com a localização da pasta do tutorial
    } else if (tecla.key == "3"){
        window.close()
    } else if(tecla.key == "0"){
        window.location.href = "../fases/faseTeste/index.html"
    }
}