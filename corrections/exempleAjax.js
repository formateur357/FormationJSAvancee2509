// exemple d'utilisation d'XMLHttpRequest
let xhr = new XMLHttpRequest();

// prepare puis on envoie la requete
xhr.open('GET', 'monfichier.txt', true);
xhr.send();

// on gere la reponse en definissant une fonction de rappel
xhr.onreadystatechange = () => {
    if (CharacterData.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        // faire quelque chose avec les donnees.
    }
};

// AJAX best pratice for asp.net razor page
/*
Lorsque vous utilisez Ajax dans une application ASP.NET Razor, vous pouvez suivre plusieurs bonnes pratiques pour garantir un code propre et efficace. Voici quelques directives pour travailler avec Ajax en ASP.NET Razor :

JavaScript non intrusif : Séparez votre code JavaScript de vos vues Razor et utilisez des techniques de JavaScript non intrusif. Placez votre code JavaScript dans des fichiers .js séparés et liez-les depuis vos vues Razor. Cela permet de maintenir votre code organisé et favorise la maintenabilité.

Utilisez la bibliothèque jQuery Unobtrusive Ajax : ASP.NET MVC inclut une bibliothèque jQuery Unobtrusive Ajax qui simplifie la gestion des requêtes Ajax. Elle vous permet d'utiliser des attributs de données pour spécifier le comportement des liens et des formulaires Ajax. Cette bibliothèque encourage un HTML propre et sémantique.

Exemple :

html
@Ajax.ActionLink("Charger les données", "ObtenirDonnees", new AjaxOptions { UpdateTargetId = "resultatDiv" })

Indicateurs de progression : Fournissez des retours d'information aux utilisateurs en affichant des indicateurs de chargement ou des barres de progression lors de l'envoi de requêtes Ajax. Cela contribue à améliorer l'expérience utilisateur.

Dégradation gracieuse : Assurez-vous que votre application fonctionne même lorsque JavaScript est désactivé dans le navigateur. Utilisez des techniques d'amélioration progressive pour garantir que les fonctionnalités essentielles restent accessibles.

Validation des données : Validez toujours les données côté client et côté serveur. Ne vous fiez pas uniquement à la validation côté client, car elle peut être contournée. La validation côté serveur est essentielle pour la sécurité et l'intégrité des données.

Sécurisation de vos points de terminaison : Protégez vos points de terminaison Ajax contre l'accès non autorisé. Utilisez des mécanismes d'authentification et d'autorisation pour vous assurer que seuls les utilisateurs autorisés peuvent effectuer des requêtes.

Gestion des erreurs : Mettez en place la gestion des erreurs pour les requêtes Ajax. Utilisez des blocs try-catch dans votre code côté serveur pour intercepter les exceptions et renvoyer des réponses d'erreur appropriées avec des codes d'état et des messages d'erreur.

Utilisation de jetons AJAX pour la sécurité : Si votre application utilise des jetons anti-falsification pour se protéger contre les attaques CSRF, assurez-vous d'inclure ces jetons dans vos requêtes Ajax. Vous pouvez utiliser l'assistant @Html.AntiForgeryToken() pour générer et valider les jetons.

Optimisation du transfert de données : Minimisez la quantité de données transférées sur le réseau. Utilisez JSON pour la sérialisation des données, activez la compression sur votre serveur et envisagez d'utiliser des modèles côté client pour le rendu des données.

Mise en cache côté client : Exploitez la mise en cache côté client pour les ressources statiques et les données qui ne changent pas fréquemment. Utilisez les en-têtes de mise en cache HTTP appropriés et des politiques de mise en cache.

Tests et débogage : Testez soigneusement la fonctionnalité Ajax. Utilisez les outils de développement du navigateur pour inspecter les requêtes réseau, déboguer le code JavaScript et simuler différentes conditions réseau.

Journalisation et surveillance : Mettez en place la journalisation côté serveur pour les requêtes Ajax et les actions côté serveur. Cela aide à la détection des erreurs et à la surveillance du comportement de l'application en production.

Réactivité sur mobile : Assurez-vous que vos interactions Ajax sont réactives et fonctionnent bien sur les appareils mobiles. Testez votre application sur différentes tailles d'écran et sur différents appareils.

Réutilisation de code : Encapsulez les fonctionnalités Ajax courantes dans des fonctions ou des composants réutilisables. Cela peut réduire la duplication du code et rendre votre application plus maintenable.

Documentation : Documentez vos points de terminaison Ajax ainsi que leurs entrées et sorties attendues. Fournissez une documentation claire et concise pour les autres développeurs qui pourraient travailler sur le projet.
*/