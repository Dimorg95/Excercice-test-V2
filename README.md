# Recherche d'entreprise/société

## Lancement de la page (Via console)

## Assurez vous d'etre dans le bon dossier

`npm install` (Installation de toutes les dépendances + node_modules)

`ng serve` (Lancement de la page web sur le navigateur)

### Le frontend sera lancer a l'adresse : **http://localhost:4200/**

# Fonctionnalités disponibles

- Barre de recherche en HTML/SCSS responsive

- Rechercher des informations sur les entreprises en tapant leur nom partiel ou complet

- Via ce que l'utilisateur écris dans la barre de recherche nous envoyons un appel a l'API **https://www.pappers.fr/**

- Une serie de carte représentant la/les entreprises rechercher

### Information d'entreprise affichées :

- Nom d'entreprise
- Numéro de siren
- Code Naf
- Dénomination
- Personne moral

## Possibilité de modifier l'url de la requete API

- Rendez vous dans le fichier app.component.ts

- Allez a la fonction search()

- Modifier l'appel API : (this.papperUrl + search +"&longueur=20")

- Le parametre longueur accepte une valeur jusqu'a 100
