# Afficher des données issues d'une base de données MySQL avec PHP

> Version `query`, sans requête préparée.

## Base de données

Étant donné la base de données suivante :

```
DATABASE: wf3movies

movies
----
id           INT PK AI
title        VARCHAR(200)
director     VARCHAR(200)
category     VARCHAR(70)
release_date DATETIME
```


## Cas 1 : récupérer tous les éléments

### Récupérer la liste des éléments

Dans un fichier `movies.php`, on ajoute en haut du fichier la connexion à la base de données :

> **Attention !** Pensez à modifier dans `new PDO` les paramètres en fonction de votre configuration de MySQL.
> - `login` et `password` : généralement, le login est `root` et le mot de passe est soit vide `''` soit `root`
> - `host` : généralement `localhost`
> - `dbname` : le nom de la base de données (ici `wf3movies`)
> - `port` : généralement 3306 sur Windows, 8889 avec MAMP sous Mac

```php
$bdd = new PDO('mysql:host=localhost;dbname=wf3movies;charset=utf8;port=3306', 'login', 'password');
$request = "SELECT * FROM movies";
$response = $bdd->query($request);
$movies = $response->fetchAll(PDO::FETCH_ASSOC);
```

Déchiffrons ce code :

```php
// On créée une connexion à la base de données que l'on stocke dans $bdd
$bdd = new PDO('mysql:host=localhost;dbname=wf3movies;charset=utf8;port=3306', 'login', 'password');

// On écrit notre requête MySQL. On peut aussi concaténer des variables PHP dedans si besoin !
$request = "SELECT * FROM movies";

// On demande à notre base de données, $bdd, d'exécuter la requête. On stocke la réponse de MySQL dans $response 
$response = $bdd->query($request);

// On demande à la réponse de nous retourner TOUTES les données (grâce à fetchAll).
// De plus, ces données doivent être retournées sous forme de tableau associatif, grâce au paramètre PDO::FETCH_ASSOC. 
$movies = $response->fetchAll(PDO::FETCH_ASSOC);
```

### Afficher la liste des éléments

Si on `var_dump` la variable `$movies`... On tombe bien sur un array ! C'est une en fait une *liste* d'*arrays associatifs*, chacun correspondant à une entrée dans la base de données. On n'a plus qu'à scanner les données dans un foreach :

```php
<?php foreach ($movies as $movie) : ?>
  <h1>
      Le film choisi est <?= $movie['title'] ?>
  </h1>
<?php endforeach; ?>
```

## Cas 2 : Récupérer 1 élément (ou précisément: faire une requête paramétrée)

Cette fois, on ne veut pas juste une simple requête `SELECT * FROM movies` mais plutôt une requête avec des paramètres. C'est à dire avec des variables à inclure dedans. Par exemple :

```php
$idMovie = 34; // cet ID peut venir de GET par exemple !
$request = "SELECT * FROM movies WHERE id = " . $idMovie;
```

Ou encore :

```php
$search = "science-fiction""; // Ce paramètre peut venir de GET si on a cliqué sur le lien d'une catégorie, ou de POST pour un moteur de recherche par exemple !
$request = "SELECT * FROM movies WHERE category LIKE '%" . $search . "%'";
```

### Récupérer la liste des éléments

On exécute de la même manière la requête :

```php
$response = $bdd->query($request);

// Si on n'attend qu'un élément (par exemple: un film trouvé par ID), on utilise fetch :
$movie = $response->fetch(PDO::FETCH_ASSOC);

// Si on attend plusieurs éléments (par exemple: la liste des films d'une catégorie), on utilise fetchAll :
$movies = $response->fetchAll(PDO::FETCH_ASSOC);
```

### Afficher la liste des éléments

Si on n'a qu'un élément : pas besoin de boucle foreach !

```php
<h1>Vous avez choisi le film <?= $movie['title'] ?>
```

Si on a plusieurs éléments, on passerait `$movies` dans une boucle comme ci-dessus.