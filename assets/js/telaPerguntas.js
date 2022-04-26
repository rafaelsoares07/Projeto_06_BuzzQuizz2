
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

    //se as outtras variaveis do input tiverEM SEM NADA REDEZIRA UM ONBJETO COM APENAS AS 
    //ANSWERS QUE ESTAO PREENCHIDAS
    // (f 2)  (if 3) (if 4) e esse for debaixo diferente chamando a funcao callrenderizar niveis

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
            objURLRespostaIncorreta[i] = urlRespostaIncorreta[i].value;
    }
}
    
    let perguntaNaoVaziaTRUE;
    let respostaNaoVaziaTRUE;
    let perguntaCaracteresTRUE;
    let urlValida1TRUE;
    let urlValida2TRUE;
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
        if (objURLRespostaCorreta[i].includes("https://") || objURLRespostaCorreta[i].includes("http://")) {
            urlValida1TRUE = true;
        }
        else {
            alert('URLS inválidas');
            return;
        }
    }

    for (let i = 0; i < URLS.length; i++) {
        if (objURLRespostaIncorreta[i].includes("https://") || objURLRespostaIncorreta[i].includes("http://")) {
            urlValida2TRUE = true;
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
    if (perguntaNaoVaziaTRUE === true && perguntaCaracteresTRUE === true && respostaNaoVaziaTRUE === true && urlValida1TRUE === true && urlValida2TRUE === true && corValidaTRUE === true) {
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
    let promise = axios.post(`${API}`, objetoQuestionsAnswers);

    promise.then((response) => {
        console.log(response.data);
    });

    promise.catch((error) =>
        alert("Você não preencheu todos os campos para criar o objeto corretamente")
    );
}

//Função pro botão de prosseguir para a tela de níveis
function avancarParaTelaDeNiveis() {
    validarPerguntas();
}

*/


