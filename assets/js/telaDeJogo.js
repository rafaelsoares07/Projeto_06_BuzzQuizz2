console.log('dasdasdasdas')
let tituloAA;
let imagem;
let tamPerguntas;
let tamRespostas;
let elementoAA =''
let elementoFinal = ''

function callgetElementsByIdQuizzs(el){
    let body = document.querySelector('body')
    body.innerHTML =''
    getElementsByIdQuizzs(el);
}

function getElementsByIdQuizzs(el) {
  
  let urlGet = `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${el}`;
  let promisse = axios.get(urlGet);
  promisse
    .then((response) => {
      return response.data;
    })
    .then((response2) => {
      renderizarCabecalho(response2);
      renderizarContainerQuestions(response2);
    });
  }

function renderizarCabecalho(resp) {
  let container = document.querySelector("body");
  tituloAA = resp.title;
  imagem = resp.image;

  container.innerHTML = `
  <div class="header">
    <h1>BuzzQuizz</h1>
    </div>
  <div class="banner">
  <div class="gradient-banner"></div>
    <h1>${tituloAA}</h1>
    <img src="${imagem}">
  </div>`;
}

function renderizarContainerQuestions(resp) {
  let container = document.querySelector("body");

  tamPerguntas = resp.questions.length;

  for (let i = 0; i < tamPerguntas; i++) {
    tamRespostas = resp.questions[i].answers.length;

    for (let j = 0; j < tamRespostas; j++) {
        
        elementoAA+= `<div resultado="${resp.questions[i].answers[j].isCorrectAnswer}" class ="caixa-unitaria">
                    <img src="${resp.questions[i].answers[j].image}">
                    <h4>${resp.questions[i].answers[j].text}</h4>
                    </div>`
    }
    elementoFinal = 
    `<div style="border: 1px solid green;" class="caixa-pergunta">
    
    <h3 style="background-color:${resp.questions[i].color};">${resp.questions[i].title}</h3>
    <div class="caixa-flex">
    ${elementoAA}
    </div>

    </div>`

    container.innerHTML+= elementoFinal
    
    elementoAA=''
  }

  
}

