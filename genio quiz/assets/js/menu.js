// selecionando todos os elementos necessários
const botaoComecar = document.querySelector(".botao-comecar button");
const caixaInformacao = document.querySelector(".caixa-informacao");
const botaoSair = caixaInformacao.querySelector(".botoes .sair");
const botaoContinuar = caixaInformacao.querySelector(".botoes .reiniciar");
const caixaQuiz = document.querySelector(".caixa-quiz");
const caixaResultado = document.querySelector(".caixa-resultado");
const listaOpcao = document.querySelector(".lista-opcao");
const linhaTempo = document.querySelector("header .linha-tempo");
const textoTempo = document.querySelector(".tempo .texto-esquerdo-tempo");
const contagemTempo = document.querySelector(".tempo .tempo-segundo");

// criando um array e passando o número, perguntas, opções e respostas
let perguntas = [
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
    pergunta: "Qual é a dança tradicional mais conhecida da África?",
    alternativaCerta: "Guedra",
    opcoes: [
      "Guedra",
      "Salsa",
      "Yangko",
      "Kizomba",
    ],
  },
  {
    pergunta: "Qual é a religião predominante na maior parte da África?",
    alternativaCerta: "Muçulmanos",
    opcoes: [
      "Ortodoxo",
      "Islamismo",
      "Hinduísmo",
      "Muçulmanos",
    ],
  },
  {
    pergunta: "Quais são os nomes das máscaras tradicionais usadas em rituais e cerimônias na África?",
    alternativaCerta: "Kwele e Fang",
    opcoes: [
      "Tiki e Haka",
      "Bauta e Columbina",
      "Zanni e Arlecchino",
      "Kwele e Fang",
    ],
  },
  {
    pergunta: "Qual é o estilo de arte popular originário da Nigéria, que utiliza cores vibrantes e padrões geométricos?",
    alternativaCerta: "Arte Naija",
    opcoes: [
      "Arte Rupestre",
      "Arte Abstrata",
      "Arte Naija",
      "Arte Cubista",
    ],
  },
  {
    pergunta: "Qual é o maior deserto da África?",
    alternativaCerta: "Deserto do Saara",
    opcoes: [
      "Deserto de Kalahari",
      "Deserto do Saara",
      "Deserto da Namíbia",
      "Deserto da Núbia",
    ],
  },
  {
    pergunta: "Qual é o maior lago da África?",
    alternativaCerta: "Lago Vitória",
    opcoes: [
      "Lago Vitória",
      "Lago Tanganica",
      "Lago Niassa",
      "Lago Chade",
    ],
  },
  {
    pergunta: "Qual é a montanha mais alta da África?",
    alternativaCerta: "Monte Kilimanjaro",
    opcoes: [
      "Monte Kilimanjaro",
      "Monte Quênia",
      "Monte Ruwenzori",
      "Monte Elgon",
    ],
  },
  {
    pergunta: "Qual é o rio mais longo da África?",
    alternativaCerta: "Rio Nilo",
    opcoes: [
      "Rio Congo",
      "Rio Nilo",
      "Rio Zambeze",
      "Rio Orange",
    ],
  },
  {
    pergunta: 'Qual país africano é conhecido como "o berço da humanidade" ?',
    alternativaCerta: "Botsuana",
    opcoes: [
      "Botsuana",
      "Quênia",
      "Sudão",
      "África do Sul",
    ],
  },
  {
    pergunta: "Qual é a maior reserva de vida selvagem da África?",
    alternativaCerta: "Parque Nacional Serengeti (Tanzânia)",
    opcoes: [
      "Parque Nacional Kruger (África do Sul)",
      "Reserva Masai Mara (Quênia)",
      "Parque Nacional Serengeti (Tanzânia)",
      "Parque Nacional Chobe (Botsuana)",
    ],
  },
  {
    pergunta: "Qual país africano é famoso por suas pirâmides antigas?",
    alternativaCerta: "Egito",
    opcoes: [
      "Egito",
      "Sudão",
      "Nigéria",
      "Mali",
    ],
  },
  {
    pergunta: "Qual é a língua mais falada na África?",
    alternativaCerta: "Swahili",
    opcoes: [
      "Swahili",
      "Francês",
      "Inglês",
      "Árabe",
    ],
  },
  {
    pergunta: "Qual é a cidade mais populosa da África?",
    alternativaCerta: "Lagos (Nigéria)",
    opcoes: [
      "Cairo (Egito)",
      "Lagos (Nigéria)",
      "Kinshasa (República Democrática do Congo)",
      "Joanesburgo (África do Sul)",
    ],
  },
  {
    pergunta: "Qual é a maior economia da África?",
    alternativaCerta: "Nigéria",
    opcoes: [
      "Nigéria",
      "África do Sul",
      "Egito",
      "Argélia",
    ],
  },
  {
    pergunta: "Qual é o prato tradicional da culinária da Etiópia?",
    alternativaCerta: "Doro Wat",
    opcoes: [
      "Jollof Rice",
      "Hot Dog",
      "Doro Wat",
      "Cuscuz",
    ],
  },
  {
    pergunta: "Qual é o famoso festival de música e artes realizado anualmente em Zanzibar?",
    alternativaCerta: "Festival de Sauti za Busara",
    opcoes: [
      "Festival de Lamu",
      "Festival de Lake of Stars",
      "Festival de Sauti za Busara",
      "Festival de Bushfire",
    ],
  },
  {
    pergunta: "Á África é um:",
    alternativaCerta: "Um Continente",
    opcoes: [
      "Um País",
      "Um Planeta",
      "Um Continente",
      "Uma Cidade",
    ],
  },
  {
    pergunta: "Qual país africano tem uma bandeira verde, amarela e vermelha com uma estrela negra no centro?",
    alternativaCerta: "Gana",
    opcoes: [
      "Quênia",
      "Angola",
      "Etiópia",
      "Gana",
    ],
  },
  {
    pergunta: "Qual país africano possui uma bandeira com as cores verde, amarelo e vermelho, e no centro um emblema de uma estrela amarela?",
    alternativaCerta: "Burkina Faso",
    opcoes: [
      "Burkina Faso",
      "Angola",
      "Quênia",
      "Gana",
    ],
  },
  {
    pergunta: "Qual país africano possui uma bandeira composta por três faixas horizontais nas cores vermelho, amarelo e verde, com um triângulo preto no canto esquerdo?",
    alternativaCerta: "Camarões",
    opcoes: [
      "Camarões",
      "Etiópia",
      "Burkina Faso",
      "Gana",
    ],
  },
  {
    pergunta: "Qual país africano possui uma bandeira com as cores verde, amarelo e vermelho, e uma estrela de cinco pontas no centro?",
    alternativaCerta: "Etiópia",
    opcoes: [
      "Gana",
      "Quênia",
      "África do Sul",
      "Etiópia",
    ],
  },
  {
    pergunta: "Qual país africano possui uma bandeira com três faixas horizontais nas cores vermelho, amarelo e verde, e um emblema de estrela e meia-lua no canto superior esquerdo?",
    alternativaCerta: "Mauritânia",
    opcoes: [
      "Senegal",
      "Mali",
      "Burkina Faso",
      "Mauritânia",
    ],
  },
  {
    pergunta: "Qual esporte é considerado o mais popular na África do Sul e foi um dos fatores importantes na superação do apartheid no país?",
    alternativaCerta: "Rugby",
    opcoes: [
      "Futebol",
      "Rugby",
      "Críquete",
      "Atletismo",
    ],
  },
  {
    pergunta: 'Em qual país africano o esporte do "Kora" é popular, uma competição que envolve canoagem em pequenas embarcações de madeira?',
    alternativaCerta: "Senegal",
    opcoes: [
      "Senegal",
      "Tanzânia",
      "Angola",
      "Costa do Marfim",
    ],
  },
  {
    pergunta: 'Em qual país africano o esporte do "Mancala" é popular, um jogo de tabuleiro estratégico jogado com sementes ou pedras?',
    alternativaCerta: "Gana",
    opcoes: [
      "Egito",
      "Marrocosa",
      "África do Sul",
      "Gana",
    ],
  },
  {
    pergunta: 'Qual é o país africano famoso por abrigar o Monte Kilimanjaro?',
    alternativaCerta: "Tanzânia",
    opcoes: [
      "Egito",
      "Uganda",
      "Tanzânia",
      "Zâmbia",
    ],
  },
  {
    pergunta: 'Qual é o animal mais rápido do mundo, encontrado na África?',
    alternativaCerta: "Guepardo",
    opcoes: [
      "Leão",
      "Elefante",
      "Guepardo",
      "Rinoceronte",
    ],
  },
  {
    pergunta: 'Qual animal é conhecido como "Rei da Selva"?',
    alternativaCerta: "Leão",
    opcoes: [
      "Elefante",
      "Rinoceronte",
      "Girafa",
      "Leão",
    ],
  },
  {
    pergunta: 'Qual animal possui dois chifre longo e curvado na cabeça?',
    alternativaCerta: "Órix-de-cimitarra",
    opcoes: [
      "Hipopótamo",
      "Seu Amigo",
      "Rinoceronte",
      "Órix-de-cimitarra",
    ],
  },
  {
    pergunta: 'Qual animal é conhecido por sua velocidade e habilidade de salto?',
    alternativaCerta: "Guepardo",
    opcoes: [
      "Zebra",
      "Leopardo",
      "Elefante",
      "Guepardo",
    ],
  },
  {
    pergunta: 'Qual animal é o maior mamífero terrestre?',
    alternativaCerta: "Elefante",
    opcoes: [
      "Elefante",
      "Leopardo",
      "Leão",
      "Hiena",
    ],
  },
  {
    pergunta: 'Qual animal é conhecido por sua tromba longa e flexível?',
    alternativaCerta: "Elefante",
    opcoes: [
      "Girafa",
      "Leopardo",
      "Rinoceronte",
      "Elefante",
    ],
  },
  {
    pergunta: 'Qual animal é conhecido como "o assassino silencioso" por sua abordagem furtiva e ataques mortais?',
    alternativaCerta: "Crocodilo do Nilo",
    opcoes: [
      "Crocodilo do Nilo",
      "Leopardo",
      "Tubarão",
      "Leão",
    ],
  },
  {
    pergunta: 'Qual animal é responsável pelo maior número de mortes na África a cada ano?',
    alternativaCerta: "Hipopótamo",
    opcoes: [
      "Leão",
      "Elefante",
      "Rinoceronte",
      "Hipopótamo",
    ],
  },
  {
    pergunta: 'Qual animal é considerado um dos mais venenosos do mundo e é encontrado em várias regiões da África?',
    alternativaCerta: "Cobra Mamba Negra",
    opcoes: [
      "Mosquito",
      "Cobra Mamba Negra",
      "Escorpião",
      "Aranha Armadeira",
    ],
  },
  {
    pergunta: 'Qual animal é conhecido por sua agressividade e por ser responsável por muitos ataques a seres humanos na África?',
    alternativaCerta: "Leão",
    opcoes: [
      "Leopardo",
      "Crocodilo do Nilo",
      "Rinoceronte",
      "Leão",
    ],
  },
  {
    pergunta: 'Qual animal possui um veneno neurotóxico altamente letal e é temido na região da África Subsaariana?',
    alternativaCerta: "Mosca Tse-Tse",
    opcoes: [
      "Mosca Tse-Tse",
      "Vespa-do-mar",
      "Escorpião Imperador",
      "Serpente Fierce Snake",
    ],
  },
  {
    pergunta: 'Qual país africano é conhecido como o maior produtor de petróleo do continente?',
    alternativaCerta: "Nigéria",
    opcoes: [
      "Nigéria",
      "Líbia",
      "Argélia",
      "Angola",
    ],
  },
  {
    pergunta: 'Qual país africano é o maior exportador mundial de ouro?',
    alternativaCerta: "Gana",
    opcoes: [
      "África do Sul",
      "Gana",
      "Tanzânia",
      "Mali",
    ],
  },
  {
    pergunta: 'Qual país africano é líder na produção e exportação de diamantes?',
    alternativaCerta: "Botsuana",
    opcoes: [
      "Botsuana",
      "África do Sul",
      "República Democrática do Congo",
      "Namíbia",
    ],
  },
  {
    pergunta: 'Qual país africano é conhecido por suas reservas de gás natural e é considerado um importante fornecedor para o mercado europeu?',
    alternativaCerta: "Argélia",
    opcoes: [
      "Moçambique",
      "Egito",
      "Argélia",
      "Tanzânia",
    ],
  },
  {
    pergunta: 'Qual país africano tem a maior economia do continente e é membro do grupo BRICS?',
    alternativaCerta: "África do Sul",
    opcoes: [
      "Moçambique",
      "África do Sul",
      "Egito",
      "Quênia",
    ],
  },
  {
    pergunta: 'Qual é o instrumento musical de cordas mais famoso da África Ocidental?',
    alternativaCerta: "Kora",
    opcoes: [
      "Djembe",
      "Kora",
      "Mbira",
      "Kalimba",
    ],
  },
  {
    pergunta: 'Qual é o estilo de dança tradicional do povo Zulu, da África do Sul?',
    alternativaCerta: "Indlamu",
    opcoes: [
      "Hula",
      "Samba",
      "Kizomba",
      "Indlamu",
    ],
  },
  {
    pergunta: 'Quem é o autor do famoso romance "Things Fall Apart" (O Mundo se Despedaça), que retrata a vida e cultura igbo na Nigéria?',
    alternativaCerta: "Chinua Achebe",
    opcoes: [
      "Chinua Achebe",
      "Wole Soyinka",
      "Ngugi wa Thiong'o",
      "Chimamanda Ngozi Adichie",
    ],
  },
  {
    pergunta: 'Qual é o estilo de arte em que os artistas da tribo Ndebele, da África do Sul e Zimbábue, pintam padrões geométricos em casas e objetos?',
    alternativaCerta: "Ndebele Art",
    opcoes: [
      "Batik",
      "Tingatinga",
      "Adinkra",
      "Ndebele Art",
    ],
  },
  {
    pergunta: 'Qual é o festival anual realizado no Senegal, conhecido por sua celebração da música, dança e cultura africana?',
    alternativaCerta: "Festival de Saint-Louis",
    opcoes: [
      "Festival de Timbuktu",
      "Festival de Essaouira",
      "Festival de Fès",
      "Festival de Saint-Louis",
    ],
  },
  {
    pergunta: 'Qual é o animal da África que sempre está pronto para uma festa?',
    alternativaCerta: "Hiena-risonha",
    opcoes: [
      "Hiena-risonha",
      "Elefante dançante",
      "Leão com senso de humor",
      "Rinoceronte brincalhão",
    ],
  },
  {
    pergunta: 'Qual é o animal da África que adora fazer piadas?',
    alternativaCerta: "Macaco palhaço",
    opcoes: [
      "Hipopótamo hilário",
      "Girafa engraçada",
      "Rinoceronte com senso de humor",
      "Macaco palhaço",
    ],
  },
  {
    pergunta: 'Qual é o propósito principal das máscaras africanas?',
    alternativaCerta: "Realizar rituais religiosos",
    opcoes: [
      "Proteger o rosto contra o sol",
      "Realizar rituais religiosos",
      "Esconder a identidade do usuário",
      "Decorar as paredes das casas",
    ],
  },
  {
    pergunta: 'Qual é o material comum usado na fabricação das máscaras africanas?',
    alternativaCerta: "Madeira",
    opcoes: [
      "Madeira",
      "Metal",
      "Vidro",
      "Cerâmica",
    ],
  },
  {
    pergunta: 'As máscaras africanas são frequentemente usadas em qual tipo de evento?',
    alternativaCerta: "Funerais",
    opcoes: [
      "Casamentos",
      "Funerais",
      "Festas de aniversário",
      "Reuniões de negócios",
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

let isMultijogador = false; // Variável para controlar se o jogo está no modo multijogador
let jogadores = 1; // Número de jogadores, inicializado com 1

// se o botão Um Jogador for clicado
botaoComecar.onclick = () => {
  caixaInformacao.classList.add("informacaoAtivo"); // mostrar info box
  isMultijogador = false; // Definir o modo multijogador como falso
};

// se o botão startQuiz for clicado
botaoComecar.onclick = () => {
  caixaInformacao.classList.add("informacaoAtivo"); // mostrar info box
};

// se o botão exitQuiz for clicado
botaoSair.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
};

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  mostrarPerguntas(0); // chamando a função showperguntas
  contadorPerguntas(1); // passando 1 parâmetro para contadorPerguntas
  iniciarTempo(20); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(0); // chamando a função iniciarLinhaTemporizador
};

let tempoValor = 20;
let contagemPerguntas = 0;
let numeroPerguntas = 1;
let pontoUsario = 0;
let contador;
let contadorLinha;
let valorLargura = 0;

const reinicioQuiz = caixaResultado.querySelector(".botoes .reiniciar");
const sairQuiz = caixaResultado.querySelector(".botoes .sair");



// se o botão restartQuiz for clicado
reinicioQuiz.onclick = () => {
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  caixaResultado.classList.remove("resultadoAtivo"); // esconder result box
  tempoValor = 20;
  contagemPerguntas = 0;
  numeroPerguntas = 1;
  pontoUsario = 0;
  valorLargura = 0;
  mostrarPerguntas(contagemPerguntas); // chamando a função showperguntas
  contadorPerguntas(numeroPerguntas); // passando o valor numeroPerguntas para contadorPerguntas
  clearInterval(contador); // limpar contador
  clearInterval(contadorLinha); // limpar contadorLinha
  iniciarTempo(tempoValor); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(valorLargura); // chamando a função iniciarLinhaTemporizador
  textoTempo.textContent = "Tempo Restante"; // alterar o texto de textoTempo para Tempo Restante
  botaoProximo.classList.remove("mostrar"); // esconder o botão next
};

// se o botão quitQuiz for clicado
sairQuiz.onclick = () => {
  window.location.reload(); // recarregar a página atual
};

const botaoProximo = document.querySelector(".footer-quiz .botao-proximo");
const contadorPerguntasInferior = document.querySelector(".footer-quiz .perguntas-total");

// se o botão Next Que for clicado
botaoProximo.onclick = () => {
  if (contagemPerguntas < perguntas.length - 1) {
    // se o contador de perguntas for menor que o comprimento total das perguntas
    contagemPerguntas++; // incrementar o valor do contador de perguntas
    numeroPerguntas++; // incrementar o valor do contador de números das perguntas
    mostrarPerguntas(contagemPerguntas); // chamando a função showperguntas
    contadorPerguntas(numeroPerguntas); // passando o valor do contador de números das perguntas para contadorPerguntas
    clearInterval(contador); // limpar contador
    clearInterval(contadorLinha); // limpar contadorLinha
    iniciarTempo(tempoValor); // chamando a função iniciarTempo
    iniciarLinhaTemporizador(valorLargura); // chamando a função iniciarLinhaTemporizador
    textoTempo.textContent = "Tempo Restante"; // alterar o texto de textoTempo para Tempo Restante
    botaoProximo.classList.remove("mostrar"); // esconder o botão next
  } else {
    clearInterval(contador); // limpar contador
    clearInterval(contadorLinha); // limar contadorLinha
    mostrarResultado(); // chamando a função mostrarResultado
  }
};

// obtendo perguntas e opções do array
function mostrarPerguntas(index) {
  const textoPerguntas = document.querySelector(".texto-perguntas");

  // criando uma nova tag span e div para a pergunta e opção e passando o valor usando o índice do array
  let perguntasMarcada =
    "<span>" +
    (index + 1) +
    ". " +
    perguntas[index].pergunta +
    "</span>";
  let opcaoMarcada =
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[0] +
    "</span></div>" +
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[1] +
    "</span></div>" +
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[2] +
    "</span></div>" +
    '<div class="opcao"><span>' +
    perguntas[index].opcoes[3] +
    "</span></div>";
  textoPerguntas.innerHTML = perguntasMarcada; // adicionando a nova tag span dentro de perguntasMarcada
  listaOpcao.innerHTML = opcaoMarcada; // adicionando a nova tag div dentro de opcaoMarcada

  const opcao = listaOpcao.querySelectorAll(".opcao");

  // definindo o atributo onclick para todas as opções disponíveis
  for (i = 0; i < opcao.length; i++) {
    opcao[i].setAttribute("onclick", "opcaoSelecionada(this)");
  }
}

// criando as novas tags div para os ícones
let iconeCerto = '<div class="icone marcacao"><i class="fas fa-check"></i></div>';
let iconeErrado = '<div class="icone cruzar"><i class="fas fa-times"></i></div>';

// se o usuário clicar em uma opção
function opcaoSelecionada(alternativaCerta) {
  clearInterval(contador); // limpar contador
  clearInterval(contadorLinha); // limpar contadorLinha
  let usarioResposta = alternativaCerta.textContent; // obtendo a opção selecionada pelo usuário
  let respostaCorreta = perguntas[contagemPerguntas].alternativaCerta; // obtendo a resposta correta do array
  const todasOpcoes = listaOpcao.children.length; // obtendo todos os itens de opção

  if (usarioResposta == respostaCorreta) {
    // se a opção selecionada pelo usuário for igual à resposta correta do array
    pontoUsario += 1; // incrementar o valor do pontoUsario em 1
    alternativaCerta.classList.add("correto"); // adicionar a cor verde à opção selecionada correta
    alternativaCerta.insertAdjacentHTML("beforeend", iconeCerto); // adicionar o ícone de marca de seleção à opção selecionada correta
    console.log("Resposta Correta");
    console.log("Suas respostas corretas = " + pontoUsario);
  } else {
    alternativaCerta.classList.add("incorreto"); // adicionar a cor vermelha à opção selecionada correta
    alternativaCerta.insertAdjacentHTML("beforeend", iconeErrado); // adicionar o ícone de cruz à opção selecionada correta
    console.log("Resposta Errada");

    for (i = 0; i < todasOpcoes; i++) {
      if (listaOpcao.children[i].textContent == respostaCorreta) {
        // se houver uma opção que corresponde à resposta do array
        listaOpcao.children[i].setAttribute("class", "opcao correto"); // adicionar a cor verde à opção correspondente
        listaOpcao.children[i].insertAdjacentHTML("beforeend", iconeCerto); // adicionar o ícone de marca de seleção à opção correspondente
        console.log("Resposta correta selecionada automaticamente.");
      }
    }
  }
  for (i = 0; i < todasOpcoes; i++) {
    listaOpcao.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
  }
  botaoProximo.classList.add("mostrar"); // mostrar o botão next se o usuário selecionar alguma opção
}

function mostrarResultado() {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
  caixaQuiz.classList.remove("quizAtivo"); // esconder quiz box
  caixaResultado.classList.add("resultadoAtivo"); // mostrar result box
  const pontosTexto = caixaResultado.querySelector(".pontos-textos");
  if (pontoUsario > 3) {
    // se o usuário acertar mais de 3 perguntas
    // criando uma nova tag span e passando o número de pontos do usuário e o número total de perguntas
    let scoreTag =
      "<span>Parabéns! Você acertou <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p></span>";
    pontosTexto.innerHTML = scoreTag; // adicionando a nova tag span dentro de pontosTexto
  } else if (pontoUsario > 1) {
    // se o usuário acertar mais de 1 pergunta
    let scoreTag =
      "<span>Legal! Você acertou <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p></span>";
    pontosTexto.innerHTML = scoreTag;
  } else {
    // se o usuário acertar menos de 1 pergunta
    let scoreTag =
      "<span>Desculpe, você acertou apenas <p>" +
      pontoUsario +
      "</p> de <p>" +
      perguntas.length +
      "</p></span>";
    pontosTexto.innerHTML = scoreTag;
  }
}

function iniciarTempo(time) {
  contador = setInterval(timer, 1000);
  function timer() {
    contagemTempo.textContent = time; // alterando o valor de contagemTempo com o valor de tempo
    time--; // decrementando o valor do tempo
    if (time < 9) {
      // se o tempo for menor que 9
      let addZero = contagemTempo.textContent;
      contagemTempo.textContent = "0" + addZero; // adicionar um 0 antes do valor do tempo
    }
    if (time < 0) {
      // se o tempo for menor que 0
      clearInterval(contador); // limpar contador
      textoTempo.textContent = "Tempo Esgotado"; // alterar o texto de textoTempo para Tempo Esgotado
      const todasOpcoes = listaOpcao.children.length; // obtendo todos os itens de opção
      let respostaCorreta = perguntas[contagemPerguntas].alternativaCerta; // obtendo a resposta correta do array
      for (i = 0; i < todasOpcoes; i++) {
        if (listaOpcao.children[i].textContent == respostaCorreta) {
          // se houver uma opção que corresponde à resposta do array
          listaOpcao.children[i].setAttribute("class", "opcao correto"); // adicionar a cor verde à opção correspondente
          listaOpcao.children[i].insertAdjacentHTML("beforeend", iconeCerto); // adicionar o ícone de marca de seleção à opção correspondente
          console.log("Tempo Esgotado: Resposta corretaselecionada automaticamente.");
        }
      }
      for (i = 0; i < todasOpcoes; i++) {
        listaOpcao.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
      }
      botaoProximo.classList.add("mostrar"); // mostrar o botão next se o usuário selecionar alguma opção
    }
  }
}

function iniciarLinhaTemporizador(time) {
  contadorLinha = setInterval(timer, 47);
  function timer() {
    time += 1; // incrementar o valor do tempo em 1
    linhaTempo.style.width = time + "px"; // aumentar a largura da linhaTempo com px pelo valor do tempo
    
    // Verificar a largura da tela
    if (window.innerWidth < 600) {
      clearInterval(contadorLinha); // Limpar contadorLinha
    }
    
    if (time > 549) {
      // se o valor do tempo for maior que 549
      clearInterval(contadorLinha); // limpar contadorLinha
    }
  }
}


// Função para embaralhar o array de perguntas
function embaralharPerguntas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para gerar um conjunto aleatório de perguntas do conjunto maior
function gerarPerguntasAleatorias() {
  embaralharPerguntas(perguntas); // Embaralhar as perguntas
  return perguntas.slice(0, 10); // Selecionar as primeiras 10 perguntas
}

// se o botão continueQuiz for clicado
botaoContinuar.onclick = () => {
  caixaInformacao.classList.remove("informacaoAtivo"); // esconder info box
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  perguntas = gerarPerguntasAleatorias(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntas(0); // chamando a função showperguntas
  contadorPerguntas(1); // passando 1 parâmetro para contadorPerguntas
  iniciarTempo(20); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(0); // chamando a função iniciarLinhaTemporizador
};

// se o botão restartQuiz for clicado
reinicioQuiz.onclick = () => {
  caixaQuiz.classList.add("quizAtivo"); // mostrar quiz box
  caixaResultado.classList.remove("resultadoAtivo"); // esconder result box
  tempoValor = 20;
  contagemPerguntas = 0;
  numeroPerguntas = 1;
  pontoUsario = 0;
  valorLargura = 0;
  perguntas = gerarPerguntasAleatorias(); // Gerar um conjunto aleatório de perguntas
  mostrarPerguntas(contagemPerguntas); // chamando a função showperguntas
  contadorPerguntas(numeroPerguntas); // passando o valor numeroPerguntas para contadorPerguntas
  clearInterval(contador); // limpar contador
  clearInterval(contadorLinha); // limpar contadorLinha
  iniciarTempo(tempoValor); // chamando a função iniciarTempo
  iniciarLinhaTemporizador(valorLargura); // chamando a função iniciarLinhaTemporizador
  textoTempo.textContent = "Tempo Restante"; // alterar o texto de textoTempo para Tempo Restante
  botaoProximo.classList.remove("mostrar"); // esconder o botão next
};

function contadorPerguntas(index) {
  // criando uma nova tag span e passando o número da pergunta e o número total de perguntas
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    perguntas.length +
    "</p> Perguntas</span>";
  contadorPerguntasInferior.innerHTML = totalQueCounTag; // adicionando a nova tag span dentro de contadorPerguntasInferior
}



