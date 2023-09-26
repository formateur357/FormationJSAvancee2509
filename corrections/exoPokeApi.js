/*
Exercice : Affichage des détails de Pokémon

Créez une page HTML simple avec un bouton "Charger les détails du Pokémon" et une zone de texte vide pour afficher les détails du Pokémon.

Utilisez JavaScript pour accomplir les tâches suivantes :

Lorsque l'utilisateur clique sur le bouton "Charger les détails du Pokémon", envoyez une requête GET à la PokeAPI pour obtenir des informations sur un Pokémon spécifique (par exemple, le Pokémon numéro 1, Bulbasaur).

Utilisez l'API Fetch pour effectuer la requête. Assurez-vous de gérer les erreurs de manière appropriée (en utilisant try/catch ou en vérifiant le statut de la réponse).

Affichez les détails du Pokémon dans la zone de texte. Vous pouvez inclure des informations telles que le nom, le type, la taille, le poids, etc.

Utilisez des fonctions asynchrones et "await" pour simplifier le code.

Assurez-vous que votre code est bien commenté pour expliquer chaque étape.

Conseils :

Vous devrez utiliser l'URL de la PokeAPI pour récupérer les données du Pokémon souhaité. L'URL ressemblera à ceci : https://pokeapi.co/api/v2/pokemon/1/ pour obtenir les données de Bulbasaur.

N'oubliez pas de gérer les erreurs, par exemple, si la réponse HTTP n'a pas le statut 200 OK.

Vous pouvez utiliser des éléments HTML tels que <button> pour le bouton et <textarea> pour afficher les détails du Pokémon.

Pour analyser la réponse JSON renvoyée par la PokeAPI, utilisez response.json().

Testez votre code en cliquant sur le bouton pour vous assurer que les détails du Pokémon sont correctement affichés.
*/