// Exemple d'exportation
export function maFonction(){
    // ...
}

// Exemple d'importation
import { maFonction } from './mon-module';

/* Best Practice
Utiliser des modules ES6 :
Les modules ES6 offrent un mécanisme standardisé pour l'importation et l'exportation de code. Ils permettent de définir clairement les dépendances entre les différents modules de votre application.

Diviser le code en modules logiques :
La granularité de vos modules dépendra de la complexité de votre application. Il est important de trouver un équilibre entre la création de modules trop petits (ce qui peut entraîner une surcharge de gestion) et de modules trop gros (ce qui peut rendre le code difficile à comprendre).

Éviter les variables globales :
Les variables globales peuvent causer des problèmes de portée (scope) et rendre votre code difficile à suivre et à déboguer. Utilisez les modules pour encapsuler le code et limiter la visibilité des variables.

Utiliser des fichiers distincts :
La création de fichiers distincts pour chaque module facilite la navigation et la recherche de code. Veillez à organiser vos fichiers dans des dossiers logiques pour éviter la confusion.

Gérer les dépendances :
Utilisez un gestionnaire de paquets comme npm ou yarn pour gérer vos dépendances externes. Assurez-vous également de maintenir un fichier package.json bien organisé avec une liste claire de dépendances.

Éviter les effets de bord :
Les effets de bord sont des modifications inattendues ou non explicites du comportement de votre programme. Ils peuvent être difficiles à traquer et à résoudre. Essayez de maintenir vos modules purs en minimisant les effets de bord.

Utiliser des bundlers ou des chargeurs de modules :
Les bundlers comme Webpack vous permettent de regrouper vos modules en un seul fichier, ce qui améliore les performances et la compatibilité avec les navigateurs. Ils facilitent également l'utilisation de fonctionnalités avancées comme le transpilage.

Pratiquer l'injection de dépendances :
L'injection de dépendances consiste à passer les dépendances nécessaires à un module via des paramètres de fonction ou des propriétés d'objet plutôt que de les importer directement. Cela rend les modules plus flexibles et plus faciles à tester.

Utiliser des conventions de nommage :
Adoptez des conventions de nommage cohérentes pour rendre votre code plus lisible et maintenable. Par exemple, utilisez le camelCase pour les noms de variables et de fonctions, et suivez une convention de nommage spécifique pour les fichiers de module.

Documenter vos modules :
La documentation est essentielle pour aider les développeurs (y compris vous-même) à comprendre comment utiliser vos modules. Incluez des commentaires explicatifs, des exemples d'utilisation et des informations sur les dépendances dans vos fichiers de module.
*/