
import { DraggableItem } from './types';

export const TOTAL_PAGES = 11;

export const PERSONAL_DATA_ITEMS: DraggableItem[] = [
    { id: '1', content: 'Nome Completo', isPersonal: true },
    { id: '2', content: 'Cor Favorita', isPersonal: false },
    { id: '3', content: 'Número de Telefone', isPersonal: true },
    { id: '4', content: 'Marca de Carro', isPersonal: false },
    { id: '5', content: 'Morada de Casa', isPersonal: true },
    { id: '6', content: 'Comida Preferida', isPersonal: false },
];
export const PERSONAL_DATA_MAX_SCORE = PERSONAL_DATA_ITEMS.length;

export const RISK_POSTS = [
    { id: 1, author: 'Ana Silva', text: 'Mal posso esperar pelas férias! Vamos para o Algarve de 1 a 15 de agosto. A casa vai ficar vazia!', isRisk: true },
    { id: 2, author: 'Bruno Costa', text: 'Adorei o concerto de ontem! A música estava fantástica.', isRisk: false },
    { id: 3, author: 'Carla Dias', text: 'O meu novo número de telemóvel é 912345678. Adicionem!', isRisk: true },
    { id: 4, author: 'David Reis', text: 'Parabéns a mim! Finalmente 12 anos. A festa é em minha casa na Rua das Flores, nº 123, às 15h.', isRisk: true },
    { id: 5, author: 'Eva Mendes', text: 'O meu cão é o mais fofo do mundo!', isRisk: false },
];
export const DETECT_RISK_MAX_SCORE = RISK_POSTS.filter(p => p.isRisk).length;

export const PASSWORD_PITFALL_ITEMS = {
    passwords: [
        { id: 'p1', content: '1234567' },
        { id: 'p2', content: 'password123' },
        { id: 'p3', content: 'JoaoSantos2010' },
        { id: 'p4', content: 'gato' },
    ],
    categories: [
        { id: 'c1', title: 'Usa Sequências', correctPasswordIds: ['p1'] },
        { id: 'c2', title: 'Usa Dados Pessoais', correctPasswordIds: ['p3'] },
        { id: 'c3', title: 'Password Curta/Simples', correctPasswordIds: ['p2', 'p4'] },
    ]
};
export const MATCH_PITFALLS_MAX_SCORE = PASSWORD_PITFALL_ITEMS.passwords.length;


export const QUIZ_QUESTIONS = [
    {
        question: "Clica na palavra-passe que consideras ser mais forte:",
        options: ["F0rt3!#", "cavalo-amarelo-corre-no-campo"],
        correct: 1,
        explanation: "Frases longas (passphrases) são muito mais seguras e fáceis de memorizar do que palavras curtas com substituições complexas."
    },
    {
        question: "Clica na palavra-passe que consideras ser mais forte:",
        options: ["P@ssw0rd_Segur@", "xK!9$pZq-eR*b"],
        correct: 1,
        explanation: "Substituições óbvias (como @ por a, 0 por o) são facilmente adivinhadas por programas. A aleatoriedade real é muito mais segura."
    },
    {
        question: "Clica na palavra-passe que consideras ser mais forte:",
        options: ["qwert12345", "qW1eR2tY3uI4"],
        correct: 1,
        explanation: "Padrões de teclado são muito comuns e fáceis de quebrar. Uma mistura aleatória de letras e números é mais forte."
    },
    {
        question: "Clica na palavra-passe que consideras ser mais forte:",
        options: ["Lisboa-viagem-2024", "TigreAzulComeuPudim"],
        correct: 1,
        explanation: "Informações pessoais como locais de viagem e datas são mais fáceis de adivinhar. Uma frase aleatória e sem sentido é mais segura."
    },
    {
        question: "Clica na palavra-passe que consideras ser mais forte:",
        options: ["FacebookPass2025!", "7-yU!pZq_mB(c"],
        correct: 1,
        explanation: "Usar nomes de websites ou informações previsíveis na password torna-a vulnerável. A aleatoriedade é a chave."
    },
    {
        question: "Clica na palavra-passe que consideras ser mais forte:",
        options: ["Computador#123", "quatro-janelas-verdes-abertas"],
        correct: 1,
        explanation: "Mais uma vez, uma passphrase longa e memorável é exponencialmente mais forte do que uma palavra simples com números e um símbolo."
    }
];

export const QUIZ_MAX_SCORE = QUIZ_QUESTIONS.length;
