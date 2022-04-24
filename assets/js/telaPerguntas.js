console.log('carregou telaPerguntasjs');
//Tela de criação das perguntas do quizz
import { numPerguntas } from '/assets/js/script.js';
export let objetoQuestionsAnswers = {};

//chama a tela de perguntas
function callQuestionsPage() {
    console.log("entrou no callquestion");
    const questionsPage = document.querySelector("body");
    questionsPage.innerHTML = "";
    questionsPage.innerHTML = renderQuestionsPage();
    openCollapsable();
}

function renderQuestionsPage() {
    let element = " ";
    for (let i = 0; i < numPerguntas; i++) {
        console.log("entrou no for");
        element =
            element +
            `
      <div class="perguntas-container">
    <button class="collapsible">Pergunta ${i + 1}
      <ion-icon name="create-outline"></ion-icon></button>
    <div class="content">
    
    <form>
            <input class="pergunta-titulo-${i + 1}" type="text" placeholder="Texto da pergunta"required minlength="20">
            <input class="cor-de-fundo-${i + 1}" type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" required>
            
            <span class="subtitulo">Resposta Correta</span>
            <input class="resposta-correta-${i + 1}" type="text" placeholder="Resposta correta" required/>
            <input class="url-imagem-resposta-correta-${i + 1}" type="url" placeholder="URL da imagem" pattern="https?://.+" required>
            
            <span class="subtitulo">Respostas Incorretas</span>
            <input class="resposta-incorreta-${i + 1}" type="text" placeholder="Resposta incorreta 1" required>
            <input class="url-imagem-incorreta-${i + 1}" type="url" placeholder="URL da imagem 1" pattern="https?://.+" required>
            
            <input class="resposta-incorreta-${i + 1}" type="text" placeholder="Resposta incorreta 2"/>
            <input class="url-imagem-incorreta-${i + 1}" type="url" placeholder="URL da imagem 2" pattern="https?://.+" required>
            
            <input class="resposta-incorreta-${i + 1}" type="text" placeholder="Resposta incorreta 3"/>
            <input class="url-imagem-incorreta-${i + 1}" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required>
    </form>
    </div>`;
    }
    return `
     <div class="header">
      <h1>BuzzQuizz</h1>
      </div>
      <p class="titulo-perguntas">Crie suas perguntas</p>
      <div>
      ${element}
      </div>
    <input onclick="validarPerguntas()" class="botao-prosseguir-perguntas" value="Prosseguir para criar níveis">
    </div>
      `;
    openCollapsable();
}

//objeto das perguntas e respostas

let objPerguntaTitulo = [];
let objCorFundo = [];
let objRespostaCorreta = [];
let objURLRespostaCorreta = [];
let objRespostaIncorreta =[];
let objURLRespostaIncorreta = [];

function validarPerguntas() {
    for (let i = 0; i < numPerguntas; i++) {

        let perguntaTitulo = document.querySelectorAll(`.pergunta-titulo-${i + 1}`)
        for (let i = 0; i < numPerguntas; i++){
         objPerguntaTitulo[i] = perguntaTitulo[i].value;
        }

        let corFundo = document.querySelectorAll(`.cor-de-fundo-${i + 1}`).value;
        for (let i = 0; i < numPerguntas; i++){
            objCorFundo[i] = corFundo[i].value;
           }
        let respostaCorreta = document.querySelectorAll(`.resposta-correta-${i + 1}`).value;
        for (let i = 0; i < numPerguntas; i++){
            objRespostaCorreta[i] = respostaCorreta[i].value;
           }
        let urlRespostaCorreta = document.querySelectorAll(`.url-imagem-resposta-correta-${i + 1}`).value;
        for (let i = 0; i < numPerguntas; i++){
            objURLRespostaCorreta[i] = urlRespostaCorreta[i].value;
           }
        let respostaIncorreta = document.querySelectorAll(`.resposta-incorreta-${i + 1}`).value;
        for (let i = 0; i < numPerguntas; i++){
            objRespostaIncorreta[i] = respostaIncorreta[i].value;
           }
        let  urlRespostaIncorreta = document.querySelectorAll(`.url-imagem-incorreta-${i + 1}`).value;
        for (let i = 0; i < numPerguntas; i++){
            objRespostaIncorreta[i] = urlRespostaIncorreta[i].value;
    }
}
    
    let perguntaNaoVaziaTRUE;
    let respostaNaoVaziaTRUE;
    let perguntaCaracteresTRUE;
    let urlValidaTRUE;
    let corValidaTRUE;

    //testa se os textos das perguntas não estão vazios
    for (let i = 0; i < objPerguntaTitulo .length; i++) {
        if (objPerguntaTitulo[i] === '') {
            alert('Campos dos textos das perguntas não podem ficar vazios!');
            return;
        }
        else {
            perguntaNaoVaziaTRUE = true;

        }
    }

    //testa se os campos das respostas corretas não estão vazios
    for (let i = 0; i < objRespostaCorreta.length; i++) {
        if (objRespostaCorreta[i] === '') {
            alert('Campos das respostas corretas não podem ficar vazios!');
            return;
        }
        else {
            respostaNaoVaziaTRUE = true;
        }
    }

    // testa se os textos das perguntas têm menos de 20 caracteres
    for (let i = 0; i < objPerguntaTitulo.length; i++) {
        if (objPerguntaTitulo[i].length < 20) {
            alert("Pergunta deve ter pelo menos 20 caracteres!");
            return;
        }
        else {
            perguntaCaracteresTRUE = true;
        }
    }

    //testa se a url digitada é válida
    for (let i = 0; i < URLS.length; i++) {
        if (URLS[i].includes("https://") || URLS[i].includes("http://")) {
            urlValidaTRUE = true;
        }
        else {
            alert('URLS inválidas');
            return;
        }
    }

    //testa se a cor digitada é válida
    for (let i = 0; i < objCorFundo.length; i++) {
        if (!objCorFundo[i].includes("#") || objCorFundo[i].length !== 7 || objCorFundo[i] === '') {
            alert('Cor Inválida')
            return;
        }
        else {
            corValidaTRUE = true;
        }
    }

    //Testar se o usuário digitou os campos de forma correta, se sim então o botão de prosseguir irá mandar os dados pra API e avançar p/ dela de níveis
    if (perguntaNaoVaziaTRUE === true && perguntaCaracteresTRUE === true && respostaNaoVaziaTRUE === true && urlValidaTRUE === true && corValidaTRUE === true) {
        console.log("perguntas tudo ok");
        for (let i = 0; i < numPerguntas; i++){
            objetoQuestionsAnswers[i] = {
                title: objPerguntaTitulo[i],
                color: objCorFundo[i],
                answers: [
                    {
                        text: objRespostaCorreta[i],
                        image: objURLRespostaCorreta[i],
                        isCorrectAnswer: true
                    },
                    {
                        text: objRespostaIncorreta[i],
                        image: objURLRespostaIncorreta[i],
                        isCorrectAnswer: false
                    }
                ]
            }
        }
        formatarObjetoQuizz();
        callRendezizarFormNivelQuizz();
    }
    else {
        alert(`
        Validações:\n 
        Texto da pergunta precisa ter pelo menos 20 caracteres\n
        Cor precisa ser no formato (#RRGGBB)\n
        Precisa ter pelo menos 1 resposta correta \n 
        URL precisa ser de uma imagem válida no formato ( https:// )`);
    }
}
 
function postarPerguntasNaAPI() {
    let promise = axios.post(`${API}`, );

    promise.then((response) => {
        console.log(response.data);
    });

    promise.catch((error) =>
        alert("Você não preencheu todos os campos para criar o objeto corretamente")
    );
}
