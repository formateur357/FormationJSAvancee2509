//Exemple de creation et de consommation de promesses.

const myPromise = new Promise((resolve, reject) => {
    //code asynchrone ici
    if (true/* operation reussi*/) {
        resolve("Resultat reussi.");
    } else {
        reject("Une erreur s'est produite.");
    }
});

myPromise
.then((result) => {
    console.log(`Reussi: ${result}`);
})
.catch((error) => {
    console.error(`Erreur: ${error}`);
})

// exemple d'utilisation de fetch

fetch('https://api.exemple.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(`Error ${error}`))

fetch("https://api.exemple.com/data", {
  method: "POST",
  body: JSON.stringify({ key: "value" }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(`Error ${error}`));

async function fetchData() {
    try {
        const response = await fetch('https://api.exemple.com/first');
        const data = await response.json();
        const response2 = await fetch('https://api.exemple.com/second');
        const data2 = await response2.json();
        console.log(data, data2);
    } catch (error) {
        console.error('Erreur :', error);
    }
}

fetchData()

/*
Throttle or Debounce Requests: If your application makes frequent Ajax requests, consider using throttling or debouncing techniques to limit the frequency of requests. This can help reduce server load and improve user experience.
*/