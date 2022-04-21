//Variaveis Globais 
let titulo
let numPerguntas
let numNiveis
let urlBanner

//Eventos
//EVENTOS DE CLICK

function openForm(){
    document.querySelector('.form-create-quizz').style.display = 'block'
}


function validaçãoFormInfosBasicas(){
    
    numPerguntas = document.querySelector('#quantidadePerguntas').value 
    numNiveis = document.querySelector('#quantidadeNiveis').value 
    titulo = document.querySelector('#titulo-quizz').value
    
    let numPerguntasTrue = numPerguntas>=3
    let numNiveisTrue = numNiveis>=2
    let tituloTrue = titulo.length >=20
    
    //console.log(tituloTrue)
    //console.log(numPerguntasTrue)
    //console.log(numNiveisTrue)
    
    if(numNiveisTrue&& numPerguntasTrue && tituloTrue){
        
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
        title: prompt('titulo'),
        image: prompt('imagem banner'),
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
        levels: [
            {
                title: prompt('level'),
                image: prompt('image'),
                text: prompt('descricao'),
                minValue: 0
            },
            {
                title: prompt('level'),
                image: prompt('image'),
                text: prompt('descricao'),
                minValue: 50
            }
        ]
    }
    
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

//renderiza a pág 9 no figma - Tela de criação das perguntas do quizz  
function renderQuestionsPage() {
    const questionsPage = document.querySelector(".create-questions-page");
    questionsPage.innerHTML += `
    <p class="titulo-perguntas">Crie suas perguntas</p>
    <div class="perguntas-container">
  <button class="collapsible">Pergunta 1<ion-icon name="create-outline"></ion-icon></button>
  <div class="content">
  
  <form>
          <input id="pergunta" type="text" placeholder="Texto da página" required minlength="20"/>
          <input id="cor-de-fundo" type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" required/>
          
          <span class="subtitulo">Resposta Correta</span>
          <input id="resposta-correta" type="text" placeholder="Resposta correta" required/>
          <input id="url-imagem-resposta" type="url" placeholder="URL da imagem" pattern="https?://.+" required />
          
          <span class="subtitulo">Respostas Incorretas</span>
          <input
          id="resposta-incorreta-1" type="text" placeholder="Resposta incorreta 1" required />
          <input id="url-imagem-1" type="url" placeholder="URL da imagem 1" pattern="https?://.+" required />
          
          <input id="resposta-incorreta-2" type="text" placeholder="Resposta incorreta 2"/>
          <input id="url-imagem-2" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required />
          
          <input id="resposta-incorreta-3" type="text" placeholder="Resposta incorreta 3"/>
          <input id="url-imagem-3" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required />
  </form>
  </div>
  
  <div class="perguntas-container">
  <button class="collapsible">Pergunta 2<ion-icon name="create-outline"></ion-icon></button>
  <div class="content">
  
  <form>
          <input id="pergunta" type="text" placeholder="Texto da página" required minlength="20"/>
          <input id="cor-de-fundo" type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" required/>
          
          <span class="subtitulo">Resposta Correta</span>
          <input id="resposta-correta" type="text" placeholder="Resposta correta" required/>
          <input id="url-imagem-resposta" type="url" placeholder="URL da imagem" pattern="https?://.+" required />
          
          <span class="subtitulo">Respostas Incorretas</span>
          <input
          id="resposta-incorreta-1" type="text" placeholder="Resposta incorreta 1" required />
          <input id="url-imagem-1" type="url" placeholder="URL da imagem 1" pattern="https?://.+" required />
          
          <input id="resposta-incorreta-2" type="text" placeholder="Resposta incorreta 2"/>
          <input id="url-imagem-2" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required />
          
          <input id="resposta-incorreta-3" type="text" placeholder="Resposta incorreta 3"/>
          <input id="url-imagem-3" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required />
  </form>
  </div>
  
  <div class="perguntas-container">
  <button class="collapsible">Pergunta 3<ion-icon name="create-outline"></ion-icon></button>
  <div class="content">
  
  <form>
          <input id="pergunta" type="text" placeholder="Texto da página" required minlength="20"/>
          <input id="cor-de-fundo" type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" required/>
          
          <span class="subtitulo">Resposta Correta</span>
          <input id="resposta-correta" type="text" placeholder="Resposta correta" required/>
          <input id="url-imagem-resposta" type="url" placeholder="URL da imagem" pattern="https?://.+" required />
          
          <span class="subtitulo">Respostas Incorretas</span>
          <input
          id="resposta-incorreta-1" type="text" placeholder="Resposta incorreta 1" required />
          <input id="url-imagem-1" type="url" placeholder="URL da imagem 1" pattern="https?://.+" required />
          
          <input id="resposta-incorreta-2" type="text" placeholder="Resposta incorreta 2"/>
          <input id="url-imagem-2" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required />
          
          <input id="resposta-incorreta-3" type="text" placeholder="Resposta incorreta 3"/>
          <input id="url-imagem-3" type="url" placeholder="URL da imagem 3" pattern="https?://.+" required />
  </form>
  </div>

  <form><input class="botao-prosseguir-perguntas" type="submit" value="Prosseguir para criar níveis"></form>
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
