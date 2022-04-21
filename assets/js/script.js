//Tela 3.1 do layout (informacoes basicas)
let titulo
let numPerguntas
let numNiveis
let urlBanner

function callRenderizarFormsInfosBasicas(){
    let body = document.querySelector('body')
    body.innerHTML= ''
    body.innerHTML = renderizarFormInfosBasicas()
    
}
function renderizarFormInfosBasicas(){
    return ` 
    <div class="form-create-quizz">
        <div class=infos-basicas>
            <div class="header">
                <h1>BuzzQuizz</h1>
            </div>
            <div class="form-infos-basicas">
                 <p class="titulo">Comece pelo começo</p> 
                 <input id="titulo-quizz" type="text" placeholder="Título do seu quizz" required minlength="20" maxlength="65" value="jajajajajajajajajajajajajajajajajajaj">
                 <input id="url-image-principal" type="text" placeholder="URl da imagem do seu quizz" required value="kdoaksodk">
                 <input id="quantidadePerguntas" type="number" placeholder="Quantidade de perguntas do quizz" required min="3" value="7">
                 <input id="quantidadeNiveis" type="number" placeholder="Quantidade de níveis do quizz" required min="2" value="12">  
                 <button onclick="validaçãoFormInfosBasicas()">Prosseguir para criar perguntas</button>    
            </div>
    </div>`
}

function validaçãoFormInfosBasicas(){
    
    numPerguntas = document.querySelector('#quantidadePerguntas').value 
    numNiveis = document.querySelector('#quantidadeNiveis').value 
    titulo = document.querySelector('#titulo-quizz').value
    urlBanner = document.querySelector('#url-image-principal').value
    
    let numPerguntasTrue = numPerguntas>=3
    let numNiveisTrue = numNiveis>=2
    let tituloTrue = titulo.length >=20


    //console.log(tituloTrue)
    //console.log(numPerguntasTrue)
    console.log(urlBanner)
    
    if(numNiveisTrue&& numPerguntasTrue && tituloTrue){
            console.log('chamou')
            callRendezizarFormNivelQuizz()
       }

    else{
        alert(`
        Validações:\n
        Minimo de perguntas = 3 \n 
        Minimo de Niveis = 2\n
        Titulo precisa ter pelo menos 20 caracteres \n
        URL precisa ser de uma imagem valida`)
    }
    
    

}


//Tela 3.3 do layout (niveis do quizz)
let tituloNivel = []
let porcentagemAcertos= []
let urlNivel = []
let descricaoNivel =[]
let objetoLevels = []

function callRendezizarFormNivelQuizz(){
    let body = document.querySelector('body')
    body.innerHTML= ''
    body.innerHTML = renderizarFormNivelQuizz()
}
function renderizarFormNivelQuizz(){
    let elemento =''

    for(let i=0; i<numNiveis; i++){
        
        elemento= elemento+`
        <div class="container-niveis">
        <label> Nivel ${i+1}</label>
        <div class='caixa-nivel' onclick="visualizar(this)">
        <input class="titulo-nivel" type="text" placeholder="Título do Nível" required minlength="10" >
        <input class="porcentagem-acertos" type="text" placeholder="% de acertos" required>
        <input class="url-nivel" type="text" placeholder="URL da imagem do nível" required min="3">
        <input class="descricao-nivel" type="text" placeholder="Descrição do nível" required min="2">  
        </div>
        </div>
        `
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
    </div>`
}
function validaçãoFormNivelQuizz(){

    let tituloN= document.querySelectorAll('.titulo-nivel')
    for(let i= 0; i<numNiveis ; i++){
        tituloNivel[i]= tituloN[i].value
    }
    
    let percentage = document.querySelectorAll('.porcentagem-acertos')
    for(let i= 0; i<numNiveis ; i++){
        porcentagemAcertos[i]= percentage[i].value
    }

    let url = document.querySelectorAll('.url-nivel')
    for(let i= 0; i<numNiveis ; i++){
        urlNivel[i]= url[i].value
    }

    let description = document.querySelectorAll('.descricao-nivel')
    for(let i= 0; i<numNiveis ; i++){
        descricaoNivel[i]= description[i].value
    }

   for(let i=0 ; i<numNiveis; i++){
    objetoLevels[i] = {
        title:tituloNivel[i],
        image:urlNivel[i],
        text:descricaoNivel[i],
        minValue: porcentagemAcertos
    }
   }
    
   formatarObjetoQuizz()
    
}













//URL BASE para fazer post e get, podemos só ir concatenando que nem o professor
//const API = "https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes"


//Pega lista de TODOS os quizzes da API
function getQuizzes(){
    let promisse = axios.get(`${API}`)

    promisse.then(response =>{
        console.log(response.data)
    })

    promisse.catch(error => console.log(error))
}


//Pega um quizz de acordo com seu ID ÚNICO
function getQuizzForID(){
    let id = 1200
    let promisse = axios.get(`${API}/${id}`)

    promisse.then(response =>{
        console.log(response.data)
    })

}



//Podemos usar essa função para construir o nosso objeto na hora da fazer o quizz
//Ela vai esta sendo chamada no post do "createQuizz", a partir dai a chama uma funcao de renderizar 
//coloquei com prompts, mas a gente vai fazer com os valores dos inputs
function formatarObjetoQuizz(){
    
    const objeto = {
        title: titulo,
        image: urlBanner,
        questions: [
            {
                title: prompt('pergunta 1'),
                color: "#123456",
                answers: [
                    {
                        text: prompt('texto resposta 1'),
                        image: prompt('imagem'),
                        isCorrectAnswer: true
                    },
                    {
                        text: prompt('texto responda 2'),
                        image: prompt('imagem'),
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: prompt('titulo perg 2'),
                color: "#123456",
                answers: [
                    {
                        text: prompt('textoresposta 2'),
                        image: prompt('image'),
                        isCorrectAnswer: true
                    },
                    {
                        text:  prompt('textoresposta 2'),
                        image: prompt('image'),
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: prompt('pergunta 3'),
                color: "#123456",
                answers: [
                    {
                        text: prompt('resposta'),
                        image: prompt('image'),
                        isCorrectAnswer: true
                    },
                    {
                        text: prompt('resposta 3'),
                        image: prompt('image'),
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: objetoLevels
    }

    console.log(objeto)
    return objeto
}



//Faz o post do objeto criado (quizz do usuário)
//Coloquei o objeto que tava lá no notion e está dando certo com ele, agora é so pegar as 
//entradas do usuario e criar o nosso objeto
function createQuizz(){
    let promisse = axios.post(`${API}`,formatarObjetoQuizz()) 

    promisse.then(response =>{
        
        console.log(response.data)
    })

    promisse.catch(error => alert('Você não preencheu todos os campos para criar o objeto corretamente'))
}



//getQuizzes()
//getQuizzForID()
//createQuizz()

