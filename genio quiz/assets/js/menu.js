// selecionando todos os elementos necessários
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// criando um array e passando o número, perguntas, opções e respostas
let questions = [
  { 
    question: "Qual é o instrumento musical tradicional mais popular da África?",
    answer: "Tambores",
    options: [
      "Djembe",
      "Tambores",
      "Kalimba",
      "Violão",
    ],
  },
  {
    question: "Qual é a dança tradicional mais conhecida da África?",
    answer: "Guedra",
    options: [
      "Guedra",
      "Salsa",
      "Yangko",
      "Kizomba",
    ],
  },
  {
    question: "Qual é a religião predominante na maior parte da África?",
    answer: "Muçulmanos",
    options: [
      "Ortodoxo",
      "Islamismo",
      "Hinduísmo",
      "Muçulmanos",
    ],
  },
  {
    question: "Quais são os nomes das máscaras tradicionais usadas em rituais e cerimônias na África?",
    answer: "Kwele e Fang",
    options: [
      "Tiki e Haka",
      "Bauta e Columbina",
      "Zanni e Arlecchino",
      "Kwele e Fang",
    ],
  },
  {
    question: "Qual é o estilo de arte popular originário da Nigéria, que utiliza cores vibrantes e padrões geométricos?",
    answer: "Arte Naija",
    options: [
      "Arte Rupestre",
      "Arte Abstrata",
      "Arte Naija",
      "Arte Cubista",
    ],
  },
  {
    question: "Qual é o maior deserto da África?",
    answer: "Deserto do Saara",
    options: [
      "Deserto de Kalahari",
      "Deserto do Saara",
      "Deserto da Namíbia",
      "Deserto da Núbia",
    ],
  },
  {
    question: "Qual é o maior lago da África?",
    answer: "Lago Vitória",
    options: [
      "Lago Vitória",
      "Lago Tanganica",
      "Lago Niassa",
      "Lago Chade",
    ],
  },
  {
    question: "Qual é a montanha mais alta da África?",
    answer: "Monte Kilimanjaro",
    options: [
      "Monte Kilimanjaro",
      "Monte Quênia",
      "Monte Ruwenzori",
      "Monte Elgon",
    ],
  },
  {
    question: "Qual é o rio mais longo da África?",
    answer: "Rio Nilo",
    options: [
      "Rio Congo",
      "Rio Nilo",
      "Rio Zambeze",
      "Rio Orange",
    ],
  },
  {
    question: 'Qual país africano é conhecido como "o berço da humanidade" ?',
    answer: "Botsuana",
    options: [
      "Botsuana",
      "Quênia",
      "Sudão",
      "África do Sul",
    ],
  },
  {
    question: "Qual é a maior reserva de vida selvagem da África?",
    answer: "Parque Nacional Serengeti (Tanzânia)",
    options: [
      "Parque Nacional Kruger (África do Sul)",
      "Reserva Masai Mara (Quênia)",
      "Parque Nacional Serengeti (Tanzânia)",
      "Parque Nacional Chobe (Botsuana)",
    ],
  },
  {
    question: "Qual país africano é famoso por suas pirâmides antigas?",
    answer: "Egito",
    options: [
      "Egito",
      "Sudão",
      "Nigéria",
      "Mali",
    ],
  },
  {
    question: "Qual é a língua mais falada na África?",
    answer: "Swahili",
    options: [
      "Swahili",
      "Francês",
      "Inglês",
      "Árabe",
    ],
  },
  {
    question: "Qual é a cidade mais populosa da África?",
    answer: "Lagos (Nigéria)",
    options: [
      "Cairo (Egito)",
      "Lagos (Nigéria)",
      "Kinshasa (República Democrática do Congo)",
      "Joanesburgo (África do Sul)",
    ],
  },
  {
    question: "Qual é a maior economia da África?",
    answer: "Nigéria",
    options: [
      "Nigéria",
      "África do Sul",
      "Egito",
      "Argélia",
    ],
  },
  {
    question: "Qual é o prato tradicional da culinária da Etiópia?",
    answer: "Doro Wat",
    options: [
      "Jollof Rice",
      "Hot Dog",
      "Doro Wat",
      "Cuscuz",
    ],
  },
  {
    question: "Qual é o famoso festival de música e artes realizado anualmente em Zanzibar?",
    answer: "Festival de Sauti za Busara",
    options: [
      "Festival de Lamu",
      "Festival de Lake of Stars",
      "Festival de Sauti za Busara",
      "Festival de Bushfire",
    ],
  },
  {
    question: "Á África é um:",
    answer: "Um Continente",
    options: [
      "Um País",
      "Um Planeta",
      "Um Continente",
      "Uma Cidade",
    ],
  },
  {
    question: "Qual país africano tem uma bandeira verde, amarela e vermelha com uma estrela negra no centro?",
    answer: "Gana",
    options: [
      "Quênia",
      "Angola",
      "Etiópia",
      "Gana",
    ],
  },
  {
    question: "Qual país africano possui uma bandeira com as cores verde, amarelo e vermelho, e no centro um emblema de uma estrela amarela?",
    answer: "Burkina Faso",
    options: [
      "Burkina Faso",
      "Angola",
      "Quênia",
      "Gana",
    ],
  },
  {
    question: "Qual país africano possui uma bandeira composta por três faixas horizontais nas cores vermelho, amarelo e verde, com um triângulo preto no canto esquerdo?",
    answer: "Camarões",
    options: [
      "Camarões",
      "Etiópia",
      "Burkina Faso",
      "Gana",
    ],
  },
  {
    question: "Qual país africano possui uma bandeira com as cores verde, amarelo e vermelho, e uma estrela de cinco pontas no centro?",
    answer: "Etiópia",
    options: [
      "Gana",
      "Quênia",
      "África do Sul",
      "Etiópia",
    ],
  },
  {
    question: "Qual país africano possui uma bandeira com três faixas horizontais nas cores vermelho, amarelo e verde, e um emblema de estrela e meia-lua no canto superior esquerdo?",
    answer: "Mauritânia",
    options: [
      "Senegal",
      "Mali",
      "Burkina Faso",
      "Mauritânia",
    ],
  },
  {
    question: "Qual esporte é considerado o mais popular na África do Sul e foi um dos fatores importantes na superação do apartheid no país?",
    answer: "Rugby",
    options: [
      "Futebol",
      "Rugby",
      "Críquete",
      "Atletismo",
    ],
  },
  {
    question: 'Em qual país africano o esporte do "Kora" é popular, uma competição que envolve canoagem em pequenas embarcações de madeira?',
    answer: "Senegal",
    options: [
      "Senegal",
      "Tanzânia",
      "Angola",
      "Costa do Marfim",
    ],
  },
  {
    question: 'Em qual país africano o esporte do "Mancala" é popular, um jogo de tabuleiro estratégico jogado com sementes ou pedras?',
    answer: "Gana",
    options: [
      "Egito",
      "Marrocosa",
      "África do Sul",
      "Gana",
    ],
  },
  {
    question: 'Qual é o país africano famoso por abrigar o Monte Kilimanjaro?',
    answer: "Tanzânia",
    options: [
      "Egito",
      "Uganda",
      "Tanzânia",
      "Zâmbia",
    ],
  },
  {
    question: 'Qual é o animal mais rápido do mundo, encontrado na África?',
    answer: "Guepardo",
    options: [
      "Leão",
      "Elefante",
      "Guepardo",
      "Rinoceronte",
    ],
  },
  {
    question: 'Qual animal é conhecido como "Rei da Selva"?',
    answer: "Leão",
    options: [
      "Elefante",
      "Rinoceronte",
      "Girafa",
      "Leão",
    ],
  },
  {
    question: 'Qual animal possui dois chifre longo e curvado na cabeça?',
    answer: "Órix-de-cimitarra",
    options: [
      "Hipopótamo",
      "Seu Amigo",
      "Rinoceronte",
      "Órix-de-cimitarra",
    ],
  },
  {
    question: 'Qual animal é conhecido por sua velocidade e habilidade de salto?',
    answer: "Guepardo",
    options: [
      "Zebra",
      "Leopardo",
      "Elefante",
      "Guepardo",
    ],
  },
  {
    question: 'Qual animal é o maior mamífero terrestre?',
    answer: "Elefante",
    options: [
      "Elefante",
      "Leopardo",
      "Leão",
      "Hiena",
    ],
  },
  {
    question: 'Qual animal é conhecido por sua tromba longa e flexível?',
    answer: "Elefante",
    options: [
      "Girafa",
      "Leopardo",
      "Rinoceronte",
      "Elefante",
    ],
  },
  {
    question: 'Qual animal é conhecido como "o assassino silencioso" por sua abordagem furtiva e ataques mortais?',
    answer: "Crocodilo do Nilo",
    options: [
      "Crocodilo do Nilo",
      "Leopardo",
      "Tubarão",
      "Leão",
    ],
  },
  {
    question: 'Qual animal é responsável pelo maior número de mortes na África a cada ano?',
    answer: "Hipopótamo",
    options: [
      "Leão",
      "Elefante",
      "Rinoceronte",
      "Hipopótamo",
    ],
  },
  {
    question: 'Qual animal é considerado um dos mais venenosos do mundo e é encontrado em várias regiões da África?',
    answer: "Hipopótamo",
    options: [
      "Mosquito",
      "Cobra Mamba Negra",
      "Escorpião",
      "Aranha Armadeira",
    ],
  },
  {
    question: 'Qual animal é conhecido por sua agressividade e por ser responsável por muitos ataques a seres humanos na África?',
    answer: "Leão",
    options: [
      "Leopardo",
      "Crocodilo do Nilo",
      "Rinoceronte",
      "Leão",
    ],
  },
  {
    question: 'Qual animal possui um veneno neurotóxico altamente letal e é temido na região da África Subsaariana?',
    answer: "Mosca Tse-Tse",
    options: [
      "Mosca Tse-Tse",
      "Vespa-do-mar",
      "Escorpião Imperador",
      "Serpente Fierce Snake",
    ],
  },
  {
    question: 'Qual país africano é conhecido como o maior produtor de petróleo do continente?',
    answer: "Nigéria",
    options: [
      "Nigéria",
      "Líbia",
      "Argélia",
      "Angola",
    ],
  },
  {
    question: 'Qual país africano é o maior exportador mundial de ouro?',
    answer: "Gana",
    options: [
      "África do Sul",
      "Gana",
      "Tanzânia",
      "Mali",
    ],
  },
  {
    question: 'Qual país africano é líder na produção e exportação de diamantes?',
    answer: "Botsuana",
    options: [
      "Botsuana",
      "África do Sul",
      "República Democrática do Congo",
      "Namíbia",
    ],
  },
  {
    question: 'Qual país africano é conhecido por suas reservas de gás natural e é considerado um importante fornecedor para o mercado europeu?',
    answer: "Argélia",
    options: [
      "Moçambique",
      "Egito",
      "Argélia",
      "Tanzânia",
    ],
  },
  {
    question: 'Qual país africano tem a maior economia do continente e é membro do grupo BRICS?',
    answer: "África do Sul",
    options: [
      "Moçambique",
      "África do Sul",
      "Egito",
      "Quênia",
    ],
  },
  {
    question: 'Qual é o instrumento musical de cordas mais famoso da África Ocidental?',
    answer: "Kora",
    options: [
      "Djembe",
      "Kora",
      "Mbira",
      "Kalimba",
    ],
  },
  {
    question: 'Qual é o estilo de dança tradicional do povo Zulu, da África do Sul?',
    answer: "Indlamu",
    options: [
      "Hula",
      "Samba",
      "Kizomba",
      "Indlamu",
    ],
  },
  {
    question: 'Quem é o autor do famoso romance "Things Fall Apart" (O Mundo se Despedaça), que retrata a vida e cultura igbo na Nigéria?',
    answer: "Chinua Achebe",
    options: [
      "Chinua Achebe",
      "Wole Soyinka",
      "Ngugi wa Thiong'o",
      "Chimamanda Ngozi Adichie",
    ],
  },
  {
    question: 'Qual é o estilo de arte em que os artistas da tribo Ndebele, da África do Sul e Zimbábue, pintam padrões geométricos em casas e objetos?',
    answer: "Ndebele Art",
    options: [
      "Batik",
      "Tingatinga",
      "Adinkra",
      "Ndebele Art",
    ],
  },
  {
    question: 'Qual é o festival anual realizado no Senegal, conhecido por sua celebração da música, dança e cultura africana?',
    answer: "Festival de Saint-Louis",
    options: [
      "Festival de Timbuktu",
      "Festival de Essaouira",
      "Festival de Fès",
      "Festival de Saint-Louis",
    ],
  },
  {
    question: 'Qual é o animal da África que sempre está pronto para uma festa?',
    answer: "Hiena-risonha",
    options: [
      "Hiena-risonha",
      "Elefante dançante",
      "Leão com senso de humor",
      "Rinoceronte brincalhão",
    ],
  },
  {
    question: 'Qual é o animal da África que adora fazer piadas?',
    answer: "Macaco palhaço",
    options: [
      "Hipopótamo hilário",
      "Girafa engraçada",
      "Rinoceronte com senso de humor",
      "Macaco palhaço",
    ],
  },
  {
    question: 'Qual é o propósito principal das máscaras africanas?',
    answer: "Realizar rituais religiosos",
    options: [
      "Proteger o rosto contra o sol",
      "Realizar rituais religiosos",
      "Esconder a identidade do usuário",
      "Decorar as paredes das casas",
    ],
  },
  {
    question: 'Qual é o material comum usado na fabricação das máscaras africanas?',
    answer: "Madeira",
    options: [
      "Madeira",
      "Metal",
      "Vidro",
      "Cerâmica",
    ],
  },
  {
    question: 'As máscaras africanas são frequentemente usadas em qual tipo de evento?',
    answer: "Funerais",
    options: [
      "Casamentos",
      "Funerais",
      "Festas de aniversário",
      "Reuniões de negócios",
    ],
  },
  {
    question: 'Qual é o significado simbólico das máscaras africanas?',
    answer: "Proteção contra espíritos malignos",
    options: [
      "Proteção contra espíritos malignos",
      "Status social do usuário",
      "Expressão de emoções humanas",
      "Representação de animais sagrados",
    ],
  },
  {
    question: 'Em qual região da África as máscaras são mais proeminentes na cultura?',
    answer: "África Ocidental",
    options: [
      "África Austral",
      "África Oriental",
      "África Ocidental",
      "África Central",
    ],
  },
];

// se o botão startQuiz for clicado
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); // mostrar info box
};

// se o botão exitQuiz for clicado
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // esconder info box
};

// se o botão continueQuiz for clicado
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // esconder info box
  quiz_box.classList.add("activeQuiz"); // mostrar quiz box
  showQuetions(0); // chamando a função showQuestions
  queCounter(1); // passando 1 parâmetro para queCounter
  startTimer(25); // chamando a função startTimer
  startTimerLine(0); // chamando a função startTimerLine
};

let timeValue = 25;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// se o botão restartQuiz for clicado
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); // mostrar quiz box
  result_box.classList.remove("activeResult"); // esconder result box
  timeValue = 25;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); // chamando a função showQuestions
  queCounter(que_numb); // passando o valor que_numb para queCounter
  clearInterval(counter); // limpar counter
  clearInterval(counterLine); // limpar counterLine
  startTimer(timeValue); // chamando a função startTimer
  startTimerLine(widthValue); // chamando a função startTimerLine
  timeText.textContent = "Tempo Restante"; // alterar o texto de timeText para Tempo Restante
  next_btn.classList.remove("show"); // esconder o botão next
};

// se o botão quitQuiz for clicado
quit_quiz.onclick = () => {
  window.location.reload(); // recarregar a página atual
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// se o botão Next Que for clicado
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    // se o contador de perguntas for menor que o comprimento total das perguntas
    que_count++; // incrementar o valor do contador de perguntas
    que_numb++; // incrementar o valor do contador de números das perguntas
    showQuetions(que_count); // chamando a função showQuestions
    queCounter(que_numb); // passando o valor do contador de números das perguntas para queCounter
    clearInterval(counter); // limpar counter
    clearInterval(counterLine); // limpar counterLine
    startTimer(timeValue); // chamando a função startTimer
    startTimerLine(widthValue); // chamando a função startTimerLine
    timeText.textContent = "Tempo Restante"; // alterar o texto de timeText para Tempo Restante
    next_btn.classList.remove("show"); // esconder o botão next
  } else {
    clearInterval(counter); // limpar counter
    clearInterval(counterLine); // limar counterLine
    showResult(); // chamando a função showResult
  }
};

// obtendo perguntas e opções do array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  // criando uma nova tag span e div para a pergunta e opção e passando o valor usando o índice do array
  let que_tag =
    "<span>" +
    (index + 1) +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; // adicionando a nova tag span dentro de que_tag
  option_list.innerHTML = option_tag; // adicionando a nova tag div dentro de option_tag

  const option = option_list.querySelectorAll(".option");

  // definindo o atributo onclick para todas as opções disponíveis
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// criando as novas tags div para os ícones
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// se o usuário clicar em uma opção
function optionSelected(answer) {
  clearInterval(counter); // limpar counter
  clearInterval(counterLine); // limpar counterLine
  let userAns = answer.textContent; // obtendo a opção selecionada pelo usuário
  let correcAns = questions[que_count].answer; // obtendo a resposta correta do array
  const allOptions = option_list.children.length; // obtendo todos os itens de opção

  if (userAns == correcAns) {
    // se a opção selecionada pelo usuário for igual à resposta correta do array
    userScore += 1; // incrementar o valor do userScore em 1
    answer.classList.add("correct"); // adicionar a cor verde à opção selecionada correta
    answer.insertAdjacentHTML("beforeend", tickIconTag); // adicionar o ícone de marca de seleção à opção selecionada correta
    console.log("Resposta Correta");
    console.log("Suas respostas corretas = " + userScore);
  } else {
    answer.classList.add("incorrect"); // adicionar a cor vermelha à opção selecionada correta
    answer.insertAdjacentHTML("beforeend", crossIconTag); // adicionar o ícone de cruz à opção selecionada correta
    console.log("Resposta Errada");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        // se houver uma opção que corresponde à resposta do array
        option_list.children[i].setAttribute("class", "option correct"); // adicionar a cor verde à opção correspondente
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adicionar o ícone de marca de seleção à opção correspondente
        console.log("Resposta correta selecionada automaticamente.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
  }
  next_btn.classList.add("show"); // mostrar o botão next se o usuário selecionar alguma opção
}

function showResult() {
  info_box.classList.remove("activeInfo"); // esconder info box
  quiz_box.classList.remove("activeQuiz"); // esconder quiz box
  result_box.classList.add("activeResult"); // mostrar result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    // se o usuário acertar mais de 3 perguntas
    // criando uma nova tag span e passando o número de pontos do usuário e o número total de perguntas
    let scoreTag =
      "<span>Parabéns! Você acertou <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; // adicionando a nova tag span dentro de scoreText
  } else if (userScore > 1) {
    // se o usuário acertar mais de 1 pergunta
    let scoreTag =
      "<span>Legal! Você acertou <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // se o usuário acertar menos de 1 pergunta
    let scoreTag =
      "<span>Desculpe, você acertou apenas <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; // alterando o valor de timeCount com o valor de tempo
    time--; // decrementando o valor do tempo
    if (time < 9) {
      // se o tempo for menor que 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; // adicionar um 0 antes do valor do tempo
    }
    if (time < 0) {
      // se o tempo for menor que 0
      clearInterval(counter); // limpar counter
      timeText.textContent = "Tempo Esgotado"; // alterar o texto de timeText para Tempo Esgotado
      const allOptions = option_list.children.length; // obtendo todos os itens de opção
      let correcAns = questions[que_count].answer; // obtendo a resposta correta do array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          // se houver uma opção que corresponde à resposta do array
          option_list.children[i].setAttribute("class", "option correct"); // adicionar a cor verde à opção correspondente
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adicionar o ícone de marca de seleção à opção correspondente
          console.log("Tempo Esgotado: Resposta corretaselecionada automaticamente.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // uma vez que o usuário selecionou uma opção, desabilitar todas as opções
      }
      next_btn.classList.add("show"); // mostrar o botão next se o usuário selecionar alguma opção
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 47);
  function timer() {
    time += 1; // incrementar o valor do tempo em 1
    time_line.style.width = time + "px"; // aumentar a largura da time_line com px pelo valor do tempo
    
    // Verificar a largura da tela
    if (window.innerWidth < 600) {
      clearInterval(counterLine); // Limpar counterLine
    }
    
    if (time > 549) {
      // se o valor do tempo for maior que 549
      clearInterval(counterLine); // limpar counterLine
    }
  }
}


// Função para embaralhar o array de perguntas
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para gerar um conjunto aleatório de perguntas do conjunto maior
function generateRandomQuestions() {
  shuffleQuestions(questions); // Embaralhar as perguntas
  return questions.slice(0, 10); // Selecionar as primeiras 10 perguntas
}

// se o botão continueQuiz for clicado
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // esconder info box
  quiz_box.classList.add("activeQuiz"); // mostrar quiz box
  questions = generateRandomQuestions(); // Gerar um conjunto aleatório de perguntas
  showQuetions(0); // chamando a função showQuestions
  queCounter(1); // passando 1 parâmetro para queCounter
  startTimer(25); // chamando a função startTimer
  startTimerLine(0); // chamando a função startTimerLine
};

// se o botão restartQuiz for clicado
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); // mostrar quiz box
  result_box.classList.remove("activeResult"); // esconder result box
  timeValue = 25;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  questions = generateRandomQuestions(); // Gerar um conjunto aleatório de perguntas
  showQuetions(que_count); // chamando a função showQuestions
  queCounter(que_numb); // passando o valor que_numb para queCounter
  clearInterval(counter); // limpar counter
  clearInterval(counterLine); // limpar counterLine
  startTimer(timeValue); // chamando a função startTimer
  startTimerLine(widthValue); // chamando a função startTimerLine
  timeText.textContent = "Tempo Restante"; // alterar o texto de timeText para Tempo Restante
  next_btn.classList.remove("show"); // esconder o botão next
};

function queCounter(index) {
  // criando uma nova tag span e passando o número da pergunta e o número total de perguntas
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    questions.length +
    "</p> Perguntas</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; // adicionando a nova tag span dentro de bottom_ques_counter
}