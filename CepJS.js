var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var AddressHandler = function () {

	this.address =  { 
		cep: String,
		logradouro: String,
		complemento: String,
		bairro: String,
		localidade: String,
		uf: String,
		unidade: String,
		ibge: String,
		gia: String 
	};

	this.getAddress = function(cep) {
		var apiEcho =  doGet(getPropperURL(cep));
		this.address = JSON.parse(apiEcho);
		return this.address;
	};

	var doGet = function(url) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", url, false);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	};

	var getPropperURL = function(cep) {
		return "https://viacep.com.br/ws/" + cep + "/json";
	};

};

