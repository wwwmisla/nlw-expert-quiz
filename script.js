const perguntas = [
    {
        pergunta: 'O que é JavaScript?',
        respostas: [
            'Uma linguagem de marcação',
            'Uma linguagem de programação',
            'Um estilo de dança',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a função do operador "+" em JavaScript?',
        respostas: [
            'Concatenar strings',
            'Realizar adição',
            'Acessar propriedades de um objeto',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a maneira correta de se referir a um elemento HTML usando JavaScript?',
        respostas: [
            'document.element("id")',
            'document.getElementByName("nome")',
            'document.getElementById("id")',
        ],
        correta: 2
    },
    {
        pergunta: 'O que é um loop "for" em JavaScript?',
        respostas: [
            'Uma maneira de percorrer um array',
            'Um tipo de estrutura de controle de fluxo',
            'Uma função de impressão',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a função do operador "===" em JavaScript?',
        respostas: [
            'Comparar valores e tipos',
            'Atribuir valores',
            'Concatenar strings',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a diferença entre "let" e "const" em JavaScript?',
        respostas: [
            'Não há diferença',
            'let é usado para declarações de variáveis ​​globais, enquanto const é usado para locais',
            'let pode ser reatribuído, enquanto const não pode',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a função da declaração "return" em uma função JavaScript?',
        respostas: [
            'Encerrar a execução da função',
            'Retornar um valor da função',
            'Iniciar a função',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a maneira correta de comentar uma única linha em JavaScript?',
        respostas: [
            '// Este é um comentário de uma linha',
            '/** Este é um comentário de uma linha */',
            '<!-- Este é um comentário de uma linha -->',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é uma função de callback em JavaScript?',
        respostas: [
            'Uma função que é chamada após um determinado tempo',
            'Uma função que é passada como argumento para outra função e é executada após algum evento',
            'Uma função que é chamada quando ocorre um erro',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o método em JavaScript usado para remover o último elemento de um array e retorná-lo?',
        respostas: [
            'pop()',
            'shift()',
            'splice()',
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}