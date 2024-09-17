const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você pratica volei?",
        alternativas: [
            {
                texto: "Sim,eu pratico!",
                afirmacao: "Que bom que você pratica pois, Fortalece o corpo; Aumenta a flexibilidade; Auxilia na manutenção do peso; Alivia o estresse."
            },
            {
                texto: "Não pratico, sou sedentario(a)",
                afirmacao: "Que pena, praticar algum esporte como o volei libera uma quantidade de adrenalina que ajuda a aliviar o estresse, "
            }
        ]
    },
    {
        enunciado: "Quando foi criado o volei?",
        alternativas: [
            {
                texto: "em 1895 nos Estados Unidos da América",
                afirmacao: "O vôlei foi criado em 9 de fevereiro de 1895 por William George Morgan nos Estados Unidos."
            },
            {
                texto: "Em 1970 nos Estados Unidos da América",
                afirmacao: "Na década de 1970, o Vôlei do ECP tornou-se um dos mais importantes centros de formação do Brasil, cedendo atletas principalmente das categorias de base para as seleções paulista e brasileira."
            }
        ]
    },
    {
        enunciado: "Você acha que nessa época, as pessoas comuns poderiam praticar volei?",
        alternativas: [
            {
                texto: "Sim, pois o volei ja era popular des a criação",
                afirmacao: "Em 1900, o esporte chegou ao canadá (primeiro pais fora dos Estados Unidos), sendo posterioramente desenvolvido em outros países."
            },
            {
                texto: "Não, pois o volei se tornou popular em 1900",
                afirmacao: "Em 1900, o esporte chegou ao canadá (primeiro pais fora dos Estados Unidos), sendo posterioramente desenvolvido em outros países.",
            }
        ]
    },
    {
        enunciado: "Quantas jogadores tem em uma partida de voleibol?",
        alternativas: [
            {
                texto: "pode-se ter até 6 jogadores ",
                afirmacao: "Por que é necessario ter Levantador, oposto, central, ponteiro e libero"
            },
            {
                texto: "pode-se ter até 8 jogadores ",
                afirmacao: "Os jogadores são designado as suas funções na quadra, como atacante, cortador, levantador, bloqueador, defesa e libero."
            }
        ]
    },
    {
        enunciado: "Quantos pontos tem cada set?",
        alternativas: [
            {
                texto: "os sets são desputados até 15 pontos",
                afirmacao: "os sets são desputados até 25 pontos (exceto no set de desempate que será disputado 15 pontos)"
            },
            {
                texto: "os sets são desputados até 25 pontos",
                afirmacao: "os sets são desputados até 25 pontos (exceto no set de desempate que será disputado 15 pontos)"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
