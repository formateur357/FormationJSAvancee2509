class EventManager {
    constructor() {
        this.eventHandlers = {}
    }

    addEventListener(elementId, eventType, callback) {
        // Vérifie si l'objet eventHandlers a déjà une propriété pour cet élément HTML
        if (!this.eventHandlers[elementId]) {
            this.eventHandlers[elementId] = {};
        }

        // Vérifie si l'objet eventHandlers pour cet élément HTML a déjà une entrée pour ce type d'événement
        if (!this.eventHandlers[elementId][eventType]) {
            this.eventHandlers[elementId][eventType] = [];
        }

        // Ajoute la fonction de rappel (callback) à la liste des gestionnaires d'événements pour cet élément et ce type d'événement
        this.eventHandlers[elementId][eventType].push(callback);

        // Récupère l'élément HTML correspondant à l'ID fourni
        const element = document.getElementById(elementId);

        // Attache le gestionnaire d'événements à l'élément HTML
        element.addEventListener(eventType, callback);
    }

    removeEventListener(elementId, eventType, callback) {
        // Vérifie si l'objet eventHandlers a une propriété pour cet élément HTML et ce type d'événement
        if (
            this.eventHandlers[elementId] &&
            this.eventHandlers[elementId][eventType]
        ) {
            // Recherche l'indice de la fonction de rappel dans la liste des gestionnaires d'événements
            const index = this.eventHandlers[elementId][eventType].indexOf(callback);

            // Si l'indice n'est pas -1, cela signifie que la fonction de rappel a été trouvée dans la liste
            if (index !== -1) {
                // Supprime la fonction de rappel de la liste des gestionnaires d'événements
                this.eventHandlers[elementId][eventType].splice(index, 1);
            }
        }

        // Récupère l'élément HTML correspondant à l'ID fourni
        const element = document.getElementById(elementId);
        // Supprime le gestionnaire d'événements de l'élément HTML
        element.removeEventListener(eventType, callback);
    }
}

// class Button{
//     constructor(id) {
//         this.buttonElement = document.getElementById(id);
//         this.buttonElement.addEventListener('click', this.handleClick.bind(this))
//     }

//     handleClick(event) {
//         console.log('Bouton clique !');
//     }
// }

function handleClickEvent() {
    console.log('Bouton clique !');
}
// const monbouton = new Button('monBouton');
const eventManager = new EventManager();

// Ajoute un gestionnaire d'événements pour le bouton avec l'ID "monBouton"
eventManager.addEventListener('monBouton', click, handleClickEvent)

// Pour supprimer l'écouteur d'événement après un certain temps (5 secondes dans cet exemple)
setTimeout(() => {
    eventManager.removeEventListener('monBoutomn', 'click', handleClickEvent)
})