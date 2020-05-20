# POO: MVC

## Présentation de MVC

Sur la suite du projet préparé lors du [TP01](01-cours.md) (et [exercices](01-exercices.md)) et du [TP02](02-exercices.md), nous allons développer un projet en MVC.


Le MVC est une **structure de projet**, un ensemble de **conventions** plutôt qu'une librairie, ou une règle de code.

Plutôt que de développer comme nous l'avons fait jusqu'à présent, l'idée est de pouvoir séparer notre code en plusieurs fichiers dont chacun aura une responsabilité définie :

- des **models**, qui seront des classes représentant les données en base de données et qui seront chargées des opérations en BDD
- des **views**, qui seront des fichiers qui contiendront uniquement de l'affichage et du code dynamique structurel (des if/else ou des boucles pour l'affichage)
- des **controllers**, qui seront la glue entre le *model* et la *view*, qui, selon la page demandée, chargeront le Model nécessaire pour gérer les données, et la View nécessaire pour  afficher la page demandée.

En plus de ces éléments, nous aurons aussi:
- un **router**, c'est un bloc de code (codé à la main ou depuis une librairie externe) qui se chargera d'appeler le bon controller selon la page demandée. Par exemple :


Page demandée | Controller | Méthode | Commentaires
---------|----------|---------|---------
`GET "/"` | `AppController` | `index()` | Les pages relatives à l'application en général (`AppController`), et on veut l'`index` de l'application
`GET "/a-propos"` | `AppController` | `about()` | Les pages relatives à l'application en général (`AppController`), et on veut la page `à propos` de l'application
 `GET "/articles"` | `ArticlesController` | `index()`| Les pages relatives aux articles (`ArticlesController`), et on  veut l'`index` des articles
 `GET "/articles/3"` | `ArticlesController` | `show(3)`| Les pages relatives aux articles (`ArticlesController`), affichage d'un article (l'article id = `3`)
 

## URL Rewriting

Pour que ce système fonctionne, on utilisera l'URL Rewriting (réécriture d'URL), une fonctionnalité de Apache qui fait en sorte que quelle que soit l'URL saisie par l'utilisateur, la requête soit gérée par `index.php` (qui lui même appelera le routeur pour délivrer la page demandée).

Pour utiliser l'URL Rewriting, créez un fichier `.htaccess` à la racine du projet et saisissez dedans :

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [L]
```

Voilà ! Quelle que soit l'URL saisie, nous tomberons toujours sur `index.php`.

## Le routeur + Composer

### Prérequis VSCode !

- Pour que VSCode puisse récupérer correctement les librairies installées avec Composer, vous devez **désinstaller** toutes les extensions relatives à PHP que vous avez (elles risquent de faire des conflits), et n'installer que l'extension `PHP Intelephense` (attention, par `PHP Intellisense`).


### Installer le router

Plutôt que de développer notre propre routeur, nous allons plutôt utiliser une librairie existante et éprouvée, en l'important grâce à Composer.

Étapes :

1. Installer [Composer](https://getcomposer.org/)
2. Faire en sorte que notre projet autoload les classes Composer : ajoutez au plus tôt de votre code (par exemple, en ligne 2 de `index.php`) la ligne suivante : 
   - `require __DIR__ . '/vendor/autoload.php';`

3. Trouver sur [Packagist](https://packagist.org/) la librairie souhaitée
4. L'installer grâce à : `composer require library/name [version]`


Dans notre cas nous voulons installer [bramus/router](https://packagist.org/packages/bramus/router). Saisissez dans la console : `composer require bramus/router`

> Vous pouvez également installer `composer require symfony/var-dumper` qui est un `var_dump($var); die;` amélioré et qui s'utilise comme ça : `dd($var)`.


### Composer : gestion de versions

La plupart des projets web modernes utilisent le Semantic Versionning pour gérer leur système de versions :

```
Ex: 3.3.5
MAJOR.MINOR.PATCHES
```

Liens :
- [SemVer c'est quoi](https://putaindecode.io/articles/semver-c-est-quoi/)
- [Documentation officielle](https://semver.org/lang/fr/)
- [Cheat sheet](https://devhints.io/semver)

### Composer : mise à jour des packages

Pour mettre à jour les dépendances/libraries/packages/bibliothèques (ce sont des synonymes !), on peut faire dans le dossier du projet : `composer up

## Utiliser le router

Voici l'état de notre `index.php` actuel :

```php
<?php

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/config/config.php';
```

En suivant la [documentation du routeur](https://packagist.org/packages/bramus/router), on voit qu'il s'utilise ainsi :


```php
// Require composer autoloader
require __DIR__ . '/vendor/autoload.php'; // on l'a déjà !

// Create Router instance
$router = new \Bramus\Router\Router(); // on va plutôt l'utiliser avec l'auto-complétion

// Define routes
// ...

// Run it!
$router->run();
```

### Attention: comment débuguer si les classes ne s'auto-complètent pas !

- Si VSCode ne trouve pas une classe avec l'autocomplétion, vous pouvez :
  - `ctrl+shift+p`
  - chercher: "index workspace`
  - cliquer sur `intelephense: index workspace`
  
Si le bug persiste, saisissez dans la console :

```
composer clear-cache
composer dump-autoload
```

Sinon... il y a sans doute un bug ailleurs !

### Utiliser le router

On peut tester dans notre `index.php` quelques routes :

```php
// index.php
<?php

use Bramus\Router\Router;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/config/config.php';

$router = new Router;

$router->get('/about', function() {
    echo "bienvenue sur la page About!";
});

$router->get('/contact', function () {
    echo "Page contactez-nous.";
});

$router->run();
```

### Exercices
- Créez une route `/conditions` qui affiche `Voici les conditions d'utilisation.`

- Créez une route qui prend en paramètres un ID et qui afficherait : `voici l'article numéro 3` quand je tappe `/articles/3` par exemple.

- Améliorez la route ci-dessus pour n'accepter que des `INT`.

- Créez la route `/product/***` qui prend en paramètres une string contenant uniquement des nombres, lettres ou tiret `-` (par exemple : `/product/new-shoes-2020`) et qui affiche `Voici le produit demandé: ****`.

## Utiliser l'autoloader de Composer pour nos propres classes

Comme Composer fournit son autoloader, lequel est plutôt puissant et respecte de bonnes conventions PHP (voir [PSR-4](https://www.php-fig.org/psr/psr-4/)), nous pouvons l'utiliser plutôt que le notre !

Pour cela, nous devons respecter une convention : toutes nos classes doivent avoir un **namespace**, c'est à dire un chemin virtuel déclaré dans la classe, qui corresponde au dossier dans lequel la classe se trouve. Ça permettra à l'autoloader de trouver nos classes facilement et ça permet de respecter une convention de code connue de tous, pour organiser son projet proprement.

### 1. Déclarer à Composer l'emplacement de nos classes

1. Modifiez la structure de fichiers de la façon suivante (les dossiers sont maintenant au singulier, on verra pourquoi juste ensuite) :

```
src/model
src/controller
```

2. Déclarez l'emplacement de nos classes à Composer en modifiant le `package.json` ainsi:


```json
{
    "require": {
        "bramus/router": "^1.4",
        "symfony/var-dumper": "^5.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        },
        "classmap": [
            "src/"
        ]
    }
}
```

On indique ici que le namespace `App` correspondra au dossier `src` (ce qui est une convention de code pour indiquer "l'endroit où se trouve mes classes", que ce soit `src` pour nous, `lib` pour d'autres...).

3. Modifiez vos classes existantes pour leur donner un namespace (le chemin virtuel). Pour le moment, nous n'avons que des Models, ajoutez en haut du fichier (en ligne 2) la ligne suivante :

```php
<?php

namespace App\Model;

class Animal {
    // ...
}
```


Et voilà ! Pour tester :

1. Allez dans `index.php`
2. Mettez en commentaire l'import de `config.php` pour ne plus utiliser l'ancien autoloader
3. Réindexez le workspace avec Intelephense
4. Essayez : `$animal = new Animal`. L'autocomplétion devrait fonctionner et ajouter la ligne `use` en haut de `index.php`.

Si tout fonctionne, vous pouvez supprimer ou commenter le bloc `spl_autoload_register()` que nous avions auparavant créé dans `config.php`.

## Créer des controllers

Maintenant que nos classes sont autoloadés, on va créer des controllers.


1. Créez la classe `ArticlesController` dans le dossier `controller` et donnez lui le namespace `App\Controller`.

2. Créez un méthode statique `public static function index()`
   
3. Dans cette méthode, faites un echo de "voici la liste des articles".

4. Dans le router, créez la route suivante :
```php
$router->get('/articles', 'ArticlesController@index');
```

> Note : on met la méthode entre guillemets car c'est une fonction de *callback* (ou fonction de rappel), c'est à dire une fonction prise en paramètres par une autre fonction (la fonction `->get()`). Si elle n'était pas mise entre parenthèses, elle aurait été exécutée dans tous les cas à la lecture de `index.php` (donc en allant sur n'importe quelle route !)

5. Comme notre classe `ArticlesController` est utilisée dans des guillemets, elle n'est plus auto-complétée et mettre un `use App\Controller\ArticlesController` ne fonctionnera pas non plus. On doit indiquer au routeur quel est le namespace dans lequel chercher les controllers. Modifiez `index.php` ainsi :

```php
$router = new Router();
$router->setNamespace('App\Controller');
```


>  Note : d'autres manières d'appeler le controller :

```php

// Mauvaise manière (la méthode index() serait appelée à chaque fois qu'on irait sur index.php)
$router->get('/animaux', ArticlesController::index());

// En nommant la fonction de callback :
$router->get('/animaux', 'ArticlesController@index');

// En appelant la méthode dans une fonction anonyme :
$router->get('/animaux', function () {
    // Pensez à autocompléter ArticlesController
    ArticlesController::index()
});

```

Voilà, nous avons déplacé la logique depuis la fonction anonyme vers un fichier dédié, le controller.

### Exercice

- Créez une route vers `/articles/***`, qui appelle `ArticlesController@show` et qui affiche le numéro de l'article.


## Créer les routes de CRUD/BREAD généralistes

Dans la même logique que les routes d'une API REST, nous allons concevoir notre application avec des points d'entrées (les routes) prévisibles et standards :


Méthode | Route | Action
---------|----------|---------
 GET  | `/articles`     | lire tous les articles
 GET  | `/articles/id`  | lire un article
 POST | `/articles`     | créer un article
 PUT    | `/articles/id`  | éditer un article
 DELETE  | `/articles/id`  | supprimer un article


Comme nous sommes dans une application web qui va également gérer de l'affichage et non pas seulement dans une API, nous allons rajouter quelques routes :

Méthode | Route | Action | Ajoutée
---------|----------|---------|---------
 GET  | `/articles`     | lire tous les articles | 
 GET  | `/articles/id`  | lire un article | 
 GET  | `/articles/create` | formulaire de création d'article | *
 POST | `/articles`     | créer un article | 
 GET  | `/articles/id/edit` | formulaire de création d'article | *
 PUT    | `/articles/id`  | éditer un article | 
 DELETE  | `/articles/id`  | supprimer un article | 


Puis, comme nous avons une application web en HTML qui sera lue par un navigateur et que [la spécification de HTML5 n'autorise que GET et POST](https://stackoverflow.com/a/166501/3489447), nous allons "convertir" nos méthodes HTTP plus exotiques en uniquement GET et POST :

Méthode | Route | Action | Changée
---------|----------|---------|---------
 GET  | `/articles`     | lire tous les articles | 
 GET  | `/articles/id`  | lire un article | 
 GET  | `/articles/create` | formulaire de création d'article |
 POST | `/articles`     | créer un article | 
 GET  | `/articles/id/edit` | formulaire de création d'article |
 POST    | `/articles/id`  | éditer un article | *
 POST  | `/articles/id`  | supprimer un article | *

Enfin, on voit qu'on a du coup des routes ayant les même méthodes et URI (`POST /articles/id`). Ce qui va nous poser problème ! Modifions une dernière fois ces routes pour les rendres uniques (mais plus complètement RESTful) :


Méthode | Route | Action | Modifiée
---------|----------|---------|---------
 GET  | `/articles`     | lire tous les articles | 
 GET  | `/articles/id`  | lire un article | 
 GET  | `/articles/create` | formulaire de création d'article |
 POST | `/articles`     | créer un article | 
 GET  | `/articles/id/edit` | formulaire de création d'article |
 POST    | `/articles/id/edit`  | éditer un article | *
 POST  | `/articles/id/delete`  | supprimer un article | *


Voilà notre liste de routes de CRUD ! Ce dernier tableau est important : c'est la liste des routes que vous aurez systématiquement pour toutes vos tables (vous pouvez bien sûr en supprimer (si vous n'avez pas besoin de *edit* par exemple) ou en ajouter (si vous avez des affichages particuliers, des moteurs de recherche...)).

## Rattacher nos routes à des controllers

Nos routes étant décidées, nous pouvons les faire correspondre à des méthodes de controller. En général, ce seront :

Méthode HTTP+Route | Controller+méthode | Modifiée
---------|----------|---------
`GET  /articles`            | `ArticlesController::index()` | Affiche la liste des articles
`GET  /articles/id`         | `ArticlesController::show(int $id)` | Affiche l'article `$id`
`GET  /articles/create`     | `ArticlesController::create()` | Formulaire de création d'articles qui envoie en POST
`POST /articles`            | `ArticlesController::new()` | Créée un article grâce aux données `$_POST`
`GET  /articles/id/edit`    | `ArticlesController::edit(int $id)` | Formulaire d'édition d'articles qui envoie en POST
`POST /articles/id/edit`    | `ArticlesController::update()` | Édite un article grâce aux données `$_POST`
`POST /articles/id/delete`  | `ArticlesController::delete($id)` | Supprime un article reçu par `$_POST`

On peut remarquer que les noms de méthodes sont assez similaires aux noms de fichiers que nous avions dans du PHP procédural.

Lorsque vous créérez des routes correspondant à un model, vous utiliserez systématiquement le schéma ci-dessus : ça vous permettra d'avoir des controllers tous identiques, ce qui augmente la lisibilité et la maintenabilité du code.

### Exercice : créer les routes pour Animal, Zoo et AnimalZoo

1. Créez un fichier `config/routes.php`
2. Importez ce fichier dans `index.php`
3. Retirez les routes de `index.php` et rédigez dorénavant vos routes dans ce nouveau fichier dédié
4. Créez toutes les routes standards vus au chapitre précédent et controllers pour `Animal`, `Zoo` et `AnimalZoo`.


## Affichage : gestion des vues

Maintenant que nos routes fonctionnent et que nos controllers les gèrent, nous pouvons travailler sur la partie View : l'affichage du HTML.

Les vues peuvent être de simples fichiers HTML appelés avec `include` depuis le controller, néanmoins nous allons travailler avec un outil puissant: un moteur de template, Twig.

Twig nous permet plusieurs choses :

- Avoir du code logique facilement rédigé dans le HTML plutôt que d'y placer du PHP :

*Avant* :

```php

<h1>Bienvenue sur le site. Votre email est : <?= $user->getEmail() ?> !</h1>

<ul>
    <?php foreach ($users as $user) : ?>
        <li><?= $user->getFirstname() ?></li>
    <?php endforeach; >
</ul>
```

*Après* :
```twig
<h1>Bienvenue sur le site. Votre email est : {{ user.email }} !</h1>

<ul>
    {% for user in users %}
        <li>{{ user.firstname }}</li>
    {% endfor %}
</ul>
```

- utiliser le système de templating de Twig, qui nous permet d'avoir un modèle de page de base et d'y insérer ce que l'on veut en fonction de la page à afficher :

*page de base commune à toutes les pages* 

`base.html` :
```html
<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <nav class="nav justify-content-center">
      <a class="nav-link active" href="#">Active link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link disabled" href="#">Disabled link</a>
    </nav>

    {% block content %}{% endblock %}
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
```

*une page en particulier* :

```twig
{% extends 'base.html' %}

{% block body %}

    <h1>Bienvenue sur le site. Votre email est : {{ user.email }} !</h1>

    <ul>
        {% for user in users %}
            <li>{{ user.firstname }}</li>
        {% endfor %}
    </ul>

{% endblock body %}
```

- avoir une gestion des fichiers et du système de templating plus globale que des simples `include` dont on doit saisir le chemin du fichier à chaque fois

- un développement facilité du front-end pour les développeurs non experts en back-end ou en PHP...

### Exercice

- En suivant [la documentation de Twig](https://twig.symfony.com/doc/3.x/), installez Twig et essayez d'afficher du HTML via Twig. dans la page `/animaux`.
- Faites de même pour la page `/animaux/{id}` en affichant dans la page l'ID de l'animal.

### Correction + optimisation

1. Créez une classe `AbstractController` dans `src/controller` :

```php
<?php

namespace App\Controller;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

abstract class AbstractController {

    public static function getTwig() {
        $loader = new FilesystemLoader(__DIR__ . '/../../views');
        $twig = new Environment($loader);

        return $twig;
    }

}
```

2. Faites hériter **tous** les autres controllers de l'AbstractController :

```php
// AnimalController.php
class AnimalController extends AbstractController { /* ... */ }

// AnimalZooController.php
class AnimalZooController extends AbstractController { /* ... */ }

// ZooController.php
class ZooController extends AbstractController { /* ... */ }
```

## Utiliser Twig

### Cas 1 : Vues sans variables

Par exemple, pour la page `AnimalController@index` (accessible par la route `/animal` d'après le router) :

1. On appelle la vue :
```php
// AnimalController.php
// ...

public static function index() {
    echo self::getTwig()->render('animal/index.html');
}
```

> On appelle la méthode statique `getTwig()` qui est déclarée dans le parent, sur laquelle on utilise la méthode `render` qui permet d'afficher un fichier HTML situé dans le dossier `views`. Ici, on demande donc l'affichage de `/views/animal/index.html`.

2. On créée la vue :

Dans `views/animal/index.html` :
```html
<h1>Bienvenue sur la page d'accueil des animaux !</h1>
```

3. Testez en allant sur la route correspondante (ici : `/animal`).


### Cas 2 : Vues avec variables

On peut passer des variables à la vue ( = le HTML), par exemple l'ID de l'animal pour la page show :

```php
// AnimalController.php
// ...

public static function show($id) {
        echo self::getTwig()->render('animal/show.html', [
            'idanimal' => $id
        ]);
    }
```

Dans `views/animal/show.html` :

```html
<h1>Vous affichez la page de l'animal numéro {{ idanimal }}.</h1>
```

> Si on regarde le tableau de variables dans le PHP, `['idanimal' => $id]` :
> - `idanimal` est le nom de la variable au sein du fichier HTML (on l'appelle comme on veut)
> - `$id` est la variable issue du PHP que l'on veut envoyer au fichier HTML


> **Note : ** remarquez que dans le dossier `views`, les fichiers sont classés ainsi :

```
/views
    /nomDuModule
        nomDeLaMethode.html

/views
    /animal
        index.html
        show.html
        ...
```

### Héritage de templates avec Twig

On peut définir un template de base qui s'appliquera à toutes nos pages, pour éviter de répéter le header, footer, sidebar... par exemple.

1. Créez le fichier suivant :

Dans `/views/base.html` :

```html
<!doctype html>
<html lang="en">

<head>
    <title>WF3 Zoo : MVC version</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                {% block content %}{% endblock %}
            </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>
</html>
```

> Remarquez qu'on déclare en langage Twig un "bloc" `{% block content %}{% endblock %}`, c'est une ancre qui permet d'indiquer où se situera le code spécifique de chaque page héritant de ce fichier `base.html`.

2. Éditez `animal/index.html` et `animal/show.html` de la façon suivante :

Dans `animal/index.html` :
```html
{% extends 'base.html' %}

{% block content %}
    <h1>Bienvenue sur la liste des animaux</h1>
{% endblock %}
```

Dans `animal/show.html` :
```html
{% extends 'base.html' %}

{% block content %}
    <h1>Bienvenue sur la page de l'animal dont l'ID est {{ idanimal }}.</h1>
{% endblock %}
```

## Créer une page d'accueil

1. C'est un nouveau point d'entrée de l'application ! On créée donc une nouvelle route :

```php
// routes.php

$router->get('/', 'AppController@index');

```

> Comme cette page fait partie des pages relatives à l'application (comme "contact", "CGV", "à propos"...), on peut imaginer un controller nommé `AppController` pour ce genre de pages. Le nom est libre.

2. On créée le controller et la méthode dédiée (ne pas oublier l'héritage de `AbstractController`) :

```php
// src/controller/AppController.php

<?php

namespace App\Controller;

class AppController extends AbstractController {

    public static function index() { }

}
```

3. On appelle Twig pour faire le rendu d'une page HTML :

```php
public static function index() {
    echo self::getTwig()->render('app/index.html');
}
```

4. On créée enfin `views/app/index.html` :

```html
{% extends 'base.html' %}

{% block content %}
<h1>Bienvenue sur la page d'accueil.</h1>
{% endblock %}
```