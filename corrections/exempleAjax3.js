// Informations d'authentification

const username = 'username';
const password = 'mdp';

const apiUrl = "https://exemple.com/api/donnees_protegees"
// URL de l'API
const basicAuthHeader = `Basic ${btoa(username + ':' + password)}`;

// Configuration de la requete fetch

const requestOptions = {
    method: 'GET', 
    headers: {
        'Authorization': basicAuthHeader,
        'Content-Type': 'application/json'
    }
};

// Effectuez la requete fetch
fetch(apiUrl, requestOptions)
    .then(response => {
        if (!responce.ok) {
            throw new Error(`Erreur lors de la requete ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })