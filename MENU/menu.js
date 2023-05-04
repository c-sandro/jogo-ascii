window.onkeydown = function jogar(tecla) {
    if (tecla.key == "1") {
        window.location.href = "../beta/index.html"
    } else if (tecla.key == "2") {
        window.location.href = "../tutorial/index.html"
    } else if (tecla.key == "3"){
        window.close()
    }
}