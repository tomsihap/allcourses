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