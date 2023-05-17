var setaParaDireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta") 
var bruna   = window.document.getElementById("bruna")
var setaParaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaParaDireita.style = "display:none"
    setaParaEsquerda.style = "display:flex "

}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaParaDireita.style = "display:flex"
    setaParaEsquerda.style = "display:none"
}