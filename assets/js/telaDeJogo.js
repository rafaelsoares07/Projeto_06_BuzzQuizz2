console.log('dasdasdasdas')
let tituloAA;
let imagem;
let tamPerguntas;
let tamRespostas;
let elementoAA =''
let elementoFinal = ''

function callgetElementsByIdQuizzs(){
    let body = document.querySelector('body')
    body.innerHTML =''
    
    getElementsByIdQuizzs()
}





function getElementsByIdQuizzs() {
  let urlGet = `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/1068`;
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
    <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/07/ilha-grande-rio-de-janeiro-capa2019-01.jpg">
  </div>`;
}

function renderizarContainerQuestions(resp) {
  let container = document.querySelector("body");

  tamPerguntas = resp.questions.length;

  for (let i = 0; i < tamPerguntas; i++) {
    tamRespostas = resp.questions[i].answers.length;

    for (let j = 0; j < tamRespostas; j++) {
        
        elementoAA+= `<h3>${resp.questions[i].title}</h3>
                    <h4>${resp.questions[i].answers[j].text}</h4>
                    <img src="${resp.questions[i].answers[j].image}">
                    <h6>${resp.questions[i].answers[j].isCorrectAnswer}</h6>`
    }
    elementoFinal = `<div style="border: 1px solid green;" class="caixa-pergunta">${elementoAA}</div>`
    container.innerHTML+= elementoFinal
    
    elementoAA=''
  }

  
}

