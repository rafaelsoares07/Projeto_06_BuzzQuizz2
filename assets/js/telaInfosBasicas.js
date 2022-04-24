let titulo
let numPerguntas
let numNiveis
let urlBanner



function callRenderizarFormsInfosBasicas() {
    let body = document.querySelector('body')
    body.innerHTML = ''
    body.innerHTML = renderizarFormInfosBasicas()

}
function renderizarFormInfosBasicas() {
    return ` 
    <div class="form-create-quizz">
        <div class=infos-basicas>
            <div class="header">
                <h1>BuzzQuizz</h1>
            </div>
            <div class="form-infos-basicas">
                 <p class="titulo">Comece pelo começo</p> 
                 <input id="titulo-quizz" type="text" placeholder="Título do seu quizz" required minlength="20" maxlength="65" value="Meu Quizz do rick and Morty baby">
                 <input id="url-image-principal" type="text" placeholder="URl da imagem do seu quizz" required value="https://s2.glbimg.com/fP8FcBdhKXgZ2HCLdGl7R8MIHIk=/e.glbimg.com/og/ed/f/original/2017/10/20/rick-and-morty3.png">
                 <input id="quantidadePerguntas" type="number" placeholder="Quantidade de perguntas do quizz" required min="3" value="3">
                 <input id="quantidadeNiveis" type="number" placeholder="Quantidade de níveis do quizz" required min="2" value="2">  
                 <button onclick="validaçãoFormInfosBasicas()">Prosseguir para criar perguntas</button>    
            </div>
    </div>`;
}

function validaçãoFormInfosBasicas() {

    numPerguntas = document.querySelector('#quantidadePerguntas').value
    numNiveis = document.querySelector('#quantidadeNiveis').value
    titulo = document.querySelector('#titulo-quizz').value
    urlBanner = document.querySelector('#url-image-principal').value

    let numPerguntasTrue = numPerguntas >= 3
    let numNiveisTrue = numNiveis >= 2
    let tituloTrue = titulo.length >= 20
    let urlTrue = urlBanner.startsWith("https://")


    //console.log(tituloTrue)
    //console.log(numPerguntasTrue)
    console.log(urlBanner)

    if (numNiveisTrue && numPerguntasTrue && tituloTrue && urlTrue) {

      callQuestionsPage() 
    }

    else {
        alert(`
        Validações:\n
        Minimo de perguntas = 3 \n 
        Minimo de Niveis = 2\n
        Titulo precisa ter pelo menos 20 caracteres \n
        URL precisa ser de uma imagem válida no formato ( https:// )`)
    }
}

