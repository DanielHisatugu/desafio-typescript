// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
    funcionarioObj.codigo = 10;
    funcionarioObj.nome = 'João';