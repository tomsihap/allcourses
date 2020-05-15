# PHP - POO : TP

> Vous allez créer un projet en version MVC (Model Vue Controller), qui sera une application de gestion d'animaux pour des zoos !

> Une table Animal listera plusieurs espèces d'animaux, une table Zoo listera des zoos. Une table de jointure `animal_zoo` fera le lien entre les deux.

## 1. Structure du projet

- Créez une base de données nommée `wf3zoomvc` avec les tables suivantes :

```
ANIMAL
------
id                  
species
country

ZOO
-----
id
name
city

ANIMAL_ZOO
-------
id
animal_id
zoo_id
```

- Créez un nouveau dossier de projet `wf3zooMvc` et structurez les dossier comme suit :

```
/wf3zooMvc
    /models
    /vues
    /controllers
    index.php
```

## 2. Créer les Models

Dans le dossier `models`, créez les fichiers suivants :

```
Animal.php
Zoo.php
AnimalZoo.php
```

Qui contiendront les classes `Animal`, `Zoo`, `AnimalZoo`.

Pour chacune des classes, ajoutez des attributs `public` pour chacun des champs de la table correspondante (en `camelCase`), ainsi que des getters (`getAttribute()`) pour chacun des champs.
