function reload() {
    location.reload()
}

//Tela 3.1 do layout (informacoes basicas)
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
                 <input id="quantidadePerguntas" type="number" placeholder="Quantidade de perguntas do quizz" required min="3" value="7">
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

//Tela 3.3 do layout (niveis do quizz)
let tituloNivel = []
let porcentagemAcertos = []
let urlNivel = []
let descricaoNivel = []
let objetoLevels = []

function callRendezizarFormNivelQuizz() {
    let body = document.querySelector('body')
    body.innerHTML = ''
    body.innerHTML = renderizarFormNivelQuizz()
    openCollapsable()
}
function renderizarFormNivelQuizz() {
    let elemento = ''

    for (let i = 0; i < numNiveis; i++) {

        elemento = elemento + `
        <div class="container-niveis">
       
        <button style="color:black;" class = "btn-nivel collapsible"> Nível ${i + 1} 
        <ion-icon name="create-outline"></ion-icon>
        </button>
       
       
        <div class='content'>
        <input class="titulo-nivel" type="text" placeholder="Título do Nível" required minlength="10" value="aaaaaaaaaaa" >
        <input class="porcentagem-acertos" type="text" placeholder="% de acertos" required value="0">
        <input class="url-nivel" type="text" placeholder="URL da imagem do nível" required min="3" value="https://">
        <input class="descricao-nivel" type="text" placeholder="Descrição do nível" required min="2" value="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">  
        </div>

        </div>
        `;
  }

  return ` 
    <div class="form-create-quizz">
        <div class=form-infos-niveis>
            <div class="header">
                <h1>BuzzQuizz</h1>
            </div>
            <div class="form-niveis">
                 <p class="titulo-niveis">Agora decida os níveis!</p> 
                ${elemento}
                <button onclick="validaçãoFormNivelQuizz()">Finalizar Quizz</button>
            </div>
    </div>`;
}
function validaçãoFormNivelQuizz() {

    let tituloN = document.querySelectorAll('.titulo-nivel')
    for (let i = 0; i < numNiveis; i++) {
        tituloNivel[i] = tituloN[i].value
    }

    let percentage = document.querySelectorAll('.porcentagem-acertos')
    for (let i = 0; i < numNiveis; i++) {
        porcentagemAcertos[i] = Number(percentage[i].value)
    }

    let url = document.querySelectorAll('.url-nivel')
    for (let i = 0; i < numNiveis; i++) {
        urlNivel[i] = url[i].value
    }

    let description = document.querySelectorAll('.descricao-nivel')
    for (let i = 0; i < numNiveis; i++) {
        descricaoNivel[i] = description[i].value
    }

    //.every() -->
    //.includes --> 
    let tituloTrue = tituloNivel.every(element => element.length >= 10)
    let percentageTrue = porcentagemAcertos.includes(0) && porcentagemAcertos.every(element => element>=0 && element<=100)
    //porcentagemAcertos.every(element => element != undefined)
    let urlTrue = urlNivel.every(element => element.startsWith('https://'))
    let descriptionTrue = descricaoNivel.every(element => element.length >= 30)

    console.log(tituloTrue)
    console.log(percentageTrue)
    console.log(urlTrue)
    console.log(descriptionTrue)

    if (tituloTrue && percentageTrue && urlTrue && descriptionTrue) {
        for (let i = 0; i < numNiveis; i++) {
            objetoLevels[i] = {
                title: tituloNivel[i],
                image: urlNivel[i],
                text: descricaoNivel[i],
                minValue: porcentagemAcertos[i]
            }
        }
        console.log(objetoLevels)
        callRendezizarTelaSucesso()
    }
    else{
        alert(`
        Validações:\n 
        Precisar ter pelo menos um nível com 0% \n
        Os volores de porcentegem devem esta no intervalo (0% a 100%)\n
        Titulo precisa ter pelo menos 10 caracteres \n
        A descrição do nível precisa ter pelo menos 30 caracteres \n
        URL precisa ser de uma imagem válida no formato ( https:// )`)
    }

}


//Tela 3.4 do layout (sucesso da criação do quiz)
function callRendezizarTelaSucesso() {
    let body = document.querySelector('body')
    body.innerHTML = ''
    body.innerHTML = renderizarTelaSucesso()
}
function renderizarTelaSucesso() {
  return ` 
  <div class="form-create-quizz">
      <div class=form-infos-niveis>
          <div class="header">
              <h1>BuzzQuizz</h1>
          </div>
           <div class="form-niveis">
               <p class="titulo-niveis">Seu Quizz está pronto</p> 
               <div class="img-banner">
                  <img src="${urlBanner}" alt="">
                  <p class ="titulo-banner-sucesso"> ${titulo} </p>
              </div>
              <button onclick="validaçãoFormNivelQuizz()">Acessar Quizz</button>
              <h5 class="texto-voltar-home" onclick ="reload()">Voltar para Home</h5>
      </div>
  </div>`
}

//URL BASE para fazer post e get, podemos só ir concatenando que nem o professor
const API = "https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes"

//Pega lista de TODOS os quizzes da API
function getQuizzes() {
  let promisse = axios.get(`${API}`)

  promisse.then(response => {
      console.log(response.data)
  })

  promisse.catch(error => console.log(error))
}

//Pega um quizz de acordo com seu ID ÚNICO
function getQuizzForID() {
  let id = 1200
  let promisse = axios.get(`${API}/${id}`)

  promisse.then(response => {
      console.log(response.data)
  })

}

//Podemos usar essa função para construir o nosso objeto na hora da fazer o quizz
//Ela vai esta sendo chamada no post do "createQuizz", a partir dai a chama uma funcao de renderizar
//coloquei com prompts, mas a gente vai fazer com os valores dos inputs
function formatarObjetoQuizz() {

    const objeto = {
        title: titulo,
        image: urlBanner,
        questions: objetoQuestions,
        levels: objetoLevels
    }

    console.log(objeto);
    return objeto;
}

//Faz o post do objeto criado (quizz do usuário)
//Coloquei o objeto que tava lá no notion e está dando certo com ele, agora é so pegar as
//entradas do usuario e criar o nosso objeto

function createQuizz() {
  let promisse = axios.post(`${API}`, formatarObjetoQuizz())

  promisse.then(response => {

      console.log(response.data)
  })

  promisse.catch(error => alert('Você não preencheu todos os campos para criar o objeto corretamente'))
}


//getQuizzes()
//getQuizzForID()
//createQuizz()


let objetoQuestions = [];
//renderiza a pág 9 no figma - Tela de criação das perguntas do quizz
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
          <input class="pergunta-titulo" type="text" placeholder="Texto da pergunta"required minlength="20">
          <input class="cor-de-fundo" type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" required>
          
          <span class="subtitulo">Resposta Correta</span>
          <input class="resposta-correta" type="text" placeholder="Resposta correta" required/>
          <input class="url-imagem-resposta-correta" type="url" placeholder="URL da imagem" pattern="https?://.+" required>
          
          <span class="subtitulo">Respostas Incorretas</span>
          <inputclass="resposta-incorreta-1" type="text" placeholder="Resposta incorreta 1" required>
          <input class="url-imagem-incorreta-1" type="url" placeholder="URL da imagem 1" pattern="https?://.+" required>
          
          <input class="resposta-incorreta-2" type="text" placeholder="Resposta incorreta 2"/>
          <input class="url-imagem-incorreta-2" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required>
          
          <input class="resposta-incorreta-3" type="text" placeholder="Resposta incorreta 3"/>
          <input class="url-imagem-incorreta-3" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required>
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
  <input onclick="callRendezizarFormNivelQuizz()" class="botao-prosseguir-perguntas" type="submit" value="Prosseguir para criar níveis">
  </div>
    `;
    openCollapsable();
}
//Função para abrir o formulário de perguntas
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

//Função que verifica se a URL inserida é válida -> testar se o input não funcionar 

function isUrlValid(element) {
    let input = document.getElementById(".url-imagem");
    let verifica = input.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (verifica === null) {
        alert("URL invalida");
    }
}

/*Função que verifica se os números inseridos são hexadeciais de cor -> testar se o input não funcionar 
function isHexColor () {
    let cor = document.getElementById('cor-de-fundo');
    return typeof cor === 'string'
    && cor.length === 6
    && !isNaN(Number('0x' + cor))
} 
*/

function PostarPerguntasNaAPI() {
  let promisse = axios.post(`${API}`, formatarObjetoQuizz());

  promisse.then((response) => {
    console.log(response.data);
  });

  promisse.catch((error) =>
    alert("Você não preencheu todos os campos para criar o objeto corretamente")
  );
}

function validaçãoFormPerguntaQuizz() {
    let tituloPergunta = document.querySelectorAll(".pergunta-titulo");
    for (let i = 0; i < numPerguntas; i++) {
        tituloPergunta[i] = tituloPergunta[i].value;
    }
  
    let corDeFundo = document.querySelectorAll(".cor-de-fundo");
    for (let i = 0; i < numPerguntas; i++) {
      corDeFundo[i] = corDeFundo[i].value;
    }

    let respostaCorreta = document.querySelectorAll(".resposta-correta");
    for (let i = 0; i < numPerguntas; i++) {
      respostaCorreta[i] = respostaCorreta[i].value;
    }
  
    let urlImagemRespostaCorreta = document.querySelectorAll(".url-imagem-resposta-correta");
    for (let i = 0; i < numPerguntas; i++) {
        urlImagemRespostaCorreta[i] = urlImagemRespostaCorreta[i].value;
    }

    let respostaIncorreta1 = document.querySelectorAll(".resposta-incorreta-1");
    for (let i = 0; i < numPerguntas; i++) {
        respostaIncorreta1[i] = respostaIncorreta1[i].value;
    }

    let urlImagemRespostaIncorreta1 = document.querySelectorAll(".url-imagem-incorreta-1");
    for (let i = 0; i < numPerguntas; i++) {
        urlImagemRespostaIncorreta1[i] = urlImagemRespostaIncorreta1[i].value;
    }

    let respostaIncorreta2 = document.querySelectorAll(".resposta-incorreta-2");
    for (let i = 0; i < numPerguntas; i++) {
        respostaIncorreta2[i] = respostaIncorreta2[i].value;
    }

    let urlImagemRespostaIncorreta2 = document.querySelectorAll(".url-imagem-incorreta-2");
    for (let i = 0; i < numPerguntas; i++) {
        urlImagemRespostaIncorreta2[i] = urlImagemRespostaIncorreta2[i].value;
    }

    let respostaIncorreta3 = document.querySelectorAll(".resposta-incorreta-3");
    for (let i = 0; i < numPerguntas; i++) {
        respostaIncorreta3[i] = respostaIncorreta3[i].value;
    }

    let urlImagemRespostaIncorreta3 = document.querySelectorAll(".url-imagem-incorreta-3");
    for (let i = 0; i < numPerguntas; i++) {
        urlImagemRespostaIncorreta3[i] = urlImagemRespostaIncorreta3[i].value;
    }

    for (let i = 0; i < numPerguntas; i++) {
      objetoQuestions[i] = {

              title: tituloPergunta[i],
              color: corDeFundo[i],
              answers: [
                {
                  text: respostaCorreta[i],
                  image: urlImagemRespostaCorreta[i],
                  isCorrectAnswer: true
                },
                {
                  text:  respostaIncorreta1[i],
                  image: urlImagemRespostaIncorreta1[i],
                  isCorrectAnswer: false
                }
              ]
            },
            {
              title: tituloPergunta[i],
              color: corDeFundo[i],
              answers: [
                {
                  text: respostaCorreta[i],
                  image: urlImagemRespostaCorreta[i],
                  isCorrectAnswer: true
                },
                {
                  text:  respostaIncorreta1[i],
                  image: urlImagemRespostaIncorreta1[i],
                  isCorrectAnswer: false
                }
              ]
            },
            {
              title: tituloPergunta[i],
              color: corDeFundo[i],
              answers: [
                {
                  ttext: respostaCorreta[i],
                  image: urlImagemRespostaCorreta[i],
                  isCorrectAnswer: true
                },
                {
                  text:  respostaIncorreta1[i],
                  image: urlImagemRespostaIncorreta1[i],
                  isCorrectAnswer: false
                }
              ]
            }
    }
    console.log(objetoQuestions);
    formatarObjetoQuizz();
  }
  
 