// Configuration OAuth
const clientId = 'votre_client_id';
const clientSecret = 'votre_client_secret';
const authorizationUrl = 'https://github.com/login/oauth/authorize';
const tokenUrl = 'https://github.com/login/oauth/access_token';
const redirectUrl = 'https://votre-site.com/callback';

// Fonction pour obtenir le code d'autorisation OAuth
function getCode() {
    window.location.href = `${authorizationUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=public_repo`;
}

// Fonction pour echanger le code d'authorisation contre un jeton d'acces OAuth

async function swapCodeForToken(code) {
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', clientId);
    requestBody.append('client_secret', clientSecret);
    requestBody.append('code', code);
    requestBody.append('redirect_uri', redirectUrl);

    const reponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: requestBody
    });

    if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        console.log(`Token d'acces OAuthobtenu: ${accessToken}`)
        // utiliser l'acces_token pour acceder a des ressources protegees
    } else {
        console.error('Erreur');
    }
}

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
    swapCodeForToken(code);
} else {
    // si le code n'est pas present demarrer le processus d'authentification.
    getCode();
}