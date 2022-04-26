function comparador() {
  return Math.random() - 0.5;
}
let contadorDeAcertos = 0
let contadorTotal = 0
let tituloAA;
let imagem;
let tamPerguntas;
let tamRespostas;
let elementoAA = ''
let elementoFinal = ''
let objetoAtual;

function callgetElementsByIdQuizzs(el) {
  let body = document.querySelector('body')
  body.innerHTML = ''
  getElementsByIdQuizzs(el);
}

function getElementsByIdQuizzs(el) {

  let urlGet = `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${el}`;
  let promisse = axios.get(urlGet);
  promisse
    .then((response) => {
      objetoAtual = response.data
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

    resp.questions[i].answers.sort(comparador)//misturar posicao de falso e verdadeiro

    for (let j = 0; j < tamRespostas; j++) {

      elementoAA += `
        <div resultado="${resp.questions[i].answers[j].isCorrectAnswer}" class ="caixa-unitaria" onclick="selectResposta(this)">
          <img src="${resp.questions[i].answers[j].image}">
          <h4>${resp.questions[i].answers[j].text}</h4>
        </div>`
    }

    elementoFinal =
      `<div class="caixa-pergunta">
      <h3 style="background-color:${resp.questions[i].color};">
      ${resp.questions[i].title}
      </h3>
      <div class="caixa-flex">
        ${elementoAA}
      </div>
    </div>`

    container.innerHTML += elementoFinal

    elementoAA = ''
  }

}

function selectResposta(element) {

  //Não deixa clicar mais de uma vez nos elementos que já foram expostos
  if (element.classList.contains('resposta-certa') || element.classList.contains('resposta-errada')) {
    return
  }

  //Guarda a quantidades de acertos e a quantidade de tentativas
  if (element.getAttribute('resultado') === 'true') {
    contadorDeAcertos++;
    contadorTotal++
  } else {
    contadorTotal++
  }


  const cjPerguntas = element.parentNode;
  const clicou = cjPerguntas.querySelector(".resposta-ja-clicada");
  if (clicou === null) {
    const cjRespostas = cjPerguntas.children;
    for (let i = 0; i < cjRespostas.length; i++) {

      cjRespostas[i].classList.add('resposta-ja-clicada');
      let gabarito = cjRespostas[i].getAttribute('resultado');

      if (gabarito === "true") {
        cjRespostas[i].classList.add('resposta-certa')

      } else {
        cjRespostas[i].classList.add('resposta-errada')

      }
    }
  }
  element.classList.remove("resposta-ja-clicada");


  verificarGameOver()
}


function verificarGameOver() {
  if (document.querySelectorAll('.resposta-certa').length == tamPerguntas) {
    //renderizar a tela dos nivel do usuario naquele quizz

    let porcentagem = Math.round((contadorDeAcertos / contadorTotal) * 100)
    let distancia = 100
    let resulNivel;

  

    for (let i = 0; i < objetoAtual.levels.length; i++) {
  

      if (Math.abs(porcentagem - objetoAtual.levels[i].minValue) < distancia) {

        console.log('ta indo')
        resulNivel = objetoAtual.levels[i]

        distancia = Math.abs(porcentagem - objetoAtual.levels[i].minValue)
        console.log(distancia)
      }

    }

    let tituloNivel = resulNivel.title
    let urlImageNivel = resulNivel.image
    let descricaoNivel = resulNivel.text

    console.log(resulNivel)
    console.log(tituloNivel)

    let container = document.querySelector("body");
    container.innerHTML +=
    `<div class ="resultado-nivel-user">
      <h3>Você acertou ${porcentagem}% : ${tituloNivel}</h3>
      <div class='caixa-resultado-nivel'>
        <img src="${urlImageNivel}" >
        <p>${descricaoNivel}</p>
      </div>

      <div class="comandos-tela-niveis">
        <button onclick="reiniciar()">Reinciar</button>
        <a onclick="reload()">Voltar para menu</a>
      </div>

    </div>`


    setTimeout(()=>{
      window.scrollTo(0, document.body.scrollHeight)
    },2000)
    
  }
}


function reiniciar(){
  setTimeout(()=>{
    window.scrollTo(document.body.scrollHeight,0)
  },2000)

  document.querySelector('.resultado-nivel-user').remove()
  
  document.querySelectorAll(".resposta-errada").forEach((el)=>{
    el.classList.remove('resposta-errada')
  })

  document.querySelectorAll(".resposta-certa").forEach((el)=>{
    el.classList.remove('resposta-certa')
  })

  document.querySelectorAll(".resposta-ja-clicada").forEach((el)=>{
    el.classList.remove('resposta-ja-clicada')
  })

 

  contadorDeAcertos =0;
  contadorTotal =0;

}