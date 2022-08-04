var funcionarioObj = {};
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(funcionarioObj.nome);
