const API = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"

//Função para abrir criar a animaçãos das caixas de perguntas e niveis 
function openCollapsable() {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

