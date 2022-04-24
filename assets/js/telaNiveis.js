function reload() {
    location.reload()
}


let objeto = {}
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
        objeto = {
            title: titulo,
            image: urlBanner,
            questions: objetoQuestions,
            levels: objetoLevels
        }
        console.log(objeto)
        enviarQuizz()
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

function enviarQuizz() {
    let promisse = axios.post(`${API}`, objeto)
  
    promisse.then(response => {
        console.log(response.data)
        salvarDadosLocalmente(response)
        
    })
  
    promisse.catch(error => alert('Você não preencheu todos os campos para criar o objeto corretamente'))
}



//LOGÍCA DO LOCALSTORAGE
let arrayArmazenado = localStorage.getItem('ids')
let arrayIds = JSON.parse(arrayArmazenado)

let arrayArmazenadoKey = localStorage.getItem('key')
let arrayKeys = JSON.parse(arrayArmazenadoKey)

if(arrayArmazenado==null && arrayArmazenadoKey==null && arrayIds ==null && arrayKeys==null){
    arrayArmazenado=[]
    arrayIds =[]
    arrayArmazenadoKey=[]
    arrayKeys = []
    console.log('TUDO ZERADO')
}

function salvarDadosLocalmente(respostaAPI){
    {let dadosId = respostaAPI.data.id
    arrayIds.push(dadosId)
    arrayIdsString = JSON.stringify(arrayIds)
    localStorage.setItem('ids',arrayIdsString) 
    }

    {let dadosKey = respostaAPI.data.key
    arrayKeys.push(dadosKey)
    arrayKeysString = JSON.stringify(arrayKeys)
    localStorage.setItem('key',arrayKeysString) 
    }

}

//PARA ACESSAR OS IDS E URL BASTA USAR AS VARIAVEIS arrayIds e arrayKeys
