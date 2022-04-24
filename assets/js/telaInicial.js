/*console.log('carregou telainicialjs');

import { API } from '/assets/js/script.js';
import {titulo} from '/assets/js/script.js';
import {urlBanner} from '/assets/js/script.js';

//Tela home
let objetoId = [];
let objetoPegaTodosQuizzes = [];
let idQuizzUsuario = [];
let todosIDs;

//função pra pegar os ids da API
function getTodosIDs(){

    const promise = axios.get(`${API}`);
    promise.then(pegaIDs);
    promise.catch(console.log("não conseguiu pegar as ids"));

    function pegaIDs(response){
        for (i = 0; i < response.data.length; i++){
            todosIDs = response.data[i].id;
        }
    }
}
getTodosIDs();

//essa função pega todos os quizes
function getTodosQuizzes() {
    const promise = axios.get(`${API}`);
    promise.then(pegaTdQuizz);
    promise.catch(console.log("não conseguiu pegar os quizzes"));

    function pegaTdQuizz(response) {
     return response.data;
    }
}
//renderiza todos os quizzes no html
function renderTodosQuizzes(){
    const renderTdsQuizzes = document.querySelector(".all-quizzes");
    renderTdsQuizzes.innerHTML = '';
    renderTdsQuizzes.innerHTML +=
    `
    <h3>Todos os quizzes</h3>
       <ul class="quizz-container">
   
       for (let i = 0; i < todosIDs.length; i++) {       
           <li class="quizz"><span>(${[titulo]})</span><img src="(${urlBanner})" alt="quizz img" />
               </li>
       </ul>
       }
    `
   }
   getTodosQuizzes();

//essa função vai checar se tem quizz do usuario armazenado no local storage.
//se não tiver então vai renderizar aquela área com borda pontilhada.
//se tiver vai chamar a função de renderizar os quizzes que o usuario fez 
function callTelaInicial() {
    if (idQuizzUsuario.length === 0) {
        const telaInicial = document.querySelector(".main-page");
        telaInicial.innerHTML = renderTelaInicialSemQuizzUsuario();
    }
    else {
        renderTelaInicialComQuizzUsuario();
    }
}
//renderiza aquela área pontilhada com o botão para criar o quizz quando o usuário não criou nenhum ainda
function renderTelaInicialSemQuizzUsuario() {
    const renderSemQuizz = document.querySelector(".main-page");
    renderSemQuizz.innerHTML = "";
    renderSemQuizz.innerHTML +=
        `
            <div class="create-quizz-container"> 
                    <h2>Você não criou nenhum quizz ainda :(</h2>
                    <div class="create-quizz-button">
                            <p onclick="callRenderizarFormsInfosBasicas()">Criar Quizz</p>
                    </div>
            </div>
        `
}
//renderiza os quizzes do usuário com o botão de + para criar quizz
function renderTelaInicialComQuizzUsuario() {
    const renderComQuizz = document.querySelector(".main-page");
    
    renderComQuizz.innerHTML +=
        `
        <div class="your-quizzes"> 
        <span class="your-quizzes-title">
        <h3>Seus Quizzes</h3>
        <ion-icon name="add-circle"></ion-icon>
        </span>

        <ul class="quizz-container">

            for (let i = 0; i < idQuizzUsuario.length; i++) {  
            <li class="quizz">
            <span>(${titulo})</span>
            <img src="(${urlBanner})" alt="quizz img" />
             </li>                   
            }               
        </ul>
        </div>
    `
}
callTelaInicial(); */
