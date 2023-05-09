var confirmar = false
window.onkeydown = function menu(tecla){
    if(tecla.key == "1"){
        if(confirmar == false){
            window.location.href = "../fases/fase1/index.html"
        }else{
            window.location.href = "https://google.com"
        }
    }else if(tecla.key == "2"){
        if(confirmar == false){
           window.location.href = "../tutorial/t1/index.html" 
        }else{
            document.getElementById("botoes").innerText = `*          /===========\\                              * 
*          | 1 - jogar |                              * 
*          \\===========/                              * 
*                                                     * 
*          /==============\\                           * 
*          | 2 - tutorial |                           * 
*          \\==============/                           * 
*                                                     * 
*          /==========\\                               * 
*          | 3 - sair |                               * 
*          \\==========/                               * 
*                                                     * 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * `
        }
        
    }else if(tecla.key == "3"){
        document.getElementById("botoes").innerText = `*                                                     * 
*          Você tem certeza?                          * 
*                                                     * 
*          /=========\\  /=========\\                   * 
*          | 1 - Sim |  | 2 - Não |                   * 
*          \\=========/  \\=========/                   * 
*                                                     * 
*                                                     * 
*                                                     * 
*                                                     * 
*                                                     * 
*                                                     * 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * `
        confirmar = true
    }else if(tecla.key == "0"){
        window.location.href = "../fases/faseTeste/index.html"
    }
}