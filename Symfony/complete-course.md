# Cours : Symfony 4.4 ~ 5
- [Cours : Symfony 4.4 ~ 5](#cours--symfony-44--5)
  - [0. À propos du cours](#0-à-propos-du-cours)
  - [1. Installation](#1-installation)
    - [1.1. Créer un nouveau projet](#11-créer-un-nouveau-projet)
    - [1.1b. Installer le CLI de Symfony](#11b-installer-le-cli-de-symfony)
    - [1.2. Lancer le serveur intégré](#12-lancer-le-serveur-intégré)
  - [1.3. Configurer l'application](#13-configurer-lapplication)
  - [2. Routes et controllers, introduction](#2-routes-et-controllers-introduction)
    - [2.1. Créer une première route](#21-créer-une-première-route)
      - [routes.yaml](#routesyaml)
    - [2.2 Créer le controller](#22-créer-le-controller)
    - [2.3. Annotations](#23-annotations)
    - [2.4. Routes et paramètres](#24-routes-et-paramètres)
    - [2.5. Paramètres : wildcards](#25-paramètres--wildcards)
    - [2.6. Paramètres: valeur par défaut](#26-paramètres-valeur-par-défaut)
    - [2.7. Request et Response](#27-request-et-response)
    - [2.8. Routing avancé : localisation des URI](#28-routing-avancé--localisation-des-uri)
    - [2.9. Lister les routes](#29-lister-les-routes)
  - [3. Vues et Twig](#3-vues-et-twig)
    - [3.1. Afficher une vue](#31-afficher-une-vue)
    - [3.2. Créer une vue](#32-créer-une-vue)
    - [3.3. Passer des variables à la vue](#33-passer-des-variables-à-la-vue)
    - [3.4 Loops](#34-loops)
    - [3.5 If/else](#35-ifelse)
    - [3.5 Filters](#35-filters)
    - [3.6. Documentation](#36-documentation)
  - [4. Doctrine, Entities et Repositories](#4-doctrine-entities-et-repositories)
    - [4.1. Création de la base de données](#41-création-de-la-base-de-données)
    - [4.2. Création des entités](#42-création-des-entités)
    - [4.3. Migrations](#43-migrations)
    - [4.4. Migrer les fichiers migrations](#44-migrer-les-fichiers-migrations)
    - [4.5. Constructeur et createdAt](#45-constructeur-et-createdat)
    - [4.6. Enregistrer une donnée : service Doctrine et EntityManager (CREATE)](#46-enregistrer-une-donnée--service-doctrine-et-entitymanager-create)
    - [4.7. Lire des données (READ)](#47-lire-des-données-read)
    - [4.8. Lire des données: requêtes complexes avec le Repository et le QueryBuilder de Doctrine](#48-lire-des-données-requêtes-complexes-avec-le-repository-et-le-querybuilder-de-doctrine)
    - [4.8. Mettre à jour (UPDATE)](#48-mettre-à-jour-update)
    - [4.9. Supprimer un object (DELETE)](#49-supprimer-un-object-delete)
  - [5. Commandes make](#5-commandes-make)
    - [5.1. make:controller](#51-makecontroller)
  - [6. Forms](#6-forms)
    - [6.1. make:form](#61-makeform)
      - [Afficher le formulaire généré dans Twig](#afficher-le-formulaire-généré-dans-twig)
    - [6.2. Styliser nos formulaires générés](#62-styliser-nos-formulaires-générés)
    - [6.3. FormTypes](#63-formtypes)
    - [6.4. Relations 1-N et N-N et formulaires](#64-relations-1-n-et-n-n-et-formulaires)
    - [6.4. Validations](#64-validations)
      - [6.4.1. Validations par les annotations](#641-validations-par-les-annotations)
      - [6.4.2. Validation par les FormType](#642-validation-par-les-formtype)
    - [6.5. Créer un CRUD grâce à make](#65-créer-un-crud-grâce-à-make)
  - [7. Notions diverses](#7-notions-diverses)
    - [7.1. Rediriger vers une autre route](#71-rediriger-vers-une-autre-route)
    - [7.2. Entities : Relations](#72-entities--relations)
    - [7.3. Affichage des éléments d'une collection](#73-affichage-des-éléments-dune-collection)
    - [7.4. Utiliser des assets (img, css, js)](#74-utiliser-des-assets-img-css-js)
  - [8. Security et Auth](#8-security-et-auth)
    - [8.1. User](#81-user)
    - [8.2. Authenticateur](#82-authenticateur)
    - [8.3. Route Logout](#83-route-logout)
      - [8.3.1. Modifier security.yaml](#831-modifier-securityyaml)
      - [8.3.2. Ajouter une route dans routes.yaml](#832-ajouter-une-route-dans-routesyaml)
    - [8.4. Registration Form](#84-registration-form)
    - [8.5. Utiliser l'authentification dans le controller](#85-utiliser-lauthentification-dans-le-controller)
      - [8.5.1. À toutes les routes d'un contrôleur :](#851-à-toutes-les-routes-dun-contrôleur-)
      - [8.5.2. Ou un mix des deux !](#852-ou-un-mix-des-deux-)
    - [8.6. Utiliser l'authentication dans Twig](#86-utiliser-lauthentication-dans-twig)
  - [9. Injection de services](#9-injection-de-services)
    - [9.1. Injection par le constructeur](#91-injection-par-le-constructeur)
    - [9.2. Injection par la méthode (autowiring)](#92-injection-par-la-méthode-autowiring)
    - [9.3. Appel par le containeur de services](#93-appel-par-le-containeur-de-services)


## 0. À propos du cours
> **Durée du cours :** 4 à 5 jours

> **Requirements :**
> - PHP > 7.2
> - Composer
> - Git

> **Recommandations :**
> - Un IDE (Visual Studio Code, PHPStorm...)
> - Des modules d'autocomplétion pour :
> - - PHP (VSCode : PHP Intelephense)
> - - Twig (VSCode : TWIG Pack)
> - - Yaml (VSCode: YAML)
> - - .env (VSCode : DOTENV)
> - Configurez les "tabulations" de votre IDE en mode `Spaces: 4` (4 caractères "espace" plutôt qu'un caractère "tab")
> - **Consultez la doc fournie à chaque chapitre !**

## 1. Installation

> Documentation : [Installing & Setting up the Symfony Framework](https://symfony.com/doc/current/setup.html)

### 1.1. Installer le CLI de Symfony

Suivez les instructions selon votre OS : https://symfony.com/download. **ATTENTION à bien suivre les instructions affichées dans le terminal s'il y en  a !**.

### 1.1b. Créer un nouveau projet

> :rocket: Exercice 1 :rocket: |
> ---------|
> Créez le projet nommé `blog` dans le dossier de votre choix. Pas besoin qu'il soit dans `www` : Symfony a son propre serveur web et n'est pas dépendant de XAMPP/MAMP/etc ! |


Vous pouvez créer un nouveau projet Symfony avec la commande suivante :

```
symfony new nom-du-projet --full
```

Nous pouvons également utiliser la commande sans `--full` qui contient les éléments minimaux d'une application web (microservices, APIs...) et nous laisse le choix d'installer les outils dont nous aurions besoin, néanmoins la commande avec `--full` contient tous les outils nécessaires pour bien commencer une application full-stack.

### 1.2. Lancer le serveur intégré

L'installation nous a donné tout une boîte à outils en CLI : `php bin/console`.
Pour lancer le serveur depuis le dossier de l'app : `symfony server:start`

## 1.3. Configurer l'application

Vous pouvez lancer `php bin/console about` pour consulter la configuration actuelle de l'application.

Pour la modifier, modifiez le fichier `.env`.


## 2. Routes et controllers, introduction

> Documentation [Routing](https://symfony.com/doc/current/routing.html)


> :rocket: Exercice 2 :rocket: |
> ---------|
> Créez la route `/about` dans `routes.yaml` et son controller.|


### 2.1. Créer une première route
Il existe plusieurs façons de déclarer des routes dans Symfony :

#### routes.yaml

```yaml
# config/routes.yaml

about:
    path: /a-propos
    controller: App\Controller\PagesController::about
```

Dans ce cas, nous nommons (c'est simplement un nom interne à l'application qui nous sert de référence pour cette route/méthode) notre route `about`, et nous indiquons à Symfony de se diriger vers le contrôleur `PagesController` et la méthode `about` lorsque l'utilisateur va sur l'URI `/a-propos` (donc l'URL `http://127.0.0.1:8000/a-propos` par exemple).

### 2.2 Créer le controller
Il faut donc créer un `PagesController` : d'après le fichier `composer.json`, dans la key `psr-4`, on sait que le namespace `App/` pointe vers le dossier `src/`.

Nous allons donc créer un contrôleur dans `src/Controller` :


```php
// src/Controller/PagesController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class PagesController {

    public function about() {
        return new Response('Hello world!');
    }
}
```

> **Important :** Notez bien l'usage de l'alias de `Symfony\Component\HttpFoundation\Response`! Utilisez bien l'autocomplétion de votre IDE afin de bien importer les alias nécessaires (tip : commencez à taper le nom d'une classe et choisissez avec les flèches du clavier la classe souhaitée, aidez vous du namespace pour savoir quelle est la bonne classe à inclure !).

Et voilà, nous avons fait notre premier Hello world.

### 2.3. Annotations


> :rocket: Exercice 3 :rocket: |
> ---------|
> Créez la route `/home` en annotations dans PagesController. |


Une autre manière de créer des routes dans Symfony sont les annotations. Toujours dans `PagesController.php` :

```php
use Symfony\Component\Routing\Annotation\Route;
// ...

    /**
    * @Route("/home", name="home")
    */
    public function home() {
        return new Response ('Bienvenue sur la page d\'accueil !');
    }
```

Notez bien l'utilisation de `Symfony\Component\Routing\Annotation\Route` !

Les annotations permettent de déclarer les routes juste au dessus de la méthode qui prendra en charge l'URI. C'est donc plus pratique car tout est au même endroit, mais plus dispersé que d'avoir toutes les routes dans un fichier *.yaml.

### 2.4. Routes et paramètres

> :rocket: Exercice 4 :rocket: |
> ---------|
> Dans PagesController, réez la route `/articles/{id}` qui affiche "Voici l'article numéro {id}". |

Nous pouvons écouter des paramètres dans les routes en ajoutant des `{variables}` dans l'URL :

```php
/**
* @Route("/users/{userId}/books/{bookId}", name="user_book")
*/
public function users(int $userId, int $bookId) {
    return new Response ('Vous consultez le livre #' . $bookId . ' de l\'utilisateur numéro '. $userId);
}
```

### 2.5. Paramètres : wildcards


> :rocket: Exercice 5 :rocket: |
> ---------|
> Modifiez la route `/articles/{id}` de sorte à n'accepter que des nombres. |


> :rocket: Exercice 6 :rocket: |
> ---------|
> Créez la route `/products/{product-name}`. Elle ne doit accepter que des lettres et des tirets. Documentez-vous sur les REGEX si besoin. |


Nous pouvons utiliser des wildcards dans les routes, c'est à dire une chaîne de caractères quelconque que l'on peut valider par des expressions régulières (regex) :

```php
/**
 * @Route("/blog/{page}", name="blog_list", requirements={"page"="\d+"})
 */
```

Dans ce cas là, la route n'acceptera que les cas où l'argument `{page}` correspond à la regex `\d+` (= valeurs numériques uniquement).

### 2.6. Paramètres: valeur par défaut

Si jamais je souhaite pouvoir accéder à l'URI `/blog/` malgré tout, avec une valeur par défaut (par exemple je veux que par défaut, `page = 1`), je peux le passer en paramètre de l'action :

```php
/**
 * @Route("/blog/{page}", name="blog_list", requirements={"page"="\d+"})
 */
public function list($page = 1)
{
    // ...
}
```

### 2.7. Request et Response


> :rocket: Exercice 7 :rocket: |
> ---------|
> Créez une route `/contact` qui récupère en autowiring la requête utilisateur dans $request et débuguez la grâce à `dump($request)` ou `dd($request)` (ce sont des `var_dump()` améliorés à utiliser avec Symfony) |


> :rocket: Exercice 8 :rocket: |
> ---------|
> Trouvez la différence entre `dd()` et `dump()`. |


Nous utilisions les Request et Response du package HttpFoundation pour gérer les requêtes et réponses HTTP. Grâce à l'autowiring (autochargement des classes), nous pouvons directement appeler la requête dans les arguments de la méthode :

```php
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

// ...

    /**
    * @Route("/post-user", name="create_user", methods={"POST"})
    */

    public function create(Request $request) : Response
    {
        dump($request);
    }

```

Plusieurs nouveaux concepts ici :
- Nous avons importé les classes `Request` et `Response`
- Grâce à l'autowiring, nous pouvons appeler l'object `Request $request` dans notre action (la méthode `create()`)
- Nous avons précisé les méthodes autorisées pour cette route avec `methods={"POST"}`
- Nous avons indiqué le type de retour de la fonction (`: Response`)

Et voilà, l'object `Request $request`, qui par exemple peut être issu de l'envoi d'un formulaire, est disponible à l'utilisation ! Nous pouvons accéder aux valeurs POST par exemple avec `$request->get('name');`.

### 2.8. Routing avancé : localisation des URI


> :rocket: Exercice 9 :rocket: |
> ---------|
> Faites une route nommée `contact-us`, accessible par `/contactez-nous` ou par `/contact-us`.|

```php
/**
 * @Route({ "fr": "/a-propos", "en": "/about-us"}, name="about")
 */
public function about()
{
    // ...
}
```
### 2.9. Lister les routes

Un outil de la console nous permet de lister toutes les routes déclarées (pratique notamment lorsque l'on utilise les annotations !) : `php bin/console debug:router`

## 3. Vues et Twig

> Documentation : [Creating and Using Templates](https://symfony.com/doc/current/templating.html)

### 3.1. Afficher une vue


> :rocket: Exercice 10 :rocket: |
> ---------|
> Faites hériter votre controller de `AbstractController` (attention au `use`) |


Maintenant que nous avons vu le routeur et le controller, nous allons voir comment retourner une vue depuis un controller.

Symfony utilise Twig comme moteur de template : grâce au container de service de la classe parente AbstractController qu'il vous faut hériter, il peut être disponible directement auprès du contrôleur :

```php
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// ...
class PagesController extends AbstractController {

    /**
     * @Route("/home", name="home")
     */
    public function home() {
        return $this->render('home.html.twig');
    }
}
```

En héritant de `AbstractController`, nous pouvons dorénavant utiliser la méthode `render()` qui prend en premier paramètre le fichier Twig à utiliser.

### 3.2. Créer une vue


> :rocket: Exercice 11 :rocket: |
> ---------|
> Créez une vue dans le dossier `/templates` nommée `contact.html.twig` et affichez-la quand on va sur la route `contact-us`. |


Les vues se trouvent dans le dossier `/templates` (défini par dans `twig.default_path` le fichier de configuration `twig.yaml`).

Nous allons donc créer le fichier `templates/home.html.twig` :

```twig
{# templates/home.html.twig #}

{% extends 'base.html.twig' %}

{% block title %}Page Home !{% endblock %}

{% block body %}
<div class="example-wrapper">
    <h1>Hello Page Home !</h1>
</div>
{% endblock %}
```

Détaillons ce code :

```twig
{% extends 'base.html.twig' %}
```

Cette ligne indique à Twig d'utiliser le fichier de template `base.html.twig`, qui se trouve aussi dans `/templates`.

Si on regarde le fichier `base.html.twig`, on voit qu'il s'agit d'un fichier HTML classique avec des éléments `{%block ... %}{% endblock %}`.

Les blocs du template de "extends", `base.html.twig`, sont les éléments "extensibles" : ils peuvent contenir une valeur par défaut, comme `{% block title %}Welcome!{% endblock %}` ou rien du tout.

En fait, nous allons remplir leur contenu par les fichiers de vues comme `home.html.twig`, comme avec ce morceau de code :

```twig
{% block body %}
<div class="example-wrapper">
    <h1>Hello Page Home !</h1>
</div>
{% endblock %}
```

Le code HTML généré pour le client sera donc `base.html.twig` avec ce code ci-dessus dans son bloc `body` !

### 3.3. Passer des variables à la vue


> :rocket: Exercice 12 :rocket: |
> ---------|
> Créez une route `/articles` et affichez tous les articles (titre et contenu) issus du tableau suivant : |

> ```php
> $articles = [
>     [
>          'title' => 'Titre 1',
>          'content' => 'Contenu du premier article',
>     ],
>     [
>          'title' => 'Titre 2',
>          'content' => 'Contenu du second article',
>     ],
> ];
> ```


Nous pouvons évidemment passer des variables à la vue depuis le contrôleur :

```php
// PagesController.php
// ...

public function home() {

        $pageTitle = "Mon super site";

        $movies = [
            [
                "title" => "Inception",
                "length" => 135,
            ],
            [
                "title" => "Rocky",
                "length" => 126,
            ]
        ];

        return $this->render('home.html.twig', [
            'pageTitle' => $pageTitle,
            'movies' => $movies
        ]);
    }
```

Le deuxième argument de `render()` prend un tableau : la `key` est le nom de la variable passé à Twig, la `value` est le contenu de la variable.

Si, comme pour l'exemple ci-dessus, le nom des variables pour Twig et pour PHP ont le même nom, on peut rendre le code plus conscis avec `compact()` ([doc PHP](https://secure.php.net/manual/fr/function.compact.php)) :

```php
return $this->render('home.html.twig', compact('title', 'movies'));
```

Nous pouvons maintenant utiliser les variables dans Twig :

```twig

{% block title %}Page : {{ pageTitle }} {% endblock %}

{% block body %}
<div class="example-wrapper">
    <h1>Hello, vous êtes sur la page {{ pageTitle }} !</h1>
</div>
{% endblock %}
```

### 3.4 Loops

Pour afficher les données d'un array ou d'une collection d'objects, nous pouvons utiliser la boucle `for` de Twig :

```twig
{% block body %}
    <h1>Films</h1>
    <ul>
        {% for movie in movies %}
            <li>{{ movie.title }} (Durée : {{ movie.length }} min)</li>
        {% endfor %}
    </ul>
{% endblock %}
```

### 3.5 If/else

Nous pouvons faire un affichage conditionnel en Twig :

```twig
{% if not user.subscribed %}
    <p>Vous n'êtes pas encore inscrit à la mailing list.</p>
{% endif %}
```

```twig
{% if temperature > 18 and temperature < 27 %}
    <p>It's a nice day for a walk in the park.</p>
{% endif %}
```

### 3.5 Filters

> :rocket: Exercice 13 :rocket: |
> ---------|
> Dans l'affichage de `/articles`, affichez les titres inversés (par exemple: "Titre" devient "ertiT" grâce à un pipe Twig (voir la documentation de Twig) |


Nous pouvons modifier la donnée à la volée grâce aux filters (pipes) :
```twig
{{ 'bienvenue'|upper }} {# retourne : 'BIENVENUE' #}
```

### 3.6. Documentation
La documentation complète de Twig est disponible ici : [documentation Twig](https://twig.symfony.com/doc/2.x/).

> :rocket: Exercice 14 :rocket: |
> ---------|
>  Créez une route GET /messagerie  qui affichera avec Twig un formulaire avec "nom", "prénom", "message"  |


> :rocket: Exercice 15 :rocket: |
> ---------|
>  Créez une route POST /messagerie  qui récupèrera les données du formulaire  via $request  (indice: google "symfony request post params") et les affichera dans  une page Twig |



## 4. Doctrine, Entities et Repositories

> Documentation : [Databases and the Doctrine ORM](https://symfony.com/doc/current/doctrine.html)
> OpenClassrooms : [Gérez vos données avec Doctrine ORM](https://openclassrooms.com/fr/courses/5489656-construisez-un-site-web-a-l-aide-du-framework-symfony-4/5517031-gerez-vos-donnees-avec-doctrine-orm)`

### 4.1. Création de la base de données

> :rocket: Exercice 16 :rocket: |
> ---------|
>  Cnfigurer le .env de sorte à se connecter au mysql de WAMP/XAMPP/MAMP et à la base de données symfoblog . |

Doctrine est un ORM (Object-relationnal Mapping), qui implémente le pattern Data Mapper. Concrètement, le Data Mapper synchronise un object dans le PHP avec la base de données, ce qui nous donne une couche Model performante dans notre MVC.

Pour commencer, vous devrez configurer votre base de données dans le fichier `.env` qui se trouve à la racine du projet :

```sh
DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name
```

Remplacez les valeurs de `db_user` et `db_password` par les valeurs qui correspondent à votre configuration.

> Attention : si votre mot de passe est vide, laissez bien les deux-points avant le @, exemple :
> `DATABASE_URL=mysql://root:@127.0.0.1:3306/db_name`

Pour le champ `db_name`, vous pouvez en créer un nouveau : nous allons pouvoir le créer depuis l'outil `console` de Symfony !

Une fois configuré, ouvrez une console **dans le dossier du projet** et saisissez :

`php bin/console doctrine:database:create`

Et voilà, la base de données a été créée !

### 4.2. Création des entités


> :rocket: Exercice 17 :rocket: |
> ---------|
>  Créer l'entité Article comme définie dans le cours. En cas d'erreur, supprimez les fichiers entity/Article.php  et repositories/ArticleRepository.php  et recommencez la commande |


Nous allons créer des Entity : ce sont l'équivalent des Model du MVC, il s'agit de la classe qui mappera la table correspondante en base de données.

Pour cela, ouvrez une console et saisissez :

`php bin/console make:entity Article`

> **Attention :** les entités ont la première lettre en majuscules et sont au singulier.

Le CLI vous guidera pour créer les champs un par un : créez par exemple les champs suivants :

```
title (string, NOT NULL)
description (text, NOT NULL)
created_at (datetime, NOT NULL)
```

Une fois l'entité créée, nous pouvons aller la voir dans `src/Entity/Article.php`.

### 4.3. Migrations

> :rocket: Exercice 18  :rocket: |
> ---------|
>  Effectuer une migration et vérifier qu'il y ait la table Article  créée dans PHPMyAdmin |


L'entité est un mapping de notre base de données : c'est à dire que le fichier Entity correspond, grâce aux annotations `@ORM` notamment, à ce à quoi ressemble notre table en base de données.

Si nous souhaitons faire une modification dans les tables, nous avons deux manières de faire :

- Modifier le fichier `Entity/Article.php`
- Ajouter un champ grâce à `php bin/console make:entity Article` : le fait de reprendre le nom `Article` ici va éditer l'entity existante `Article` !

> **Attention :** Nous n'avons donc plus besoin de modifier la base de données directement dans PHPMyAdmin !

**IMPORTANT:** Maintenant que vous avez créé et éventuellement modifié votre fichier Entity, vous créerez un fichier *migration* : 

```sh
php bin/console make:migration
```

Consultez le fichier créé qui se trouve dans `src/Migrations` : une migration est en fait une instruction de DB qui nous indique quoi faire par rapport à l'état de nos fichiers Entity : par exemple là, vous verrez dans la méthode `up()` un `CREATE TABLE Article ...`.

**Ce qui se passe en fait :** Doctrine, l'ORM de Symfony, va comparer l'état de la base de données actuellement et à quoi ressemblent les Entity ! Là en effet, on n'a pas de table `Article` en base de données mais on a une Entity `Article`... La migration nous propose donc un `CREATE TABLE`.

Il existe aussi une migration `down` (la méthode `down()` du fichier migration) : il s'agit de l'opposé de la migration `up` : en effet, si vous voulez revenir à l'état précédent de la base de données, plutôt que de vous souvenir de vos modifications, il sera possible de faire une migration dite `down` pour l'annuler !

### 4.4. Migrer les fichiers migrations

Maintenant que les fichiers migrations sont fait, c'est à dire les instructions à donner à la base de données, nous allons migrer ces fichiers afin que la base de données lance ces commandes SQL :

```sh
php bin/console doctrine:migrations:migrate
```

> Les deux commandes ci-dessus sont équivalentes, la seconde, plus courte, est simplement un alias.

Comme vous l'avez remarqué lors de la création de la base de données ([4.1. Création de la base de données](#41-cr%C3%A9ation-de-la-base-de-donn%C3%A9es)), une table `migrations` a été créée : elle va en simplement enregistrer la liste des fichiers de migration qui ont été exécutés afin de garder une trace de ce qu'il reste à faire !

En exécutant cette commande, les fichiers migrations restant à migrer vont donc être exécutés.

Il est très important de se souvenir du fonctionnement des migrations, rappel :


1. Modification du fichier `Entity` (avec `php bin/console make:entity Article` ou en modifiant le fichier à la main)
2. L'entité est modifiée, il faut persister ces changements en base de données : `php bin/console make:migration`
3. `make:migration` va simplement créer un fichier migration en comparant à quoi ressemble la base de données et à quoi ressemble le fichier Entity
4. Immédiatement, je peux persister les changements `php bin/console doctrine:migrations:migrate
`.

**TRÈS IMPORTANT :** Après une modification de l'entity, et surtout après un `make:migration`, exécutez systématiquement un `migrate` : en effet, cela vous évite de refaire un second `make:migration` qui n'aurait pas été migré et donc générer des erreurs, exemple **à ne pas faire** :

1. J'ajoute une nouvelle `Entity`, `User` par exemple
2. Je fais un `make:migration`
3. Le fichier migration créé ressemble à : `CREATE TABLE User...`
4. Je refais un `make:migration` au lieu d'un `migrate`: un autre fichier de migration se créée, et refait un `CREATE TABLE User...` (en effet, il n'y a toujours rien dans ma DB, Doctrine pense devoir refaire un `CREATE TABLE User` !)
5. Je migre un peu trop tard: `migrate` et... j'ai une erreur (en effet, j'aurai deux `CREATE TABLE User` au lieu d'un seul, MySQL lèvera une erreur)

> **Résumé:** Pour éviter ce problème facilement, il suffit juste de faire un `migrate` avant chaque `make:migration` afin d'exécuter les migrations précédentes s'il en restait à faire :

```sh
// Créer une migration :
php bin/console doctrine:migrations:migrate # On migre les précédentes migrations éventuelles
php bin/console make:migration # On créée la nouvelle migration
php bin/console doctrine:migrations:migrate # On migre la nouvelle migration
```

### 4.5. Constructeur et createdAt


> :rocket: Exercice 19 :rocket: |
> ---------|
>  Modifiez le constructeur comme proposé dans le cours. |


Comme notre entité représente notre table en base de données, nous pouvons gérer les données comme tel : pour donner une valeur par défaut au champ `created_at`, nous pouvons créer un constructeur dans `Article.php` : les getters et setters sont déjà générés !

```php
// Article.php
// ...

public function __construct() {
    $this->setCreatedAt(new \DateTime());
}
```

### 4.6. Enregistrer une donnée : service Doctrine et EntityManager (CREATE)


> :rocket: Exercice 20 :rocket: |
> ---------|
>  Faites une route dans laquelle vous pourrez tester la création d'un article en dur comme indiqué dans le cours. |



> Un service est une classe qui remplit une fonction bien précise, accessible partout dans notre code grâce au container de services.

Dans une méthode d'un contrôleur, nous allons créer un nouvel objet `Article` et lui donner quelques données grâce aux setters.

```php
$article = new Article();
$article->setTitle('Nouveau titre !');
$article->setContent('Lorem ipsum....');
```

Doctrine est le service qu va nous permettre de gérer la base de données et de persister les données en base de données, c'est à dire d'enregistrer l'objet créé en une ligne de la base de données. Il est accessible depuis le contrôleur comme n'importe quel autre service :

```php
$doctrine = $this->getDoctrine();
```

Doctrine s'occupe de plusieurs choses : d'une part la connexion à la base de données (`$doctrine->getConnection($name))` récupère une connection à une base de données par exemple), et d'autre part de la partie `EntityManager`, c'est la partie ORM, qui va persister les données :

```php
$entityManager = $doctrine->getManager();
```

Nous pouvons avoir plusieurs EntityManager: un par connexion à une base de données par exemple (dans le cas où vous gérez plusieurs BDD pour votre projet).

Nous allons donc persister les données (enregistrer l'object en tant que ligne de DB) grâce à l'EntityManager :

```php
$entityManager->persist($article); // On prépare l'article à être enregistré en BDD
$entityManager->flush(); // On execute effectivement la requête !
```

En résumé :

```php

// On créée un nouvel object Article
$article = new Article();
$article->setTitle('Nouveau titre !');
$article->setContent('Lorem ipsum....');

// On récupère l'EntityManager du service Doctrine :
// Notez que le code est plus court que dans l'expliation ci-dessus !
$em = $this->getDoctrine()->getManager();

// On donne l'object en gestion à Doctrine pour qu'il "persiste" l'object, c'est à dire qu'il prépare la requête
$em->persist($article);

// On execute effectivement la requête :
$em->flush();
```

Et voilà ! L'article est enregistré en base de données. On peut dorénavant **(sur le même object que ci-dessus !)**, faire un `$article->getId()` pour récupérer l'ID de l'objet nouvellement enregistré.

### 4.7. Lire des données (READ)

> :rocket: Exercice 21 :rocket: |
> ---------|
> Affichez dans un `dd()` puis dans Twig la liste des articles. |


Lors de la création de notre entité, un fichier `Repository\ArticleRepository.php` a été créé : le repository est le fichier qui s'occupe de récupérer les données de la base de données.

Voici comment il s'utilise :

```php
// On importe le repository de l'entity Article
$articleRepository = $this->getDoctrine()->getRepository(Article::class);

// Tous les articles
$articles = $articleRepository->findAll();

// Un article (par son ID)
$article = $articleRepository->find(43);

// Une collection d'articles (search par un champ)
$articles = $articleRepository->findBy(['title' => 'Hello title!']);
```


> :rocket: Exercice 22 :rocket: |
> ---------|
> Voir ci desous : |

```
Créez un ProductsController avec les routes suivantes : 
    GET /products 
    GET /products/new 
    POST /products 

- Créez l'entité suivante : 
Product
----
name (string)
price (int)
quantity (int)


Dans    GET /products  : faites une page avec Twig qui affichera la liste des produits. Vous pouvez en créer à la main dans la base de données pour tester.

Dans GET /products/new : faites un formulaire de création d'un produit avec Twig qui ira vers la route POST /products . Conseil : pour faire le lien dans le "action" du formulaire, il vous faut renseigner le name de la route de destination, que vous aurez renseigné au préalable dans le controller, de cette façon :
<form action="{{ path('products_new'}}" method="post">


Dans POST /products, vous récupérerez les données du formulaire grâce à $request et vous créérez un nouveau Product. Conseil pour récupérer les données du formulaire dans $request :
$request->request->get('title');


À la fin de la méthode du controller qui traite l'insert POST /products, faites une redirection vers la page GET /products grâce à $this->redirectToRoute('nom_de_la_route');
```

### 4.8. Lire des données: requêtes complexes avec le Repository et le QueryBuilder de Doctrine


> :rocket: Exercice 23 A :rocket: |
> ---------|
> en page d'accueil, grâce à une méthode findByQuantityNotNull() dans leProductController, affichez la liste des produits dont la quantité n'est pas nulle |


> :rocket: Exercice 23 B :rocket: |
> ---------|
> faire un formulaire de recherche en page d'accueil qui ira vers  une route /products/search du ProductController, qui retournera les éléments recherchés grâce à une méthode créée dans le ProductRepository (findBySearch($elementDeRecherche))  Par exemple, quand je saisis chaise dans le formulaire je dois tomber sur les produits dont le name est "Chaise longue", "Grande chaise en bois", etc. Il faudra faire une requête avec LIKE %chaise% . Inspirez vous d'exemples grâce à une recherche Google également car les %  auront une petite particularité pour fonctionner dans votre requête si jamais elle ne marche pas tout de suite. |

> Documentation: [Doctrine - Working with Query Builder](https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/query-builder.html)

On peut bien sûr exécuter des requêtes plus complexes avec le repository, éditions par exemple le fichier `src/Repository/ArticleRepository.php`.

Le fichier contient deux exemples commentés, décommentons le premier exemple :

```php
/**
 * @return Article[] Returns an array of Article objects
 */

public function findByExampleField($value)
{
    return $this->createQueryBuilder('a')
        ->andWhere('a.exampleField = :val')
        ->setParameter('val', $value)
        ->orderBy('a.id', 'ASC')
        ->setMaxResults(10)
        ->getQuery()
        ->getResult()
    ;
}
```

On voit comment est composée une requête avec le QueryBuilder, avec par exemple :
- l'ajout de paramètres : on a `$value` en paramètres de la méthode. On prépare la requête avec une clé `:val`dans le `andWhere()`, et on va ajouter le paramètre à la requête avec `setParameter(key, $var)`.

- `setMaxResults(10)` : permet de limiter les résultats... à 10 !

Pour utiliser cette requête, on peut l'appeler dans le contrôleur. Disons que nous l'avons renommée `findByName($name)` au lieu de `findByExampleField($value)`:

```php
$articles = $articleRepository->findByName('sciences');
```


> :rocket: Exercice 24 :rocket: |
> ---------|
> Faites une  page `GET /products/{product}` qui affichera un produit (page show). |


### 4.8. Mettre à jour (UPDATE)

> :rocket: Exercice 25 :rocket: |
> ---------|
> Faites une  page `GET /products/{product}/edit` qui sera un formulaire d'édition d'un produit. |


Maintenant que nous savons lire une donnée et écrire une donnée, nous allons mixer les deux et faire une méthode d'update.

C'est aussi l'occasion de voir des notions nouvelles :

- Nous passons en argument à la méthode la requête qui vient du client, `Request $request`, afin de récupérer les données issues d'un formulaire

- Nous passons un paramètre à la route, `id`, un nom interne à l'application `articles_edit` et une liste de méthodes HTTP autorisées sur cette route `POST` (ce qui veut dire qu'aller sur `/articles/{id}/edit` depuis un navigateur en GET ne marchera pas !). Pour prendre en compte l'id, on doit le passer en argument à la méthode : on peut aussi forcer le type ! `Article $article`. Grâce à cela, Symfony s'occupera pour nous de récupérer l'article dont l'id est égal à `{id}`.

```php
// @Route("/articles/{id}/edit", name="articles_edit", methods={"POST"})
public function update(Request $request, Article $article) {

}
```

Sans appeler l'article `$article` en paramètres avec `{id}` nous aurions aussi pu faire :

```php
// @Route("/articles/{id}/edit", name="articles_edit", methods={"POST"})
public function update(Request $request, int $id) {

    $articleRepository = $this->getDoctrine()->getRepository(Article::class);
    $article = $articleRepository->find($id);

}
```

Maintenant que nous avons notre Entity `$article`, nous allons l'éditer et la flusher comme pour un insert :

```php
// @Route("/articles/{id}/edit", name="articles_edit", methods={"POST"})
public function update(Request $request, Article $article) {

    // On met à jour l'article
    $article->setTitle('Nouveau titre mis à jour');
    // On récupère l'EntityManager et on met à jour (sans persister, juste flush)
    $entityManager = $this->getDoctrine()->getManager();
    $entityManager->flush();
}
```

### 4.9. Supprimer un object (DELETE)


> :rocket: Exercice 26 :rocket: |
> ---------|
> Faites une  page `GET /products/{product}/delete` qui sera un formulaire de suppression d'un produit. |


La suppression est très facile en utilisant tout ce que nous venons de voir :

```php
$entityManager->remove($article);
$entityManager->flush();
```


> :rocket: Exercice 27 :rocket: |
> ---------|
> Sur une page `GET /products` qui liste tous les produits, ajoutez également des liens vers les pages show, edit, delete de chaque produit. |

```
Les liens avec paramètres se crééent ainsi :
{{ path('nom_de_la_route', {param1: value1, param2: value2} ) }}


Exemple :

Selon ce qu'attend la route (un id, l'objet lui même...)
{{ path('article_show', {id: article.id} ) }}

Ou alors :
{{ path('commande_edit', {commande: commande'} ) }}
```



## 5. Commandes make

### 5.1. make:controller

Vous pouvez créer un nouveau contrôleur avec la commande `make:controller PagesController`. Ce contrôleur contiendra une première page `index()` par défaut avec un template dans `templates/pages/index.html.twig` !

## 6. Forms

> Documentation : [Forms](https://symfony.com/doc/current/forms.html)



> :rocket: Exercice 28 :rocket: |
> ---------|
> Voir ci-dessous : |

```
1. Créez une entité Category (title: string, description: text null). Créez et exécutez une migration.
2. Créez un formulaire Symfony pour l'entity Category
3. Créez un CategoryController avec 2 routes : category_index (get)  et category_new (get, post) .
4.  Dans la navbar ou la page d'accueil, faites un lien vers category_index
5. Dans category_index, faites un lien vers category_new
6. Dans la méthode de category_new, gérez le formulaire Symfony et affichez-le. Vérifiez si les données s'enregistrent en bdd
```


### 6.1. make:form

Vous pouvez créer un formulaire auto-généré (`Type`) pour une entité : Symfony lira l'Entity et crééra le formulaire correspondant : `make:form Article`. Cela crééra un fichier dans `src/Form/ArticleType.php`.

Pour intégrer le formulaire, il suffira ensuite de l'appeler dans le contrôleur de cette façon :

```php

// /new est accessible en 2 méthodes:
// GET : pour AFFICHER le formulaire
// POST : pour TRAITER le formulaire

/**
* @Route("/new", name="product_new", methods={"GET","POST"})
*/
public function new(Request $request): Response
    {

    // CAS GET (affichage) :
        // On prépare l'article à créer avec le formulaire
        $article = new Article();

        // On prépare le formulaire : on utilise le service createForm avec en arguments: le formulaire généré (ArticleType) et l'objet traité par le formulaire ($article)
        $form = $this->createForm(ArticleType::class, $article);

    // CAS POST (traitement) :
        // On indique au formulaire de traiter la requête
        $form->handleRequest($request);

        // Si le formulaire a été envoyé et est valide, on le traite
        if ($form->isSubmitted() && $form->isValid()) {

            // On enregistre la donnée
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($product);
            $entityManager->flush();

            // On redirige vers la page article_index
            return $this->redirectToRoute('article_index');
        }

    // CAS GET ou CAS POST SI FORMULAIRE INVALIDE (if ci-dessus) :
    // On affiche le formulaire
        return $this->render('product/new.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }
```

#### Afficher le formulaire généré dans Twig

Si on regarde le `return` de la méthode ci-dessus :

```php
return $this->render('product/new.html.twig', [
    'product' => $product,
    'form' => $form->createView(),
]);
```

On voit qu'on envoie à Twig une variable `form`. Cette variable contiendra un formulaire prêt à être affiché et généré automatiquement !

Dans `new.html.twig`, à l'endroit où afficher le formulaire :

```twig
{{ form_start(form) }}
    {{ form_widget(form) }}
    <button>Créer</button>
{{ form_end(form) }}

```
- `form_start` va ouvrir la balise `<form> pour le formulaire passé en paramètres à Twig depuis le controller, nommé `form`
- `form_widget` va afficher tous les champs du formulaire à la suite avec un style par défaut
- `form_end` va fermer la balise `<form>` du formulaire `form` passé en paramètres à Twig depuis le controller.

### 6.2. Styliser nos formulaires générés

Les formulaires autogénérés peuvent prendre le style Boostrap en modifiant `config/packages/twig.yaml` et en ajoutant l'attribut suivant :

```twig
twig:
    form_themes: ['bootstrap_4_layout.html.twig']
```

> **Attention**, ce sont bien 4 espaces et non pas une tabulation !

### 6.3. FormTypes

> Documentation [Forms](https://symfony.com/doc/current/forms.html)
> Documentation [Form Types Reference](https://symfony.com/doc/current/reference/forms/types.html)

Les formulaires peuvent donc être créés de 3 façons :
- Par la commande `make:crud` qui génère entre autres le formulaire généré pour une Entity
- Par la commande `make:form` qui ne génère que le formulaire généré pour une Entity
- Directement à la main dans un fichier Type ou dans le controller

Voyons comment sont composés les formulaires générés dans Symfony, prenons par exemple un `LocationType` (formulaire d'ajout d'adresses) :

```php
public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class)
            ->add('street_number', IntegerType::class)
            ->add('street_name', TextType::class)
            ->add('zip', IntegerType::class)
            ->add('city', TextType::class)
            ->add('country', CountryType::class)
            ->add('longitude')
            ->add('latitude')
        ;
    }
```

On utilise une instance de `FormBuilderInterface` pour générer les formulaires.

Chaque champ est ajouté avec `add()` qui prend 3 arguments :
- le nom du champ
- la classe `Type` correspondante, qui va gérer le formulaire selon le type (DateTimeType, EmailType...)


### 6.4. Relations 1-N et N-N et formulaires

> :rocket: Exercice 29 :rocket: |
> ---------|
> Voir ci-dessous : |

```
1. Ajoutez un champ category  à l'entité Product (grâce à make:entity Product). Voir le cours 7.2 pour apprendre à faire une relation. Pensez à faire et executer une migration.
2. Modifiez le ProductController  pour utiliser un formulaire Symfony tout comme on fait pour Category. Il faudra gérer le champ category  dans le formulaire, inspirez vous du cours 6.4 ! Assurez vous d'avoir des catégories en bdd pour pouvoir tester le formulaire qui inclura le choix d'une category.
3. Dans les pages GET /product, GET /product/{product}  et  GET /, affichez le nom de la catégorie du produit grâce à product.category.title
```

On peut ajouter une relation dans un formulaire, de sorte à ce que, par exemple, avec `Article 1-N Category`, nous ayons la liste des catégories dans un select !

```php
//...
->add('category', EntityType::class, [
    'class' => Category::class, // Quelle classe est reliée au champ category
    'choice_label' => 'name', // Quel champ de Category afficher dans le select
])
//...
```

Dans le cas d'une relation N-N (`Tag N-N Article`), on aurait plutôt un select multiple :

```php
//...
->add('tags', EntityType::class, [
    'class' => Tag::class,
    'choice_label' => 'name',
    'multiple' => true
])
//...
```

> **Attention :** Choisissez le bon cas d'usage selon votre relation (mettre un selct multiple ou non), sinon vous aurez un bug !

### 6.4. Validations
> Documentation : [Validation](https://symfony.com/doc/current/validation.html)
> Documentation : [Constraints](https://symfony.com/doc/current/validation.html#constraints)

Les formulaires peuvent être validés de plusieurs façons :

#### 6.4.1. Validations par les annotations

Ces validations se font au niveau de l'entité, par exemple on rend ici unique le titre avec `UniqueEntity` et on limite la taille du titre à entre 2 et 50 caractères.

```php

// ...
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @UniqueEntity("title")
 */
class Article {

     /**
     * @Assert\Length(
     *      min = 2,
     *      max = 50,
     *      minMessage = "Your first name must be at least {{ limit }} characters long",
     *      maxMessage = "Your first name cannot be longer than {{ limit }} characters"
     * )
     * @ORM\Column(type="string")
     */
    private $title;
// ...
```

#### 6.4.2. Validation par les FormType

Cette fois, dans le fichier `src/Form/UserType` :

```php
->add('nickname', TextType::class,[
    'constraints' => [
        new Length([
            'min' => 1,
            'minMessage' => 'Your nickname should be at least {{ limit }} characters',
            'max' => 20,
            'maxMessage' => 'Your nickname should be maximum {{ limit }} characters',
        ]),
    ],
])
```

### 6.5. Créer un CRUD grâce à make

Maintenant que vous savez composer un CRUD complet en Symfony, le configurer et le customiser : On peut créer automatiquement un CRUD pour une entité (qui doit exister avant de faire la commande) : `make:crud Article`.

La commande va créer un `controller`, un ficher `Type` (le formulaire généré) et des vues dans `/template`.

> **Attention:** Il est très important de bien comprendre les fonctionnements que nous voyons de voir jusqu'à présent ! Bien que la commande `make:crud` fait "tout ça d'un coup", c'est important de comprendre tout ce que nous avons vu plutôt que d'utiliser des générateurs afin de savoir comment les débugger !


## 7. Notions diverses

> Maintenant que nous avons vu comment créer un CRUD en Symfony, gérer les routes, le MVC..., il s'agit surtout d'apprendre des pratiques et techniques au cas par cas.

### 7.1. Rediriger vers une autre route

```php

// Pour rediriger vers /articles/{id} (name="articles_show")
return $this->redirectToRoute('articles_show', [
        'id' => $article->getId()
    ]);
```


### 7.2. Entities : Relations

On peut ajouter une relation entre deux entités de la façon suivante :

```sh
php bin/console make:entity Article # On édite l'entité Article

# ATTENTION: Au pluriel ou au singulier en fonction de la relation !!!
# ATTENTION: On ne met pas l'id mais le nom de la relation !!!
New property name (press <return> to stop adding fields):
> category


# Vous pouvez taper directement le type de relation ou taper "relation" pour avoir la liste des relations disponibles
Field type (enter ? to see all types) [string]:
> relation

# On parle bien de l'entité (singulier, première lettre majuscule)
What class should this entity be related to?:
> Category

What type of relationship is this? # ManyToOne, OneToMany, OneToOne, ManyToMany

Relation type? [ManyToOne, OneToMany, ManyToMany, OneToOne]:
> ManyToOne

# Accéder aux articles depuis une catégorie ?
Do you want to add a new property to Category so that you can access/update Article objects from it - e.g. $category->getArticles()? (yes/no) [yes]:
> yes

A new property will also be added to the Category class so that you can access the related Article objects from it.

New field name inside Category [articles]:
> articles
```

Pensez à migrer :
```sh
php bin/console doctrine:migrations:migrate
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

Dorénavant nous aurons accès depuis une entity à une autre. Par exemple, la catégorie depuis l'article :

```php

// On prend le repository de Article
$articleRepository = $this->getDoctrine()->getRepository(Article::class);
// On récupère le premier article
$article = $articleRepository->find(1);

// On a accès à sa catégorie
$category = $article->getCategory(); // object Category
```

Les articles depuis la catégorie :

```php
// On prend le repository de Category
$categoryRepository = $this->getDoctrine()->getRepository(Category::class);

// On récupère la catégorie Sciences
$article = $categoryRepository->findBy(['name' => 'Sciences']);

// On a accès à ses articles
$category = $article->getArticles(); // object Collection<Article>
```

### 7.3. Affichage des éléments d'une collection

On peut, dans la page d'une catégorie par exemple, afficher tous les éléments :

```twig

{% for article in category.articles %}

    <li>
        <a href="{{ path('article_show', { id: article.id }) }}">
            {{ article.title }}
        </a>
    </li>

{% endfor %}
```

> **Note :** Voyez comme nous avons passé un argument à la route `article_show`! En effet la route est quelque chose comme `/article/{id}` et c'est ici la manière de passer l'argument `{id}` avec `path()` dans Twig.

### 7.4. Utiliser des assets (img, css, js)

Utiliser des assets dans Symfony (CSS, JS, images) :

Mettre les fichiers dans le dossier public de symfony, par exemple :

```
public/
    assets/
        img/
           logo.png
        css/
           styles.css
        js/
           app.js
```

2/ Appeler les éléments dans Twig grâce à {{ asset('/chemin/depuis/public') }} , par exemple pour les fichiers ci dessus 
:

```html
<img src="{{ asset('/assets/img/logo.png') }}">
<script src="{{ asset('/assets/img/app.js') }}"></script>
<style href="{{ asset('/assets/css/styles.css') }}">
```

## 8. Security et Auth
> Documentation : [Security](https://symfony.com/doc/current/security.html)

L'authentification peut être générée par Symfony en suivant une petite recette :
- On créée la classe User via le générateur
- On créée l'authenticateur
- On créée le formulaire d'enregistrement

### 8.1. User

Dans la console : `php bin/console make:user`

La console vous demandera quelques informations à propos de votre classe User (le nom, la clé unique...). Il faut noter qu'elle implémentera `UserInterface` de sorte à pouvoir fonctionner avec l'authentification de Symfony.

### 8.2. Authenticateur

Dans la console : `php bin/console make:auth`
Pour les questions du CLI :
- Style of authentication : `Login Form Authenticator`
- Classname : `FormAuthenticator`
- Controller class: `SecurityController`

Et voilà, la route `/login` a été créée ainsi que le système d'authentification !

Vous devez modifier le fichier `src\Security\LoginAuthenticator` dans la méthode `onAuthenticationSuccess()` (vers la ligne 89) de la façon suivante :

```php

// Supprimer la ligne suivante :
throw new \Exception('TODO: provide a valid redirect inside '.__FILE__);

// Ajouter la ligne suivante :
return new RedirectResponse($this->urlGenerator->generate('some_route'));
```

> **Attention:** Assurez vous de mettre une route existante à la place de `some_route` !!! Il s'agit du nom de la route vers laquel on est redirigé après s'être loggué. L'espace membres ou l'accueil par exemple !

### 8.3. Route Logout

> **Attention** Depuis Symfony 4.3, ce chapitre n'est plus utile : la route logout est créée automatiquement.


Pour ajouter la route Logout, nous devons :

#### 8.3.1. Modifier security.yaml

Ajoutez la partie `firewalls/main/logout` de la façon suivante dans `/src/config/security.yaml` (attention, ce n'est que le bloc `logout` qu'il faut rajouter, le reste existe déjà !) :

```yaml
firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false
        main:
            anonymous: true
            guard:
                authenticators:
                    - App\Security\FormAuthenticator
            logout:
                path: /logout
                target: /
```

#### 8.3.2. Ajouter une route dans routes.yaml

Ajoutez la route suivante dans `src/config/routes.yaml` :

```yaml
logout:
    path: /logout
```

Et voilà, la route `/logout` sera accessible pour déconnecter l'utilisateur.

### 8.4. Registration Form

Dans la console : `php bin/console make:registration-form`

Nous allons générer le formulaire et le contrôleur de création de compte. Répondez les réponses par défaut au CLI.

Voilà, vous avez un formulaire généré dans la route `/register` !

### 8.5. Utiliser l'authentification dans le controller

Par défaut, nos utilisateurs ont tous un rôle `ROLE_USER` (défini dans `User::getRoles()`). Nous pouvons utiliser l'annotation `@IsGranted` pour bloquer l'accès à une route :

```php
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
// ...
    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/", name="location_index", methods={"GET"})
     */
    public function index(LocationRepository $locationRepository): Response
    {
        return $this->render('location/index.html.twig', [
            'locations' => $locationRepository->findAll(),
        ]);
    }
```

#### 8.5.1. À toutes les routes d'un contrôleur :

```php
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
// ...
/**
 * @IsGranted("ROLE_USER")
 * @Route("/location")
 */
class LocationController extends AbstractController
{
    /**
     * @Route("/", name="location_index", methods={"GET"})
     */
    public function index(LocationRepository $locationRepository): Response
    { /* ... */ }

    /**
     * @Route("/new", name="location_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    { /* ... */ }
```
> Toutes les routes `/location` ne sont accessibles qu'aux utilisateurs logués (`ROLE_USER`).

#### 8.5.2. Ou un mix des deux !

```php
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
// ...
/**
 * @IsGranted("ROLE_USER")
 * @Route("/location")
 */
class LocationController extends AbstractController
{
    /**
     * @Route("/", name="location_index", methods={"GET"})
     */
    public function index(LocationRepository $locationRepository): Response
    { /* ... */ }

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/new", name="location_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    { /* ... */ }
```
> Toutes les routes `/location` ne sont accessibles qu'aux utilisateurs logués (`ROLE_USER`), de plus, `/location/new` n'est accessible qu'aux administrateurs (`ROLE_ADMIN`).

> **Attention:** N'oubliez pas le `use` pour pouvoir utiliser l'annotation !

### 8.6. Utiliser l'authentication dans Twig

On peut bien sûr vérifier l'authentification d'un utilisateur dans twig, par exemple :

```twig
{% if app.user %}
    <a href="{{ path('user_home') }}">Accédez à votre espace membre</a>
{% endif %}

{% if is_granted('ROLE_ADMIN') %}
    <a href="{{ path('admin_dashboard') }}">Accédez à votre espace administrateur sécurisé !</a>
{% endif %}

{% if not is_granted('ROLE_AUTEUR') %}
    <p>Désolé, cet espace n'est accessible qu'aux auteurs !</p>
{% endif %}

```


## 9. Injection de services

Il existe 3 façons dans une classe d'injecter un service. Voyons par exemple comment injecter un Repository (on peut bien sûr en injecter plusieurs de la même manière s'il y a besoin de plus de dépendances !).

### 9.1. Injection par le constructeur

```php
class ArticleController extends AbstractController {

    private $articleRepository;

    public function __construct(ArticleRepository $articleRepository) {
        $this->articleRepository = $articleRepository;
    }

    public function index() {

        $articles = $this->articleRepository->findAll();

        return $this->render('articles/index.html.twig, [
            'articles' => $articles
        ]);
    }
}
```

### 9.2. Injection par la méthode (autowiring)

> C'est ce que l'on fait quand on appelle `Request $request` dans une méthode !

```php
class ArticleController extends AbstractController {

    public function index(ArticleRepository $articleRepository) {

        $articles = $articleRepository->findAll();

        return $this->render('articles/index.html.twig, [
            'articles' => $articles
        ]);
    }
}
```

### 9.3. Appel par le containeur de services

```php
class ArticleController extends AbstractController {

    public function index() {

        $articleRepository = $this->getDoctrine()->getRepository(Article::class);

        $articles = $articleRepository->findAll();

        return $this->render('articles/index.html.twig, [
            'articles' => $articles
        ]);
    }
}
```
