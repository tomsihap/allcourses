# PHP - POO : TP

> Vous allez créer un projet en version MVC (Model Vue Controller), qui sera une application de gestion d'animaux pour un zoo !

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
    /views
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

Pour chacune des classes, ajoutez des attributs `private` pour chacun des champs de la table correspondante (en `camelCase`), ainsi que des getters (`getAttribute()`) pour chacun des champs.

Ajoutez également des setters (`setAttribute($param)`) pour chacun des champs.

Enfin, documentez avec PHPDoc et typez votre classe !

Exemple :

```php

class MyClass {

    /**
     * @var string
     */
    private $attribute;

    /**
     * @return string
     */
    public getAttribute()
    {
        return $this->attribute;
    }

    /**
     * @param string $attribute
     * @return self
     */
    public function setAttribute(string $attribute) : self
    {
        $this->attribute = $attribute;
        return $this;
    }
}
```

## 3. Importer les models dans notre projet

### 3.1. Arborescence
Nous allons commencer à organiser notre projet. Modifiez et complétez l'arborescence de fichiers existante en la suivante :

```
/wf3zooMvc
    /config
        config.php
    /src
        /models
            Animal.php
            AnimalZoo.php
            Zoo.php
        /controllers
    /views
    index.php
```

- `/config` contiendra nos fichiers de configuration. C'est à dire, toutes les données globales à l'application, par exemple, les constantes pour configurer la base de données, la création de sessions, l'import de fichiers qui devrait être disponible partout dans le code...
  - `config.php` sera notre fichier de configuration principal. Nous n'en aurons qu'un seul pour notre projet, mais rien ne nous empêche de diviser la configuration en plusieurs sous fichiers (un fichier pour la config de la BDD, un fichier pour les imports de fichiers, un fichier pour la config des mails...)

- `/src` contiendra les fichiers propres à l'application elle-même dans un pattern MVC. Ce sont tous ses "rouages".
  - `/models` contiendra les classes Model, ce sont les classes qui représentent les tables de la base de données.
  - `/controllers` contiendra les classes Controller, ce sont les classes qui seront lancées selon la page demandée par l'utilisateur et qui gèreront la récupération des données avec le Model, et l'affichage des pages avec les Views.

- `/views` contiendra les templates, les fichiers qui contiendront le HTML et dont les données seront injectées par le controller

- `index.php` est la porte d'entrée de notre application


### 3.2. `config.php`

Tout d'abord, importez dans `index.php` le fichier `config.php`. Pour s'assurer que les `require` importent depuis le bon dossier, notament lorsque vous avez plusieurs fichiers imbriqués en `include` ou `require`, utilisez systématiquement `__DIR__` avec ces fonctions pour préfixer les chemins. Par exemple, pour nous :

```php
// index.php

require  __DIR__ . '/config/config.php';
```

- Dans `config.php`, importez toutes les classes situées dans `src/models`.
- Testez dans `index.php` en créant des objets `$animal`, `$animalZoo` et `$zoo` et en leur attribuant des données via leurs setters pour vérifier que tout fonctionne.

### 3.3. Importer automatiquement toutes les classes

Importer manuellement nos classes peut rapidement être contraignant ! Heureusement, PHP nous fournit un outil pour charger automatiquement les classes lorsque l'on en a besoin. Il s'agit de l'autoloader.

**Exercice 1 :** Trouvez un moyen, grâce à la fonction `spl_autoload_register`, de charger automatiquement les classes situées dans `src/models` depuis `config.php`, sans utiliser les `require` (vous pouvez les supprimer).

**Exercice 2:** Améliorez `spl_autoload_register` pour récupérer des classes qui pourraient aussi être situées dans `src/controllers`.