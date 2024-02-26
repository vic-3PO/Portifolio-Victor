var tablinks = document.getElementsByClassName("tab-links");
var tabconteudos = document.getElementsByClassName("tab-conteudo");

function opentab(tabnome){
    for(tablink of tablinks){
        tablink.classList.remove("ativa-link")
    }
    for(tabconteudo  of tabconteudos){
        tabconteudo.classList.remove("ativa-tab")
    }

    event.currentTarget.classList.add("ativa-link")
    document.getElementById(tabnome).classList.add("ativa-tab")
}