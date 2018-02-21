# CepJS
JS API to get address with cep.
You just have to put the cep and API'll return address for you.

## Depdendencies on NodeJS
npm install xmlhttprequest

## Ex of use

var addressHandler = new AddressHandler();

var cep = 000000;

var address = addressHandler.getAddress(cep);

