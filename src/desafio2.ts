enum Profissao {
    atriz,
    Atriz,
    padeiro,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const maria: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.atriz
}

const roberto: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

const laura: Pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
}

const carlos: Pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.padeiro
}