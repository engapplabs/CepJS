function meu_callback(conteudo) {
        if (!("erro" in conteudo))
            console.log(conteudo);
        else
            alert("CEP não encontrado.");
    }

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var url = "https://viacep.com.br/ws/57055800/json"

var response = httpGet(url);
//console.log(response);

var AddressHandler = function () {
	this.getAddress = function(cep) {
		return httpGet(this.getPropperURL(cep));
	};

	this.getPropperURL = function(cep) {
		return "https://viacep.com.br/ws/" + cep + "/json";
	};
};

var x = new AddressHandler();



console.log(x.getAddress("57055-800"))
