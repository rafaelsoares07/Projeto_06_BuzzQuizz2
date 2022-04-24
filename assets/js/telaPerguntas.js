
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
            <input class="pergunta-titulo" type="text" placeholder="Texto da pergunta"required minlength="20" value="titulo da perguntaaa">
            <input class="cor-de-fundo" type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" required value="#123456">
            
            <span class="subtitulo">Resposta Correta</span>
            <input class="resposta-correta" type="text" placeholder="Resposta correta" required/ value="Texto da resposta 1">
            <input class="url-imagem-resposta-correta" type="url" placeholder="URL da imagem" pattern="https?://.+" required value="https://http.cat/411.jpg"> 
            
            <span class="subtitulo">Respostas Incorretas</span>
            <input class="resposta-incorreta-1" type="text" placeholder="Resposta incorreta 1" required value="Texto da resposta 1">
            <input class="url-imagem-incorreta-1" type="url" placeholder="URL da imagem 1" pattern="https?://.+" required value ="https://http.cat/411.jpg">
            
            <input class="resposta-incorreta-2" type="text" placeholder="Resposta incorreta 2" value="Texto da resposta 1" />
            <input class="url-imagem-incorreta-2" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required value ="https://http.cat/411.jpg">
            
            <input class="resposta-incorreta-3" type="text" placeholder="Resposta incorreta 3" value="Texto da resposta 1"/>
            <input class="url-imagem-incorreta-3" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required value="https://http.cat/411.jpg">
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
    <input onclick="validaçãoFormPerguntaQuizz()" class="botao-prosseguir-perguntas" type="submit" value="Prosseguir para criar níveis">
    </div>
      `;
  }

let objetoQuestions = []
let tituloDaPergunta =[]
let colorDaPergunda = []
let respCorreta =[]
let urlRespCorreta =[]
let respIncorreta1 = []
let urlRespIncorreta1 = []
let respIncorreta2 = []
let urlRespIncorreta2 = []
let respIncorreta3 = []
let urlRespIncorreta3 = []

function validaçãoFormPerguntaQuizz() {
    let tituloPergunta = document.querySelectorAll(".pergunta-titulo");
    for (let i = 0; i < numPerguntas; i++) {
        tituloDaPergunta[i] = tituloPergunta[i].value;
    }
  
    let corDeFundo = document.querySelectorAll(".cor-de-fundo");
    for (let i = 0; i < numPerguntas; i++) {
      colorDaPergunda[i]= corDeFundo[i].value;
    }

    let respostaCorreta = document.querySelectorAll(".resposta-correta");
    for (let i = 0; i < numPerguntas; i++) {
      respCorreta[i] = respostaCorreta[i].value;
    }
  
    let urlImagemRespostaCorreta = document.querySelectorAll(".url-imagem-resposta-correta");
    for (let i = 0; i < numPerguntas; i++) {
        urlRespCorreta[i] = urlImagemRespostaCorreta[i].value;
    }

    let respostaIncorreta1 = document.querySelectorAll(".resposta-incorreta-1");
    for (let i = 0; i < numPerguntas; i++) {
        respIncorreta1[i] = respostaIncorreta1[i].value;
    }

    let urlImagemRespostaIncorreta1 = document.querySelectorAll(".url-imagem-incorreta-1");
    for (let i = 0; i < numPerguntas; i++) {
        urlRespIncorreta1[i] = urlImagemRespostaIncorreta1[i].value;
    }

    let respostaIncorreta2 = document.querySelectorAll(".resposta-incorreta-2");
    for (let i = 0; i < numPerguntas; i++) {
        respIncorreta2[i] = respostaIncorreta2[i].value;
    }

    let urlImagemRespostaIncorreta2 = document.querySelectorAll(".url-imagem-incorreta-2");
    for (let i = 0; i < numPerguntas; i++) {
        urlRespIncorreta2[i] = urlImagemRespostaIncorreta2[i].value;
    }

    let respostaIncorreta3 = document.querySelectorAll(".resposta-incorreta-3");
    for (let i = 0; i < numPerguntas; i++) {
        respIncorreta3[i] = respostaIncorreta3[i].value;
    }

    let urlImagemRespostaIncorreta3 = document.querySelectorAll(".url-imagem-incorreta-3");
    for (let i = 0; i < numPerguntas; i++) {
        urlRespIncorreta3[i] = urlImagemRespostaIncorreta3[i].value;
    }

    

    for (let i = 0; i < numPerguntas; i++) {
      objetoQuestions[i] = {
        title:tituloDaPergunta[i],
        color:colorDaPergunda[i],
        answers:[
          {
            text:respCorreta[i],
            image:urlRespCorreta[i],
            isCorrectAnswer: true
          },
          {
            text:respIncorreta1[i],
            image:urlRespIncorreta1[i],
            isCorrectAnswer:false
          }
        ]

      }
    }
    
    callRendezizarFormNivelQuizz()
  }


/*
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

*/


