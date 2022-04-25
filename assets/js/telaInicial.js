let title = [];
let url = [];
let ids = [];
let elemento =''


//pega todos os quizz da API
function getQuizz(){
    let promisse = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
    promisse.then(response=>{
       for(let i=0 ; i<response.data.length;i++){
           title[i]=response.data[i].title;
           url[i]=response.data[i].image;
           ids[i]=response.data[i].id;
       }
       callTelaInicial();
    })
}
getQuizz();

function getElementsByIdQuizzs(){
    
    for(let i =0; i<arrayIds.length;i++){
        let urlGet = `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${arrayIds[i]}`
        let promisse = axios.get(urlGet)
        promisse.then(response=>{
            
            elemento+= ` 
            <li class="quizz" onclick="callgetElementsByIdQuizzs('${response.data.id}')">
                <img src="${response.data.image}">
                <div class="gradient"></div>
                <span class="titulo-quizz">${response.data.title}</span>
            </li>`   
        })
        
    }
    
}

getElementsByIdQuizzs()


//essa função vai checar se tem quizz do usuario armazenado no local storage.
//se não tiver então vai renderizar aquela área com borda pontilhada.
//se tiver vai chamar a função de renderizar os quizzes que o usuario fez 
function callTelaInicial() {
    if (arrayIds.length === 0) {
        renderTelaInicialSemQuizzUsuario();
        callRenderTodosQuizzes();
    }
    else {
        callRenderTelaInicialComQuizzUsuario();
        callRenderTodosQuizzes();
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
//renderiza os quizzes do usuário com o botão de + para criar quizz (não sei como puxar os do usuário em específico)
function callRenderTelaInicialComQuizzUsuario(){
    setTimeout(()=>{
        const renderComQuizz = document.querySelector(".quizz-usuario-container");
        renderComQuizz.innerHTML= '';
        renderComQuizz.innerHTML = renderTelaInicialComQuizzUsuario();
    },500)
    
}

function renderTelaInicialComQuizzUsuario() {

        return `
        <span class="your-quizzes-title"><h3>Seus Quizzes</h3><ion-icon name="add-circle" onclick="callRenderizarFormsInfosBasicas()"></ion-icon></span>
        <div class="your-quizzes"> 
        ${elemento}<div/>
        `;             
    }
                    





//renderiza todos os quizzes da API no html
function callRenderTodosQuizzes(){
    const renderTdsQuizzes = document.querySelector(".quizz-container");
    renderTdsQuizzes.innerHTML= '';
    renderTdsQuizzes.innerHTML = renderTodosQuizzes();
}
function renderTodosQuizzes(){
    let element = '';
    let i = 0;
    while (i < url.length){
        element += `    
        <li class="quizz" onclick="callgetElementsByIdQuizzs('${ids[i]}')">
        <img src="${url[i]}">
        <div class="gradient"></div>;
        <span class="titulo-quizz">${title[i]}</span>
            </li>
            `;
    i++;
    
    }
    
    return `${element}`;
   }


