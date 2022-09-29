function Jogo() {
	var dado1;
	var dado2;
	var dadoRodado = false;

	var filaLeilao = [];
	var maiorOfertador;
	var maiorOferta;
	var ofertaAtual = 1;
	var localLeiloado;

	this.rodarDado = function() {
		dado1 = Math.floor(Math.random() * 6) + 1;
		dado2 = Math.floor(Math.random() * 6) + 1;
		dadoRodado = true;
	};

	this.resetDice = function() {
		dadoRodado = false;
	};
}
