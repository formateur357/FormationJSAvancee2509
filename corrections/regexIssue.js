const jsonString =  "{ \"id\": 1, \"result\": [ { \"status\": { \"code\": 0, \"message\": \"OK\" }, \"url\": \"\\/sys\\/login\\/user\" } ]}"


// Exercice : Supprimer les '\' et modifier les " en ' sauf les " encadrant l'objet.

// supprimer les caracteres '\'

const stringWithoutBackslashes = jsonString.replace(/\\/g, '');

// remplacer les guillemets double par des simple, aà ;'exeception de ceux encadrants la string

const modifiedString = stringWithoutBackslashes.replace(/"([^"]*)"/g, "'$1'");

console.log(modifiedString);

// { 'id': 1, 'result': [ { 'status': { 'code': 0, 'message': 'OK' }, 'url': '/sys/login/user' } ]}