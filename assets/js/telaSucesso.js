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