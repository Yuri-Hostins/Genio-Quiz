// Selecionando todos os elementos necessários
const botaoComecarMulti = document.querySelector(".botao-multiplayer button");
const caixaInformacaoMulti = document.querySelector(".caixa-informacao-multi");
const caixaNomesMulti = document.querySelector(".caixa-nomes-multi");
const botaoSairMulti = caixaInformacaoMulti.querySelector(".botoes-multi .sair-multi");
const botaoContinuarMulti = caixaInformacaoMulti.querySelector(".botoes-multi .reiniciar-multi");
const caixaQuizMulti = document.querySelector(".caixa-quiz-multi");
const caixaResultadoMulti = document.querySelector(".caixa-resultado-multi");
const listaOpcaoMulti = document.querySelector(".lista-opcao-multi");
const linhaTempoMulti = document.querySelector("header .linha-tempo-multi");
const textoTempoMulti = document.querySelector(".tempo-multi .texto-esquerdo-tempo-multi");
const contagemTempoMulti = document.querySelector(".tempo-multi .tempo-segundo-multi");


// criando um array e passando o número, perguntas, opções e respostas
let perguntasMulti = [
  { 
    pergunta: "Qual é o instrumento musical tradicional mais popular da África?",
    alternativaCerta: "Tambores",
    opcoes: [
      "Djembe",
      "Tambores",
      "Kalimba",
      "Violão",
    ],
  },
  {
    pergunta: 'Qual é o significado simbólico das máscaras africanas?',
    alternativaCerta: "Proteção contra espíritos malignos",
    opcoes: [
      "Proteção contra espíritos malignos",
      "Status social do usuário",
      "Expressão de emoções humanas",
      "Representação de animais sagrados",
    ],
  },
  {
    pergunta: 'Em qual região da África as máscaras são mais proeminentes na cultura?',
    alternativaCerta: "África Ocidental",
    opcoes: [
      "África Austral",
      "África Oriental",
      "África Ocidental",
      "África Central",
    ],
  },
];


// se o botão startQuiz for clicado
botaoComecarMulti.onclick = () => {
  caixaInformacaoMulti.classList.add("informacaoAtivoMulti"); // mostrar info box
};

// se o botão exitQuiz for clicado
botaoSairMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
};

// se o botão continueQuiz for clicado
botaoContinuarMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  caixaNomesMulti.style.display = "block"; // mostrar o modal dos nomes dos jogadores
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  mostrarPerguntasMulti(0); // chamando a função showperguntas
  contadorPerguntasMulti(1); // passando 1 parâmetro para contadorPerguntas
  iniciarTempoMulti(15); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(0); // chamando a função iniciarLinhaTemporizadorMulti
};

let tempoValorMulti = 15;
let contagemPerguntasMulti = 0;
let numeroPerguntasMulti = 1;
let pontoUsarioMulti = 0;
let contadorMulti;
let contadorLinhaMulti;
let valorLarguraMulti = 0;

const reinicioQuizMulti = caixaResultadoMulti.querySelector(".botoes-multi .reiniciar-multi");
const sairQuizMulti = caixaResultadoMulti.querySelector(".botoes-multi .sair-multi");

// se o botão restartQuiz for clicado
reinicioQuizMulti.onclick = () => {
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  caixaResultadoMulti.classList.remove("resultadoAtivoMulti"); // esconder result box
  tempoValorMulti = 15;
  contagemPerguntasMulti = 0;
  numeroPerguntasMulti = 1;
  pontoUsarioMulti = 0;
  valorLarguraMulti = 0;
  mostrarPerguntasMulti(contagemPerguntasMulti); // chamando a função showperguntas
  contadorPerguntasMulti(numeroPerguntasMulti); // passando o valor numeroPerguntasMulti para contadorPerguntas
  clearInterval(contadorMulti); // limpar contador
  clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
  iniciarTempoMulti(tempoValorMulti); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(valorLarguraMulti); // chamando a função iniciarLinhaTemporizadorMulti
  textoTempoMulti.textContent = "Tempo Restante"; // alterar o texto de textoTempoMulti para Tempo Restante
  botaoProximoMulti.classList.remove("mostrar-multi"); // esconder o botão next
};

// se o botão quitQuiz for clicado
sairQuizMulti.onclick = () => {
  window.location.reload(); // recarregar a página atual
};

const botaoProximoMulti = document.querySelector(".footer-quiz-multi .botao-proximo-multi");
const contadorPerguntasInferiorMulti = document.querySelector(".footer-quiz-multi .perguntas-total-multi");

// se o botão Next Que for clicado
botaoProximoMulti.onclick = () => {
  if (contagemPerguntasMulti < perguntasMulti.length - 1) {
    // se o contador de perguntas for menor que o comprimento total das perguntas
    contagemPerguntasMulti++; // incrementar o valor do contador de perguntas
    numeroPerguntasMulti++; // incrementar o valor do contador de números das perguntas
    mostrarPerguntasMulti(contagemPerguntasMulti); // chamando a função showperguntas
    contadorPerguntasMulti(numeroPerguntasMulti); // passando o valor do contador de números das perguntas para contadorPerguntasMulti
    clearInterval(contadorMulti); // limpar contador
    clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
    iniciarTempoMulti(tempoValorMulti); // chamando a função iniciarTempoMulti
    iniciarLinhaTemporizadorMulti(valorLarguraMulti); // chamando a função iniciarLinhaTemporizadorMulti
    textoTempoMulti.textContent = "Tempo Restante"; // alterar o texto de textoTempoMulti para Tempo Restante
    botaoProximoMulti.classList.remove("mostrar-multi"); // esconder o botão next
  } else {
    clearInterval(contadorMulti); // limpar contador
    clearInterval(contadorLinhaMulti); // limar contadorLinhaMulti
    mostrarResultadoMulti(); // chamando a função mostrarResultadoMulti
  }
};

// obtendo perguntas e opções do array
function mostrarPerguntasMulti(index) {
  const textoPerguntasMulti = document.querySelector(".texto-perguntas-multi");

  let jogadorAtual = contagemPerguntasMulti % 2 === 0 ? nomeJogador1 : nomeJogador2;
  textoPerguntasMulti.innerHTML =
    `<span>${index + 1}. ${perguntasMulti[index].pergunta}</span>
     <p>Jogador Atual: ${jogadorAtual}</p>`;

  // criando uma nova tag span e div para a pergunta e opção e passando o valor usando o índice do array
  let perguntasMarcadaMulti =
    "<span>" +
    (index + 1) +
    ". " +
    perguntasMulti[index].pergunta +
    "</span>";
  let opcaoMarcadaMulti =
    '<div class="opcao-multi"><span>' +
    perguntasMulti[index].opcoes[0] +
    "</span></div>" +
    '<div class="opcao-multi"><span>' +
    perguntasMulti[index].opcoes[1] +
    "</span></div>" +
    '<div class="opcao-multi"><span>' +
    perguntasMulti[index].opcoes[2] +
    "</span></div>" +
    '<div class="opcao-multi"><span>' +
    perguntasMulti[index].opcoes[3] +
    "</span></div>";
  textoPerguntasMulti.innerHTML = perguntasMarcadaMulti; // adicionando a nova tag span dentro de perguntasMarcadaMulti
  listaOpcaoMulti.innerHTML = opcaoMarcadaMulti; // adicionando a nova tag div dentro de opcaoMarcadaMulti

  const opcaoMulti = listaOpcaoMulti.querySelectorAll(".opcao-multi");

  // definindo o atributo onclick para todas as opções disponíveis
  for (i = 0; i < opcaoMulti.length; i++) {
    opcaoMulti[i].setAttribute("onclick", "opcaoSelecionadaMulti(this)");
  }
}

// criando as novas tags div para os ícones
let iconeCertoMulti = '<div class="icone-multi marcacao-multi"><i class="fas fa-check"></i></div>';
let iconeErradoMulti = '<div class="icone-multi cruzar-multi"><i class="fas fa-times"></i></div>';
let jogadorAtual = 1;

// se o usuário clicar em uma opção
function opcaoSelecionadaMulti(alternativaCerta) {
  clearInterval(contadorMulti); // limpar contador
  clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
  let usarioRespostaMulti = alternativaCerta.textContent; // obtendo a opção selecionada pelo usuário
  let respostaCorretaMulti = perguntasMulti[contagemPerguntasMulti].alternativaCerta; // obtendo a resposta correta do array
  const todasOpcoesMulti = listaOpcaoMulti.children.length; // obtendo todos os itens de opção

  if (usarioRespostaMulti == respostaCorretaMulti) {
    // se a opção selecionada pelo usuário for igual à resposta correta do array
    pontoUsarioMulti += 1; // incrementar o valor do pontoUsarioMulti em 1
    alternativaCerta.classList.add("correto-multi"); // adicionar a cor verde à opção selecionada correta
    alternativaCerta.insertAdjacentHTML("beforeend", iconeCertoMulti); // adicionar o ícone de marca de seleção à opção selecionada correta
    console.log("Resposta Correta");
    console.log("Suas respostas corretas = " + pontoUsarioMulti);
  } else {
    alternativaCerta.classList.add("incorreto-multi"); // adicionar a cor vermelha à opção selecionada correta
    alternativaCerta.insertAdjacentHTML("beforeend", iconeErradoMulti); // adicionar o ícone de cruz à opção selecionada correta
    console.log("Resposta Errada");

    for (i = 0; i < todasOpcoesMulti; i++) {
      if (listaOpcaoMulti.children[i].textContent == respostaCorretaMulti) {
        // se houver uma opção que corresponde à resposta do array
        listaOpcaoMulti.children[i].setAttribute("class", "opcao-multi correto-multi"); // adicionar a cor verde à opção correspondente
        listaOpcaoMulti.children[i].insertAdjacentHTML("beforeend", iconeCertoMulti); // adicionar o ícone de marca de seleção à opção correspondente
        console.log("Resposta correta selecionada automaticamente.");
      }
    }
  }
  for (i = 0; i < todasOpcoesMulti; i++) {
    listaOpcaoMulti.children[i].classList.add("disabled-multi"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
  }
  botaoProximoMulti.classList.add("mostrar-multi"); // mostrar o botão next se o usuário selecionar alguma opção

  // Resetar tempo e alternativas para o próximo jogador
  tempoValorMulti = 15;
  valorLarguraMulti = 0;
  iniciarTempoMulti(tempoValorMulti);
  iniciarLinhaTemporizadorMulti(valorLarguraMulti);
  
  alternarJogador();
}

function mostrarResultadoMulti() {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  caixaQuizMulti.classList.remove("quizAtivoMulti"); // esconder quiz box
  caixaResultadoMulti.classList.add("resultadoAtivoMulti"); // mostrar result box
  const pontosTextoMulti = caixaResultadoMulti.querySelector(".pontos-textos-multi");
  if (pontoUsarioMulti > 3) {
    // se o usuário acertar mais de 3 perguntas
    // criando uma nova tag span e passando o número de pontos do usuário e o número total de perguntas
    let scoreTagMulti =
      "<span>Parabéns! Você acertou <p>" +
      pontoUsarioMulti +
      "</p> de <p>" +
      perguntasMulti.length +
      "</p></span>";
    pontosTextoMulti.innerHTML = scoreTagMulti; // adicionando a nova tag span dentro de pontosTextoMulti
  } else if (pontoUsarioMulti > 1) {
    // se o usuário acertar mais de 1 pergunta
    let scoreTagMulti =
      "<span>Legal! Você acertou <p>" +
      pontoUsarioMulti +
      "</p> de <p>" +
      perguntasMulti.length +
      "</p></span>";
    pontosTextoMulti.innerHTML = scoreTagMulti;
  } else {
    // se o usuário acertar menos de 1 pergunta
    let scoreTagMulti =
      "<span>Desculpe, você acertou apenas <p>" +
      pontoUsarioMulti +
      "</p> de <p>" +
      perguntasMulti.length +
      "</p></span>";
    pontosTextoMulti.innerHTML = scoreTagMulti;
  }
  
}

function iniciarTempoMulti(timeMulti) {
  contadorMulti = setInterval(timer, 1000);
  function timer() {
    contagemTempoMulti.textContent = timeMulti; // alterando o valor de contagemTempoMulti com o valor de tempo
    timeMulti--; // decrementando o valor do tempo
    if (timeMulti < 9) {
      // se o tempo for menor que 9
      let addZero = contagemTempoMulti.textContent;
      contagemTempoMulti.textContent = "0" + addZero; // adicionar um 0 antes do valor do tempo
    }
    if (timeMulti < 0) {
      // se o tempo for menor que 0
      clearInterval(contadorMulti); // limpar contador
      textoTempoMulti.textContent = "Tempo Esgotado"; // alterar o texto de textoTempoMulti para Tempo Esgotado
      const todasOpcoesMulti = listaOpcaoMulti.children.length; // obtendo todos os itens de opção
      let respostaCorretaMulti = perguntasMulti[contagemPerguntasMulti].alternativaCerta; // obtendo a resposta correta do array
      for (i = 0; i < todasOpcoesMulti; i++) {
        if (listaOpcaoMulti.children[i].textContent == respostaCorretaMulti) {
          // se houver uma opção que corresponde à resposta do array
          listaOpcaoMulti.children[i].setAttribute("class", "opcao-multi correto-multi"); // adicionar a cor verde à opção correspondente
          listaOpcaoMulti.children[i].insertAdjacentHTML("beforeend", iconeCertoMulti); // adicionar o ícone de marca de seleção à opção correspondente
          console.log("Tempo Esgotado: Resposta correta selecionada automaticamente.");
        }
      }
      for (i = 0; i < todasOpcoesMulti; i++) {
        listaOpcaoMulti.children[i].classList.add("disabled-multi"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
      }
      botaoProximoMulti.classList.add("mostrar-multi"); // mostrar o botão next se o usuário selecionar alguma opção
    }
  }
}

function iniciarLinhaTemporizadorMulti(timeMulti) {
  contadorLinhaMulti = setInterval(timer, 29);
  function timer() {
    timeMulti += 1; // incrementar o valor do tempo em 1
    linhaTempoMulti.style.width = timeMulti + "px"; // aumentar a largura da linhaTempoMulti com px pelo valor do tempo

    // Verificar a largura da tela
    if (window.innerWidth < 600) {
      clearInterval(contadorLinhaMulti); // Limpar contadorLinhaMulti
    }

    if (timeMulti > 549) {
      // se o valor do tempo for maior que 549
      clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
    }
  }
}

// Função para embaralhar o array de perguntas
function embaralharPerguntasMulti(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para gerar um conjunto aleatório de perguntas do conjunto maior
function gerarPerguntasAleatoriasMulti() {
  embaralharPerguntasMulti(perguntasMulti); // Embaralhar as perguntas
  return perguntasMulti.slice(0, 10); // Selecionar as primeiras 10 perguntas
}

// se o botão continueQuiz for clicado
botaoContinuarMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  perguntasMulti = gerarPerguntasAleatoriasMulti(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntasMulti(0); // chamando a função showperguntas
  contadorPerguntasMulti(1); // passando 1 parâmetro para contadorPerguntasMulti
  iniciarTempoMulti(15); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(0); // chamando a função iniciarLinhaTemporizadorMulti
};

// se o botão restartQuiz for clicado
reinicioQuizMulti.onclick = () => {
  caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
  caixaResultadoMulti.classList.remove("resultadoAtivoMulti"); // esconder result box
  tempoValorMulti = 15;
  contagemPerguntasMulti = 0;
  numeroPerguntasMulti = 1;
  pontoUsarioMulti = 0;
  valorLarguraMulti = 0;
  perguntasMulti = gerarPerguntasAleatoriasMulti(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntasMulti(contagemPerguntasMulti); // chamando a função showperguntas
  contadorPerguntasMulti(numeroPerguntasMulti); // passando o valor numeroPerguntasMulti para contadorPerguntasMulti
  clearInterval(contadorMulti); // limpar contador
  clearInterval(contadorLinhaMulti); // limpar contadorLinhaMulti
  iniciarTempoMulti(tempoValorMulti); // chamando a função iniciarTempoMulti
  iniciarLinhaTemporizadorMulti(valorLarguraMulti); // chamando a função iniciarLinhaTemporizadorMulti
  textoTempoMulti.textContent = "Tempo Restante"; // alterar o texto de textoTempoMulti para Tempo Restante
  botaoProximoMulti.classList.remove("mostrar-multi"); // esconder o botão next
};

function contadorPerguntasMulti(index) {
  // criando uma nova tag span e passando o número da pergunta e o número total de perguntas
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    perguntasMulti.length +
    "</p> Perguntas</span>";
  contadorPerguntasInferiorMulti.innerHTML = totalQueCounTag; // adicionando a nova tag span dentro de contadorPerguntasInferiorMulti
}

// Se o botão startQuiz for clicado
botaoComecarMulti.onclick = () => {
  caixaInformacaoMulti.classList.add("informacaoAtivoMulti"); // mostrar info box
};

// Se o botão exitQuiz for clicado
botaoSairMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
};

// Se o botão continueQuiz for clicado
botaoContinuarMulti.onclick = () => {
  caixaInformacaoMulti.classList.remove("informacaoAtivoMulti"); // esconder info box
  caixaNomesMulti.style.display = "block"; // mostrar o modal dos nomes dos jogadores
};

function alternarJogador() {
  jogadorAtual = jogadorAtual === 1 ? 2 : 1;
  document.getElementById("turno").textContent = jogadorAtual === 1 ? nomeJogador1Valor : nomeJogador2Valor;
}

let nomeJogador1Valor = "";
let nomeJogador2Valor = "";
 
// Função para iniciar o jogo com os nomes dos jogadores
function iniciarJogoMulti() {
  const caixaNomesMulti = document.querySelector(".caixa-nomes-multi");

  if (caixaNomesMulti) {
    nomeJogador1Valor = nomeJogador1.value.trim(); // Definir valor da variável global
    nomeJogador2Valor = nomeJogador2.value.trim(); // Definir valor da variável global

    if (nomeJogador1Valor === "" || nomeJogador2Valor === "") {
      alert("Por favor, insira os nomes dos jogadores.");
    } else {
      caixaNomesMulti.style.display = "none"; // esconder o modal dos nomes dos jogadores
      caixaQuizMulti.classList.add("quizAtivoMulti"); // mostrar quiz box
      perguntasMulti = gerarPerguntasAleatoriasMulti(); // Gerar um conjunto aleatório de perguntas
      mostrarPerguntasMulti(0); // chamando a função showperguntas
      contadorPerguntasMulti(1); // passando 1 parâmetro para contadorPerguntasMulti
      iniciarTempoMulti(15); // chamando a função iniciarTempoMulti
      iniciarLinhaTemporizadorMulti(0); // chamando a função iniciarLinhaTemporizadorMulti

      // Atualizar o conteúdo do elemento com o nome do primeiro jogador
      document.getElementById("turno").textContent = nomeJogador1Valor;

      // Alternar o jogador atual para o primeiro jogador
      jogadorAtual = 1;
    }
  } else {
    console.error("Elementos não encontrados.");
  }
}
