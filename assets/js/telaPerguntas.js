//Tela de criação das perguntas do quizz

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
            <input class="resposta-incorreta1-${i + 1}" type="text" placeholder="Resposta incorreta 1" required>
            <input class="url-imagem-incorreta1-${i + 1}" type="url" placeholder="URL da imagem 1" pattern="https?://.+" required>
            
            <input class="resposta-incorreta2-${i + 1}" type="text" placeholder="Resposta incorreta 2"/>
            <input class="url-imagem-incorreta2-${i + 1}" type="url" placeholder="URL da imagem 2" pattern="https?://.+" required>
            
            <input class="resposta-incorreta3-${i + 1}" type="text" placeholder="Resposta incorreta 3"/>
            <input class="url-imagem-incorreta3-${i + 1}" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required>
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
    <input onclick="avancarParaTelaDeNiveis()" class="botao-prosseguir-perguntas" value="Prosseguir para criar níveis">
    </div>
      `;
    openCollapsable();
}

//Variáveis e objeto das perguntas e respostas
let objetoQuestionsAnswers = {};

let perguntaTitulo1;
let corFundo1;
let respostaCorreta1;
let urlImagemRespostaCorreta1;
let respostaIncorreta1;
let urlImagemRespostaIncorreta1;

let perguntaTitulo2;
let corFundo2;
let respostaCorreta2;
let urlImagemRespostaCorreta2;
let respostaIncorreta2;
let urlImagemRespostaIncorreta2;

let perguntaTitulo3;
let corFundo3;
let respostaCorreta3;
let urlImagemRespostaCorreta3;
let respostaIncorreta3;
let urlImagemRespostaIncorreta3;

function validarPerguntas() {
    for (let i = 0; i < numPerguntas; i++) {

        perguntaTitulo1 = document.querySelector(`.pergunta-titulo-${i + 1}`).value;
        corFundo1 = document.querySelector(`.cor-de-fundo-${i + 1}`).value;
        respostaCorreta1 = document.querySelector(`.resposta-correta-${i + 1}`).value;
        urlImagemRespostaCorreta1 = document.querySelector(`.url-imagem-resposta-correta-${i + 1}`).value;
        respostaIncorreta1 = document.querySelector(`.resposta-incorreta1-${i + 1}`).value;
        urlImagemRespostaIncorreta1 = document.querySelector(`.url-imagem-incorreta1-${i + 1}`).value;

        perguntaTitulo2 = document.querySelector(`.pergunta-titulo-${i + 1}`).value;
        corFundo2 = document.querySelector(`.cor-de-fundo-${i + 1}`).value;
        respostaCorreta2 = document.querySelector(`.resposta-correta-${i + 1}`).value;
        urlImagemRespostaCorreta2 = document.querySelector(`.url-imagem-resposta-correta-${i + 1}`).value;
        respostaIncorreta2 = document.querySelector(`.resposta-incorreta2-${i + 1}`).value;
        urlImagemRespostaIncorreta2 = document.querySelector(`.url-imagem-incorreta2-${i + 1}`).value;

        perguntaTitulo3 = document.querySelector(`.pergunta-titulo-${i + 1}`).value;
        corFundo3 = document.querySelector(`.cor-de-fundo-${i + 1}`).value;
        respostaCorreta3 = document.querySelector(`.resposta-correta-${i + 1}`).value;
        urlImagemRespostaCorreta3 = document.querySelector(`.url-imagem-resposta-correta-${i + 1}`).value;
        respostaIncorreta3 = document.querySelector(`.resposta-incorreta3-${i + 1}`).value;
        urlImagemRespostaIncorreta3 = document.querySelector(`.url-imagem-incorreta3-${i + 1}`).value;
    }
    let todasPerguntas = [perguntaTitulo1, perguntaTitulo2, perguntaTitulo3];
    let todasRespostasCorretas = [respostaCorreta1, respostaCorreta2, respostaCorreta3];
    let URLS = [urlImagemRespostaCorreta1, urlImagemRespostaCorreta2, urlImagemRespostaCorreta3, urlImagemRespostaIncorreta1, urlImagemRespostaIncorreta2, urlImagemRespostaIncorreta3];
    let coresFundo = [corFundo1, corFundo2, corFundo3];

    let perguntaNaoVaziaTRUE;
    let respostaNaoVaziaTRUE;
    let perguntaCaracteresTRUE;
    let urlValidaTRUE;
    let corValidaTRUE;

    //testa se os textos das perguntas não estão vazios
    for (let i = 0; i < todasPerguntas.length; i++) {
    if (todasPerguntas[i] === '' ) {
        alert('Campos dos textos das perguntas não podem ficar vazios!');
        return;
    }
    else {
        perguntaNaoVaziaTRUE = true;

    }
  }

    //testa se os campos das respostas corretas não estão vazios
    for (let i = 0; i < todasRespostasCorretas.length; i++) {
    if (todasRespostasCorretas[i] === '' ) {
        alert('Campos das respostas corretas não podem ficar vazios!');
        return;
    }
    else {
        respostaNaoVaziaTRUE = true;
     }
    }

    // testa se os textos das perguntas têm menos de 20 caracteres
    for (let i = 0; i < todasPerguntas.length; i++) {
    if (todasPerguntas[i].length < 20) {
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
    for (let i = 0; i < coresFundo.length; i++) {
        if (!coresFundo[i].includes("#") || coresFundo[i].length !== 7 || coresFundo[i] === '') {
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
        postarPerguntasNaAPI();
    }
    else {
        alert("Deu ruim");
    }

    //objeto que será mandado pra API
    objetoQuestionsAnswers = {
        questions: [
            {
                title: perguntaTitulo1,
                color: corFundo1,
                answers: [
                    {
                        text: respostaCorreta1,
                        image: urlImagemRespostaCorreta1,
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaIncorreta1,
                        image: urlImagemRespostaIncorreta1,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: perguntaTitulo2,
                color: corFundo2,
                answers: [
                    {
                        text: respostaCorreta2,
                        image: urlImagemRespostaCorreta2,
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaIncorreta2,
                        image: urlImagemRespostaIncorreta2,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: perguntaTitulo3,
                color: corFundo3,
                answers: [
                    {
                        text: respostaCorreta3,
                        image: urlImagemRespostaCorreta3,
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaIncorreta3,
                        image: urlImagemRespostaIncorreta3,
                        isCorrectAnswer: false
                    }
                ]
            }
        ]
    }
}

//função para postar o objeto das perguntas e respostas criadas, será chamada pela função validarPerguntas() quando o formulário for digitado corretamente
function postarPerguntasNaAPI() {
    let promisse = axios.post(`${API}`, validarPerguntas());

    promisse.then((response) => {
        console.log(response.data);
    });

    promisse.catch((error) =>
        alert("Você não preencheu todos os campos para criar o objeto corretamente")
    );
}

//Função pro botão de prosseguir para a tela de níveis
function avancarParaTelaDeNiveis() {
    validarPerguntas();
}