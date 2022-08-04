var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["padeiro"] = 2] = "padeiro";
    Profissao[Profissao["Padeiro"] = 3] = "Padeiro";
})(Profissao || (Profissao = {}));
var maria = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.atriz
};
var roberto = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
var laura = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
};
var carlos = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.padeiro
};
