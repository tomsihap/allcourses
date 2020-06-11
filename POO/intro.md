- [TP : Programmation orientée objet en PHP](#tp--programmation-orientée-objet-en-php)
  - [Chapitre 1 : Le projet](#chapitre-1--le-projet)
  - [Chapitre 2 : Une classe et un objet](#chapitre-2--une-classe-et-un-objet)
    - [Créer une classe](#créer-une-classe)
    - [Créer un objet](#créer-un-objet)
    - [Alors c'est quoi, une classe et un objet ?](#alors-cest-quoi-une-classe-et-un-objet-)
      - [Une classe](#une-classe)
      - [Un objet](#un-objet)
      - [Les objets sont des sortes d'arrays, en mieux](#les-objets-sont-des-sortes-darrays-en-mieux)
    - [Un autre avantage sur les arrays](#un-autre-avantage-sur-les-arrays)
  - [Chapitre 3 : Les méthodes](#chapitre-3--les-méthodes)
    - [Appeler un attribut à l'intérieur d'une classe](#appeler-un-attribut-à-lintérieur-dune-classe)
      - [Ajouter d'autres attributs](#ajouter-dautres-attributs)
    - [Valeurs par défaut](#valeurs-par-défaut)
  - [Chapitre 4 : Des méthodes qui servent vraiment à quelque chose](#chapitre-4--des-méthodes-qui-servent-vraiment-à-quelque-chose)
    - [Arguments de méthodes](#arguments-de-méthodes)
    - [Améliorons notre méthode](#améliorons-notre-méthode)
  - [Chapitre 5 : Différents objets](#chapitre-5--différents-objets)
  - [Chapitre 6 : Faire interagir des objets](#chapitre-6--faire-interagir-des-objets)
  - [Chapitre 7 : Un peu de documentation](#chapitre-7--un-peu-de-documentation)
  - [Chapitre 8 : Utiliser des objets dans notre projet](#chapitre-8--utiliser-des-objets-dans-notre-projet)
    - [Déplacer la classe `Ship` dans un fichier à part](#déplacer-la-classe-ship-dans-un-fichier-à-part)
    - [On a vraiment besoin des `require` ?](#on-a-vraiment-besoin-des-require-)
    - [Créer de vrais objets !](#créer-de-vrais-objets-)
    - [Traitons les objets... Comme des objets !](#traitons-les-objets-comme-des-objets-)
    - [Correction des `<select>`](#correction-des-select)
    - [Amélioration des `<select>`](#amélioration-des-select)
  - [Chapitre 9 : Accès privé](#chapitre-9--accès-privé)
    - [Setters](#setters)
      - [Exercice](#exercice)
      - [Exercice](#exercice-1)
    - [Getters](#getters)
      - [Exercice](#exercice-2)
      - [Exercice](#exercice-3)
  - [Chapitre 10 : Type-Hinting](#chapitre-10--type-hinting)
    - [Modifier `battle.php`](#modifier-battlephp)
    - [Changer la déclaration de type (ou type-hinting)](#changer-la-déclaration-de-type-ou-type-hinting)
    - [Exercice](#exercice-4)
    - [Finir les corrections dans `battle.php`](#finir-les-corrections-dans-battlephp)
  - [Chapitre 11 : Le constructeur](#chapitre-11--le-constructeur)
    - [Automatiquement en réparation](#automatiquement-en-réparation)
    - [Indiquer si le vaisseau est en réparation](#indiquer-si-le-vaisseau-est-en-réparation)
    - [Codons ça dans l'application !](#codons-ça-dans-lapplication-)
    - [Rendre disponible uniquement les vaisseaux fonctionnels](#rendre-disponible-uniquement-les-vaisseaux-fonctionnels)
    - [Arguments dans le constructeur](#arguments-dans-le-constructeur)
    - [Ajoutons ça à notre application](#ajoutons-ça-à-notre-application)
    - [Quand passer des arguments au constructeur, quand utiliser des setters ?](#quand-passer-des-arguments-au-constructeur-quand-utiliser-des-setters-)

# TP : Programmation orientée objet en PHP
> Téléchargez le repository et travaillez dans le dossier `project` !

Nous allons travailler à améliorer notre jeu HB Spaceships, qui est un combat entre vaisseaux spatiaux, développé en PHP procédural. Et si on mettait un peu de POO dedans ?

Les règles du jeu sont simples : on choisit un vaisseau dans chaque camp, un nombre de vaisseau qui va combattre, et c'est parti !

Chaque vaisseau possède un nom `name`, une force d'attaque `weapon_power`, un booster Spatiodrive `spatiodrive_booster` et une résistance `strength`.

À chaque tour, chaque groupe attaque l'autre avec sa force d'attaque. Si la résistance d'un des groupes de vaisseaux tombe à 0, le groupe a perdu.

À chaque tour, chaque groupe peut réussir à déclancher son booster Spatiodrive qui détruit instantanément l'autre ! Par exemple, le Jedi Starfighter a un booster Spatiodrive de 15 : il a 15 chances sur 100 de réussir à le déclancher pendant son tour.

## Chapitre 1 : Le projet
Avant tout, explorez le projet tel qu'il est actuellement : il s'agit d'un jeu de bataille spatiale en 3 fichiers :
- `index.php` qui contient l'interface du jeu
- `functions.php` qui contient une fonction qui retourne la liste des vaisseaux, et la fonction principale de bataille spatiale, `battle()`
- `battle.php` qui appelle la fonction `battle()` et affiche le résultat

Comprennez bien tout le projet avant de continuer !


## Chapitre 2 : Une classe et un objet

### Créer une classe
Créez un fichier `play.php` dans le projet dans lequel on va pouvoir tester des choses. Commençons tout de suite avec une classe : créez enfin votre première classe en PHP nommée `Ship` dans ce fichier !

```php
class Ship {

}
```

### Créer un objet
La POO, c'est des classes et des... objets. Créez donc votre premier objet en PHP !

```php
$myShip = new Ship();
```

Ce code ressemble un peu à si nous avions appelé une fonction `Ship()`, excepté pour ce nouveau mot clé `new` qui indique à PHP que nous voulons un nouvel *objet instancié de la classe `Ship`*. On expliquera ce que tout ça veut dire plus tard !

Si on actualise la page, toujours aucun changement. Créer une classe et l'instancier ne fait rien pour le moment, c'est comme appeler une fonction vide : on n'a pas encore expliqué quoi faire à nos classes et objets !

### Alors c'est quoi, une classe et un objet ?

#### Une classe
Imaginez que vous êtes le manager d'un dock d'arrivée de vaisseaux sur la Deathstar. Pour éviter tout embouteillage à l'arrivée, vous avez besoin de faire l'inventaire des arrivées : leur nom, taille, est-ce qu'ils ont un moteur de distorsion, quel est leur niveau de carburant... Et imaginez aussi que même si vous êtes sur un vaisseau-planète géant, vous êtes obligé de tenir tout ce registre à la main en imprimant un modèle de fichier vide créé sur Word !

Une classe, c'est un peu comme cette fiche d'inventaire, avec des cases à remplir pour le nom et la taille, une coche oui/non pour le moteur de distorsion...

Cette classe n'est donc pas un vaisseau, mais c'est tout comme : elle définit tous les attributs qu'un vaisseau pourrait avoir.

#### Un objet
Un objet, ça correspond donc à... une fiche d'inventaire remplie pour un vaisseau. Ce n'est pas exactement le vaisseau lui-même, c'est sa fiche d'inventaire.

#### Les objets sont des sortes d'arrays, en mieux
Rapellez-vous les arrays : les arrays contiennent des données attachées à des clés (`keys`) : par exemple, on pourrait avoir la clé `niveauCarburant` et sa valeur `1450`, ou encore `moteurDeDistortion` et une valeur `true`.

Un objet fonctionne exactement pareil ! Il y a cependant une grosse différence entre les objets et les arrays: dans un array, on peut rajouter à la volée une nouvelle clé et sa valeur, le nombre de passagers par exemple. On peut aussi ne pas remplir une clé déjà existante, le nom ou la taille par exemple.

Avec un objet, on est obligé de prévoir en avance les données qui vont exister, et on sera obligé de ne remplir que celles-ci, pas une de plus.

Si on reprend notre rôle de manager dans le dock d'arrivée de la Deathstar, un array est un peu comme un fichier d'inventaire avec deux cases blanches sur une ligne : on peut rajouter de nouvelles informations en plus de celles prévues si l'on veut :
```
FICHE D'INVENTAIRE :
Nom     : ...
Taille  : ...
_______ : ...  <= espace pour informations additionelles si besoin
_______ : ...  <= espace pour informations additionelles si besoin
```

Par exemple, pour ce vaisseau, je remplis son nom, sa taille, mais pas son niveau de carburant, j'ai envie de renseigner sa couleur en plus, pour l'autre je renseigne la musique qui passe à la radio parce que le boulot est ennuyant... Si je donne 10 feuilles à mon manager, il n'a aucune garantie sur les données que j'aurais enregistré ou non.

Pour un objet, on aura la liste exact et complète des données dont j'ai besoin ! Si j'ai besoin d'enregistrer le nom de chaque vaisseau, je l'indique dans ma classe, on appelle ça un **attribut** :

```php
class Ship {
    public $name;
}

$myShip = new Ship();
```

Pour le moment, rien ne se passe. Mais maintenant, mes objets `Ship` ont l'autorisation d'avoir une donnée `name` ! Comment on l'indique ?

```php
$myShip = new Ship();
$myShip->name = "TIE Fighter";
```

Et comment je lis cette donnée ?
```php
$myShip = new Ship();
$myShip->name = "TIE Fighter";

echo "Nom du vaisseau : " . $myShip->name;
```

Essayez !

Un objet fonctionne exactement comme un array : au lieu d'avoir des propriétés accessibles en crochets `[]`, on a des attributs accessibles avec une flèche `->`. De plus, l'array peut contenir toutes sortes de données : l'objet lui, est limité par les données définies dans la classe.

**ATTENTION !** Techniquement, vous pourriez immédiatement écrire quelque chose comme `$myShip->weight = 1000;` et créer une nouvelle propriété `weight` immédiatement, sans avoir créé l'attribut dans la classe. Ne le faites surtout pas ! C'est du code qu'on ne doit pas voir dans un code propre.

### Un autre avantage sur les arrays

Les objets ont un autre avantage indéniable sur les arrays : essayez de mettre `$myShip` dans un `var_dump`. Vous avez accès à tous les attributs possibles pour cet objet ! Lorsque l'on `var_dump` un array, on ne sait pas quelles données sont possibles ou non, l'array peut contenir tout et n'importe quoi sans contrôle. Lorsque vous `var_dump` un objet, vous voyez immédiatement qu'il pourra contenir un `name`, mais jamais de `e-mail`, `phone`... Car ils ne sont pas inscrits dans le `var_dump` !

```php
var_dump($myShip);

// Affiche le résultat suivant :
object(Ship)[1]
  public 'name' => string 'TIE Fighter' (length=5)
```

## Chapitre 3 : Les méthodes
Pour le moment, nos objets ne sont que des "super-arrays", pas de quoi changer le monde. La grande force des objets est ailleurs: ce sont les **méthodes** !

Les méthodes ne sont rien d'autre que des **fonctions**. En fait, ce sont des fonctions qui existent... dans une classe. Pour créer une méthode, déclarez-la dans la classe avec `public function` :

```php
class Ship {
    public $name;

    public function sayHello() {
        echo "Hello !";
    }
}
```

Pour appeler une méthode, on utilise la même flèche `->` que pour les attributs :

```php
$myShip->sayHello();
```

On remarque que la seule différence avec les attributs (par exemple `$myShip->name`) est l'ajout des parenthèses dans `->sayHello()`, comme pour une fonction classique. Ne les oubliez pas !

Mais à quoi ça sert, une méthode ? Elles nous permettent maintenant d'avoir des classes qui sont des petits packs de données, comme un array, mais qui peuvent aussi effectuer des actions, ce qu'un array ne peut absolument pas faire !

Notre fonction `sayHello` est juste un exemple, rapellez-vous que les fonctions *retournent* quelque chose. Ajoutons une nouvelle propriété à notre classe qui retourne un nom. Pour le moment, on retourne un faux nom :

```php
class Ship {
    // ...
    public function getName() {
        return "Fake name !";
    }
}
```

Appelons cette méthode :
```php
$myShip = new Ship();
$myShip->name = "TIE Fighter";

echo "Nom du vaisseau : " . $myShip->getName();
```

Testez... Et voilà, on a notre faux nom ! Bien sûr, on aimerait plutôt avoir notre *vrai* nom de vaisseau. On sait que, à l'extérieur de la classe, avec notre variable `$myShip`, en mettant une flèche et le nom, on a notre nom de vaisseau (`->name`). Mais comment appeler ce nom de vaisseau *à l'intérieur de* la classe ?

### Appeler un attribut à l'intérieur d'une classe

On utilise une variable un peu spéciale appelée `$this`. Modifiez la méthode `getName()` ainsi :

```php
class Ship {
    // ...
    public function getName() {
        return $this->name;
    }
}
```

Voilà comment ça marche : quand on est **dans** une classe, on a accès à une variable un peu particulière nommée `$this`. Et `$this`, c'est en fait... N'importe quel `Ship` créé par la classe ! Dans notre exemple, on a un vaisseau `$myShip` nommé `TIE Fighter` : lorsque j'appelle `getName()` sur `$myShip`, `$this->name` vaut `TIE Fighter`. En fait, `$this` correspond à `$myShip` lui-même, et n'importe quels objets `Ship` eux-mêmes. Par exemple :

```php
$myShip = new Ship();
$myShip->name = "TIE Fighter";

echo "Nom du vaisseau : " . $myShip->getName(); // Affiche "TIE Fighter", car $this correspond à $myShip ici

$mySecondShip = new Ship();
$mySecondShip->name = "X-Wing Fighter";

echo "Nom du vaisseau : " . $mySecondShip->getName(); // Affiche "X-Wing Fighter", car $this correspond à $mySecondShip ici
```

#### Ajouter d'autres attributs
Notre classe `Ship` ne contient pour le moment qu'une seule propriété. Allez jeter un oeil à notre projet de base, dans `functions.php`, pour voir la liste des attributs de nos vaisseaux : `name`, `weapon_power`, `spatiodrive_booster`, `strength`. Ajoutons-les à la classe !

```php
class Ship {
    public $name;
    public $weaponPower;
    public $spatiodriveBooster;
    public $strength;
    // ...
}
```

Vous remarquerez que les attributs étaient en `snake_case` dans l'array, et sont maintenant en `camelCase` lorsqu'ils sont notés en variable. C'est de la convention : les clés d'arrays sont en `snake_case`, les variables ou attributs en `camelCase`.

**NOTE :** Toujours dans la convention, vous remarquerez que la classe possède une majuscule : elle est en `PascalCase`. C'est une convention pour les noms de classe, respectez-la aussi !

On a maintenant accès à toutes ces propriétés !

```php
$myShip->weaponPower = 150;
echo 'Force : ' . $myShip->weaponPower;
```

### Valeurs par défaut
On peut bien sûr donner des valeurs par défaut à nos attributs : c'est pratique pour créer un vaisseau dont on n'a pas toutes les valeurs tout de suite, par exemple.

```php
class Ship {
    public $name = '';
    public $weaponPower = 0;
    public $spatiodriveBooster = 0;
    public $strength = 0;
    // ...
}
```

Faites un `var_dump` de l'attribut `strength` pour voir ce que ça donne : `var_dump($myShip->stength);`

La valeur est de... zéro, ça fonctionne ! Essayez de changer sa valeur, puis refaites un `var_dump`:

```php
$myShip->strength = 100;
var_dump($myShip->strength);
```

La valeur a bien évidemment changé.

## Chapitre 4 : Des méthodes qui servent vraiment à quelque chose

Pour le moment, nos méthodes sont simples et ne font pas grand chose. Et si on commençait à créer des méthodes vraiment utiles ?

Par exemple, nos managers vont avoir besoin d'imprimer les informations sur les vaisseaux un peu partout dans la Deathstar. Jusque-là, ce qu'ils savent faire, c'est ça :

```php
echo "Vaisseau :" . $myShip->name . "(Force:" . $myShip->weaponPower . ", Booster spatiodrive: " . $myShip->spatiodriveBooster . ", Résistance : " . $myShip->strength . ")";
```

Ce qui affiche quelque chose comme : 
```
Vaisseau : X-Wing Fighter (Force: 100, Booster spatiodrive: 120, Résistance: 30)
```

Pratique, mais un peu long. Et puis, pour l'instant, ça ne fonctionne que pour `$myShip` : si on devait afficher les informations de `$mySecondShip`, on devrait réécrire la même chose avec cette nouvelle variable : 
```php
echo "Vaisseau :" . $mySecondShip->name . "(Force:" . $mySecondShip->weaponPower . ", Booster spatiodrive: " . $mySecondShip->spatiodriveBooster . ", Résistance : " . $mySecondShip->strength . ")";
```

Pas très pratique maintenant !

Et si on indiquait à nos objets comment communiquer eux-mêmes ces informations, sans avoir à le refaire à chaque fois ? Ajoutons une méthode à notre classe :

```php
class Ship {
    // ...

    public function getNameAndSpecs() {
        return "Vaisseau :" . $this->name . "(Force:" . $this->weaponPower . ", Booster spatiodrive: " . $this->spatiodriveBooster . ", Résistance : " . $this->strength . ")";
    }
}
```

Remarquez qu'on a la même chose, mais avec `$this` (c'est à dire : n'importe quel objet lui-même, qui vient de cette classe), et qu'on a ajouté `return` au lieu de `echo` (eh bien oui, ça reste une fonction, on **retourne** une valeur !).

Maintenant, pour afficher les informations de nos vaisseaux, on n'a plus qu'à écrire : 

```php
echo $myShip->getNameAndSpecs();
echo $mySecondShip->getNameAndSpecs();
```

Et voilà ! Quels que soient les vaisseaux, les managers n'ont **plus à se soucier de comment faire**, ils ont juste à appeler cette méthode sur le vaisseau pour imprimer ses spécifications. Pratique pour les managers stagiaires dans la Deathstar : aucune idée de comment ça marche, mais... ça marche.

### Arguments de méthodes
Comme pour une fonction classique, on peut ajouter des arguments à nos méthodes de classe. Par exemple, ajoutons un argument à notre méthode : est-ce que je veux la version courte, ou la version longue du texte ?

Pour ça, on ajoute un argument... booléen !

```php
class Ship {
    // ...

    public function getNameAndSpecs(bool $useShortFormat) {

        if ($useShortFormat) {
            return $this->name . "(F:" . $this->weaponPower . ", BS: " . $this->spatiodriveBooster . ", R : " . $this->strength . ")"; 
        }
        else {
            return "Vaisseau :" . $this->name . "(Force:" . $this->weaponPower . ", Booster spatiodrive: " . $this->spatiodriveBooster . ", Résistance : " . $this->strength . ")";
        }
    }
}
```

On essaie :

```php
echo $myShip->getNameAndSpecs(true);
// Affiche : "TIE Fighter (F:100, BS: 150, R:30)"

echo $myShip->getNameAndSpecs(false);
// Affiche : "Vaisseau : TIE Fighter (Force: 100, Booster spatiodrive: 150, Résistance: 30)"
```

### Améliorons notre méthode
Le manager en chef vient de passer derrière nous en râlant dans sa barbe : notre méthode est pratique, mais elle est un peu moche à lire. Voyons sa version corrigée :

```php
class Ship {
    // ...
    public function getNameAndSpecs(bool $useShortFormat) {

        if ($useShortFormat) {
            return sprintf(
                '%s (F:%s, BS:%s, R:%s)',
                $this->name,
                $this->weaponPower,
                $this->spatiodriveBooster,
                $this->strength);
        }
        else {
            return sprintf(
                'Vaisseau : %s (Force: %s, Booster spatiodrive: %s, Résistance: %s)',
                $this->name,
                $this->weaponPower,
                $this->spatiodriveBooster,
                $this->strength);
        }
    }
} 
```

Wow, nettement plus clair ! Plutôt que de concaténer, il a utilisé `sprintf` qui prend en premier argument la phrase complète à afficher, avec des `%s` à la place des variables, puis en autres arguments la liste des variables à remplacer à la place des `%s`, dans le bon ordre. Bizarre mais pratique !

Il râle aussi parce que les stagiaires managers sont perdus avec cette histoire de booléens en argument, ils les oublient tout le temps et tout bugue, il aimerait plutôt une valeur par défaut pour éviter d'avoir à le mettre à chaque fois :

```php
class Ship {
    // ...
    public function getNameAndSpecs(bool $useShortFormat = false) {
        // ...
    }
```

Et voilà. Fort, ce manager en chef. Si on essaie :
```php
// Ces deux-là sont pareils :
echo $myShip->getNameAndSpecs();
echo $myShip->getNameAndSpecs(false);

// Celui-là est la version longue :
echo $myShip->getNameAndSpecs(true);
```

En fait, une méthode, ça fonctionne vraiment comme une fonction sur tous les points.

## Chapitre 5 : Différents objets
Là où la POO est vraiment intéressante, c'est quand on créée plusieurs objets.

**Exercice :** le manager en chef vous demande d'essayer votre nouveau système de saisie d'inventaire. Trois vaisseaux ne vont pas tarder à arriver, vous devez saisir leurs informations à l'arrivée du quai de débarquement :

```
Vaisseau 1 : "Jedi Super Greater"
- Weapon Power de 150
- Spatiodrive Booster de 12
- Strength de 130

Vaisseau 2 : "Android Extra Fighter"
- Weapon Power de 400
- Spatiodrive Booster de 12
- Strength de 130

Vaisseau 3 : "Cargo Jumper"
- Weapon Power de 150
- Spatiodrive Booster de 12
- Strength de 130
```

Créez les 3 objets Ship pour ces 3 vaisseaux et affichez les informations des trois vaisseaux, en version courte et en version longue.

--- 

**Correction :** par exemple, pour chaque vaisseau :

```php
$firstShip = new Ship();
$firstShip->weaponPower = 130;
$firstShip->spatiodriveBooster = 20;
$firstShip->strength = 40;

echo $firstShip->getNameAndSpecs();
echo "<hr>";
echo $firstShip->getNameAndSpecs(true);
```

## Chapitre 6 : Faire interagir des objets
Comme le but de notre application est de faire combattre deux vaisseaux, on va pouvoir rendre les choses un petit peu plus intéressantes.

Pour commencer, essayons de créer une méthode dans notre classe qui permettent à nos vaisseaux de comparer leur force avec un autre vaisseau : c'est une méthode qui prend donc un autre vaisseau en argument, et qui compare cet autre vaisseau en argument avec le vaisseau lui-même.

```php
class Ship {
    // ...

    // "Est-ce que ce vaisseau a plus de résistance que moi ? (En anglais: Does this ship has more strength than me ?)"
    public function doesThisShipHasMoreStrengthThanMe($ship) {
        // ...
    }
}
```

Avant de remplir cette fonction, voyons comment nous aimerions l'utiliser. Partons du principe que nous ayons créé deux vaisseaux, deux objets `Ship` : `$myShip` et `$otherShip`. On aimerait pouvoir écrire des choses comme :

```php
// $myShip appelle une méthode ( doesThisShipHasMoreStrengthThanMe() ) qui permet de se comparer lui-même avec un autre vaisseau, nommé $otherShip, qu'on passe en arguments à (doesThisShipHasMoreStrengthThanMe() ).

if ($myShip->doesThisShipHasMoreStrengthThanMe($otherShip)) {
    echo $otherShip->name.' a plus de résistance.';
} else {
    echo $myShip->name.' a plus de résistance.';
}
```

Il faudrait que la méthode retourne `true` ou `false`, `true` si **l'autre vaisseau** a plus de force, `false` si c'est **le vaisseau qui appelle la méthode** qui a plus de force.

On aurait donc quelque chose comme :
```php
class Ship {
    // ...

    public function doesThisShipHasMoreStrengthThanMe($ship) {

        // On teste en fait : "l'autre vaisseau > ce vaisseau".
        
        // Si c'est effectivement vrai, ça retournera true. Sinon, si c'est faux, ça retournera false.

        // L'autre vaisseau, c'est celui passé en argument, $ship.

        // Ce vaisseau, c'est à dire celui qui appelle la méthode pour se comparer, c'est... $this!

        return $ship->strength > $this->strength;
    }
}
```
Et voilà, testez !

Pour être un peu plus cohérent, notre méthode prend bien évidemment en argument, un autre vaisseau. Précisons-le dans notre méthode :

```php
public function doesThisShipHasMoreStrengthThanMe(Ship $ship) {
        return $ship->strength > $this->strength;
    }
```

En ajoutant `Ship` devant l'argument `$ship`, on précise que l'argument doit forcément être un objet Ship ! Exactement comme on a précisé qu'il fallait un `bool` dans `getNameAndSpecs` avec `getNameAndSpecs(bool $useShortFormat = false)`.


## Chapitre 7 : Un peu de documentation
Gardons de bonnes habitudes en codant proprement dès le départ ! Nous avons de belles méthodes dans notre classe, ajoutons de la documentation pour que notre éditeur de texte ou IDE nous aide un peu lorsqu'on les utilise :

```php

class Ship {
    // ...

    /**
     * @param bool $useShortFormat
     */
    public function getNameAndSpecs(bool $useShortFormat = false)
    {
        // ....
    }
    
    /**
     * @param Ship $ship
     */
    public function doesThisShipHasMoreStrengthThanMe(Ship $ship)
    {
        // ...
    }
}
```

## Chapitre 8 : Utiliser des objets dans notre projet
Notre fichier `play.php` est bien pratique pour faire quelques tests, mais maintenant, codons réellement notre projet en programmation orientée objet !

### Déplacer la classe `Ship` dans un fichier à part
Une convention est d'avoir un fichier spécifique pour chaque classe, qui contient la classe et... **rien d'autre** !

Comment appeler ce fichier ? Eh bien, plutôt que de lui donner un nom compliqué ou hazardeux, comme il contiendra la classe `Ship`... appelons-le simplement `Ship.php` ! (Notez la majuscule, le fichier a **exactement** le même nom que la classe !)

Dans le projet, créez un dossier `/lib` et créez le fichier `Ship.php` dedans. Il ne contiendra QUE la classe `Ship`. Pour rappel, voici la classe complète :

```php
<?php

class Ship {

    public $name = "";
    public $weaponPower = 0;
    public $spatiodriveBooster = 0;
    public $strength = 0;

    public function sayHello()
    {
        echo 'Hello!';
    }
    public function getName()
    {
        return $this->name;
    }
    
    /**
     * @param bool $useShortFormat
     */
    public function getNameAndSpecs(bool $useShortFormat = false)
    {

        if ($useShortFormat) {
            return sprintf(
                '%s (F:%s, BS:%s, R:%s)',
                $this->name,
                $this->weaponPower,
                $this->spatiodriveBooster,
                $this->strength);
        }
        else {
            return sprintf(
                'Vaisseau : (Force: %s, Booster spatiodrive: %s, Résistance: %s)',
                $this->name,
                $this->weaponPower,
                $this->spatiodriveBooster,
                $this->strength);
        }
    }

    /**
     * @param Ship $ship
     */
    public function doesThisShipHasMoreStrengthThanMe(Ship $ship)
    {
        return $ship->strength > $this->strength;
    }
}
```

**NOTE :** Pas besoin de `?>` à la fin du fichier : comme on n'a rien d'autre après, PHP fermera la balise lui-même !

Plus besoin de tout ce code dans `play.php`, vous pouvez supprimer la classe qui est dans `play.php` et garder tout le reste.

Il faut bien sûr importer la classe `Ship` dans `play.php`, mettez ce code tout en haut de `play.php` :

```php
<?php
require __DIR__ . '/lib/Ship.php';
```

Oulà, c'est quoi `__DIR__` ?! C'est une constante qui veut dire `le chemin actuel du fichier dans lequel je suis`. C'est à dire, le chemin actuel de `play.php`. C'est simplement pour s'assurer que `play.php` recherche le fichier au bon endroit !

**NOTE :** Remarquez que `require` ne requiert pas de parenthèses ;)

### On a vraiment besoin des `require` ?
C'est vrai ça, et si on travaille avec de nombreuses classes, est-ce que je dois `require` chacune des classes ?

En fait non : il y a une manière qui s'appelle l'`autoloading`, qui permet de charger les classes aux bons endroits lorsque l'on en a besoin (d'où la super importance de nommer les fichiers EXACTEMENT comme le nom des classes !). On verra ça plus tard.

Rechargez votre page `play.php`. Si tout se passe bien, tout fonctionne encore !

### Créer de vrais objets !
Maintenant que notre classe fonctionne bien, allons modifier le projet !

Pour commencer, ajoutez dans `functions.php` la ligne suivante : 
```php
require __DIR__.'/lib/Ship.php';
```

Ensuite, plutôt que d'utiliser des tableaux, utilisez des objets ! Dans la fonction `getShips()`, remplacez chacun des vaisseaux par des objets, que vous mettrez ensuite dans un array (un tableau d'objets donc !) :

```php
function getShips()
{
    $ships = []; // Futur array d'objets vaisseaux Ships

    // On créée un Ship
    $ship1 = new Ship();
    $ship1->name = 'Jedi Starfighter';
    $ship1->weaponPower = 5;
    $ship1->spatiodriveBooster = 15;
    $ship1->strength = 30;

    // On ajoute le ship "$ship1" créé dans le tableau de vaisseaux, $ships.
    $ships['starfighter'] = $ship1;

    // Recommencez avec tous les vaisseaux du tableau...

    // On retourne l'array de vaisseaux
    return $ships;
}
```

Pour tester, allez dans `index.php` et modifiez le code ainsi :

```php
<?php
require __DIR__. '/functions.php';
$ships = getShips();
var_dump($ships);
die;
```

Première étape, on `var_dump` la fonction `getShips` qui doit retourner un array contenant plusieurs objets `Ship`. Ensuite, on arrête notre code ici grâce à `die` : en effet, la suite va sans toute buguer à cause de nos modifications, mieux vaut mettre une pause ici et modifier le code petit à petit !

### Traitons les objets... Comme des objets !
Levons nos manches et osons: retirez l'instruction `die` et voyez l'erreur s'afficher ! Essayons de la comprendre : 

```
Fatal error: Uncaught Error: Cannot use object of type Ship as array in /Applications/MAMP/htdocs/poo-course/project/index.php on line 56
```

Cette erreur nous dit qu'on ne peut pas utiliser un objet de type Ship comme on utilise un array. ("Cannot use object of type Ship as array").

Eh oui, on a vu la différence ! Les arrays s'utilisent comme ça : `$ship['name']`, les objets s'utilisent comme ça : `$ship->name`.

Comme on a modifié la fonction `getShips()` pour qu'elle ne nous retourne plus un array d'arrays de vaisseaux, mais un array d'objets Ships (donc autrement dit : non plus un tableau de... tableaux "vaisseaux", mais un tableau d'objets Ships), nous ne parlons dorénavant plus d'arrays mais d'objets.

À mon avis, vous avez déjà compris ce qu'il vous reste à faire ! 

Changez dans le fichier `index.php` tous les passages où on utilise les `ships` comme des arrays, et changez-les en objets.

Par exemple, pour le tableau `<table>`, on passe de :

```php
<tr>
    <td><?= $ship['name'] ?></td>
    <td><?= $ship['weapon_power'] ?></td>
    <td><?= $ship['spatiodrive_booster'] ?></td>
    <td><?= $ship['strength'] ?></td>
</tr>
```

À, tout simplement :

```php
<tr>
    <td><?= $ship->name ?></td>
    <td><?= $ship->weaponPower ?></td>
    <td><?= $ship->spatiodriveBooster ?></td>
    <td><?= $ship->strength ?></td>
</tr>
```

Un premier problème de réglé ! Corrigez tous les passages où l'on parle d'arrays dans `index.php`, il en reste dans les `<select>`.

**ATTENTION !** Rapellez-vous ! Quand on a des clés dans un tableau, on est en `snake_case`. Quand on a des attributs dans une classe/pour un objet, on est en `camelCase`. Remarquez qu'on est donc passés, par exemple, de `$ship['spatiodrive_booster']` (snake_case) à `$ship->spatiodriveBooster` (camelCase).

### Correction des `<select>`

Normalement, vous devriez avoir réglé le problème des `<select>` comme cela : il n'y a que les `<option>` qui sont dans des `foreach` à changer ! 

Vous avez donc changé : 
```php
<option value="<?php echo $key; ?>"><?php echo $ship['name']; ?></option>
```
Par : 
```php
<option value="<?php echo $key; ?>"><?php echo $ship->name; ?></option>
```

### Amélioration des `<select>`

Rapellez-vous que nous avons quelques méthodes bien pratiques accessibles depuis nos objets. Par exemple, on peut remplacer `$ship->name` par `$ship->getName()`, mais pour le moment, ça n'est pas très utile.

Par contre, si nous remplaçions `$ship->name` par quelque chose avec plus de détails ? Par exemple... `$ship->getNameAndSpecs()`, pour avoir tous les détails de notre vaisseau lorsque l'on essaie de le selectionner dans le `<select>` !

Changez donc :
```php
<option value="<?php echo $key; ?>"><?php echo $ship->name; ?></option>
```

Par : 
```php
<option value="<?php echo $key; ?>"><?php echo $ship->getNameAndSpecs(); ?></option>
```

Et voilà ! Vous pouvez tester (en fait, testez même sans que je vous le demande, c'est bien mieux). Dans notre `<select>`, on a maintenant les vaisseaux et leurs détails !

## Chapitre 9 : Accès privé
Revenons à nos classes et notre cher manager. Le manager en chef, d'abord séduit par le concept de classes, a "licencié" la moitié des managers à coup de blaster laser en ayant répéré une tentative de hacking dans le système de classes : en effet, un malin a osé créer un objet comme ceci :

```php
// Testez vos petits bouts de code comme celui-ci dans play.php !
$myShip = new Ship();
$myShip->name = "Hyper Fighter";
$myShip->weaponPower = "Jar Jar Binks"; // ?!!!
```

Pour au moins 1000 raisons différentes, on comprend que la valeur de `weaponPower` est anormale ! La moitié de la baie d'arrivée de vaisseaux a explosé à cause de ce fichu bug.

Vous décidez donc de contrôler l'accès aux données dans vos objets. Pour commencer, solution radicale : les attributs `public` sont dorénavant `private` : 

```php
class Ship {
    private $name = "";
    private $weaponPower = 0;
    private $spatiodriveBooster = 0;
    private $strength = 0;

    // ...
}
```

Qu'est-ce que cela signifie ? Cela signifie que dorénavant, nous n'avons plus accès directement à ces attributs.

Testez (toujours dans `play.php`) : 

```php
$myShip = new Ship();
$myShip->name = "Jedi Fighter";
```

On a une erreur ! 

```
( ! ) Fatal error: Uncaught Error: Cannot access private property Ship::$name in /Applications/MAMP/htdocs/poo-course/project/play.php on line 5
```

Essayons de la comprendre : nous ne pouvons pas accéder à l'attribut privé `Ship::$name` (Cannot access private property `Ship::$name`).

Cela veut dire qu'on ne peut plus accéder à l'attribut `->name` car il est... privé (`private`) !

Très bien, alors au moins on est sûrs de ne plus pouvoir avoir d'erreurs de saisie dans nos objets, par contre on ne peut plus rien mettre dedans **du tout**. Comment gérer ce problème ?

### Setters

Nous allons ajouter des méthodes `setters` : ce sont des méthodes qui ne servent qu'à une chose, changer la valeur d'un des attributs de notre classe.

Par exemple :

```php
class Ship {
    private $name = "";
    private $weaponPower = 0;
    private $spatiodriveBooster = 0;
    private $strength = 0;

    public function setName($name) {
        $this->name = $name;
    }

    // ...
}
```

Oulà, que fait cette méthode ? Si on la déchiffre, on comprend qu'elle prend un argument, `$name`. Ensuite, grâce à `$this->name`, elle dit : "donne à l'attribut `name` de l'objet qui a appelé `setName`, la valeur de l'argument `$name`".

Mais, j'ai plus accès à `name`, si ? On ne l'avait pas déclaré en `private` ?

Eh bien si : en fait, quand on met un attribut sur `private`, on n'y a plus accès depuis **l'extérieur** de la classe. Par contre, l'attribut reste accessible **à l'intérieur de** la classe !

Voyons comment utiliser cette méthode. Dans `play.php` :

```php
$myShip = new Ship();
$myShip->setName('Jedi Fighter');
var_dump($myShip);
```

Et voilà, quand on `var_dump` notre objet, on voit que nous n'avons plus d'erreur, et que le nom a bien été inscrit ! Le gros avantage des `setters`, c'est que nous pouvons dorénavant avoir des validations dans nos données : dans les méthodes `set***()`, on peut valider les données avant de réellement les donner à nos objets. Par exemple, on sait que pour `weaponPower`, on ne doit avoir que des `int`. Voici sa methode `setter` :

```php
public function setWeaponPower(int $weaponPower)
{
    $this->weaponPower = $weaponPower;
}
```

Juste comme ça, en indiquant en argument du setter que nous avons besoin d'un `int`, le bug que notre manager en chef a subi ne pourra plus se reproduire !

**NOTE :** Vous remarquerez que notre fonction ne retourne rien. C'est normal, un peu comme un `INSERT` en base de données ne retourne rien, un `setter` n'a pas besoin de retourner quoi que ce soit.

#### Exercice
C'est à vous : ajoutez des `setters` pour chacun des attributs. **N'oubliez pas** de préciser le type de données attendu dans l'argument de la méthode (par exemple: `int $weaponPower`).

#### Exercice
Modifiez le fichier `functions.php` qui contient notre fonction `getShips()` avec la liste des vaisseaux, et utiliser des setters !

Exemple, changez :
```php
$ship1->name = "Jedi Starfighter";
```

En : 
```php
$ship1->setName("Jedi Starfighter");
```

### Getters
Maintenant que nos attributs sont en `private`, nous avons vu que nous n'y avons plus accès en écriture : 
```php
$myShip = new Ship();
$myShip->name = "Jedi Fighter"; // BUG : on doit utiliser ->setName()
$myShip->setName("Jedi Fighter"); // OK !
```

Mais nous n'y avons plus accès en lecture nons plus !
```php
$myShip = new Ship();
echo "Vaisseau : " . $myShip->name; // BUG !
```

Nous allons donc utiliser des `getters`, des méthodes qui nous permettent d'accéder aux données. Par exemple, pour `name` :

```php
class Ship {
    // ...
    public function getName() {
        return $this->name;
    }
}
```

Et c'est tout ! Notre code ci-dessus peut maintenant être corrigé :

```php
$myShip = new Ship();
echo "Vaisseau : " . $myShip->name; // BUG !
echo "Vaisseau : " . $myShip->getName(); // OK !
```

Grâce à cela, de la même manière que les `setters` nous permettent de vérifier les données en entrée dans notre objet directement dans la méthode dédiée, les `getters` nous permettent eux, si besoin, de modifier les données avant de les renvoyer. Par exemple, on voudrait le nom en majuscules grâce à la fonction [strtoupper](https://www.php.net/manual/fr/function.strtoupper.php) (et non pas... stormtrooper) : on créée un `getter` dédié !

```php
class Ship {
    // ...
    public function getNameUppercase() {
        return strtoupper($this->name);
    }
}
```

Pour l'utiliser, simplement :
```php
$myShip = new Ship();
echo "VAISSEAU : " . $myShip->getNameUppercase();
```

#### Exercice
Faites de même pour tous les attributs de la classe `Ship`.

#### Exercice
Maintenant que nous avons des `getters` pour accéder à nos données, allez modifier le fichier `index.php` et changez tous les accès directs aux attributs (par exemple: `$ship->name`) par des getters (par exemple: `$ship->getName()`).

Par exemple :
```php
<td><?= $ship->name ?></td>
```

Sera changé en :
```php
<td><?= $ship->getName() ?></td>
```

Nous avons bien avancé ! Il nous reste aussi à modifier `battle.php`, car avec toutes ces modifications, si on valide le formulaire... Tout casse !

## Chapitre 10 : Type-Hinting

Si vous validez le formulaire, qui envoie vers `battle.php`, vous remarquerez que... Tout casse. Première erreur :

```
( ! ) Fatal error: Uncaught Error: Cannot access private property Ship::$name in /Applications/MAMP/htdocs/poo-course/project/functions.php on line 9
```

Ou plutôt : "Je ne peux pas accéder à l'attribut privé `name` de la classe `Ship` dans le fichier `functions.php`, en ligne 9". En effet, `battle.php` appelle bien le fichier `functions.php`, c'est normal qu'on puisse avoir des erreurs dedans aussi !

Si on va jeter un oeil à la ligne 9 de `functions.php`, on comprend tout de suite : 

```php
$ship1->name = "Jedi Starfighter";
```

Il faut modifier ça pour utiliser un setter !

### Modifier `battle.php`
Modifiez tout le fichier `battle.php` pour utiliser des setters et des getters. Par exemple :

```php
// SETTERS
$ship1->name = "Jedi Starfighter"; // à remplacer par...
$ship1->setName("Jedi Starfighter"); // ok !

$ship1['name']; // à remplacer par...
$ship1->name; // ok !
```

Normalement, une fois que tout a été bien modifié, l'erreur a disparu pour laisser place à une autre erreur :

### Changer la déclaration de type (ou type-hinting) 
```
Fatal error: Uncaught TypeError: Argument 1 passed to battle() must be of the type array, object given, called in /Applications/MAMP/htdocs/poo-course/project/battle.php on line 39 and defined in /Applications/MAMP/htdocs/poo-course/project/functions.php on line 44
```

Un peu plus longue mais toujours aussi claire : "L'argument numéro 1 passé à la fonction `battle()` doit être de type `array`, mais vous m'avez donné un `object`. La fonction est appelée dans `battle.php` en ligne 39, et est définie dans `functions.php` en ligne 44."

Facile ! On comprend clairement qu'on a essayé de passer un objet (sans doute nos `Ship` !) dans une fonction qui s'attendait à recevoir des... arrays.

Allons à la déclaration de la fonction (c'est indiqué dans l'erreur : `functions.php` ligne 44) : en effet, si on regarde la définition de la fonction : 

```php
function battle(array $ship1, $ship1Quantity, array $ship2, $ship2Quantity)
```

On comprend mieux ! Remplacez `array` par `Ship` : à l'exercice précédent, on a modifié le code de cette fonction pour utiliser des données d'objets, et plus d'arrays. C'est normal que nous changions aussi les paramètres attendus de cette fonction !

```php
function battle(Ship $ship1, $ship1Quantity, Ship $ship2, $ship2Quantity)
```

### Exercice

Enfin, si on actualise, il devrait y avoir une dernière erreur : 

```
Fatal error: Uncaught TypeError: Argument 1 passed to usedSpatiodriveBoosters() must be of the type array, object given, called in /Applications/MAMP/htdocs/poo-course/project/functions.php on line 59 and defined in /Applications/MAMP/htdocs/poo-course/project/functions.php on line 102
```

À vous de la corriger.

### Finir les corrections dans `battle.php`
Il nous reste encore quelques petites erreurs dans `battle.php`. En fait, jusque-là, en allant dans `battle.php` avec le formulaire, on n'a corrigé que `functions.php`.

Il s'agit simplement de changer des données de ships, qui pour l'instant, sont en arrays... et de les transformer en objets ! Changez, comme ci-dessus, le code pour utiliser des setters et des getters.

**ATTENTION !** Dans ce fichier, il y a plusieurs arrays. Certains sont tout à fait légitimes ! Par exemple, des arrays contenant tous les vaisseaux. Ou encore l'array `$_POST` ou `$_SESSION`. On ne parle bien évidemment pas de modifier **tous** les arrays, mais uniquement ceux qui représentent **UN objet Ship**.

**NOTE :** Pensez à bien lire et comprendre le code au fil de vos modifications, c'est la clé de la compréhension.

## Chapitre 11 : Le constructeur
Voici notre dernier challenge de ce TP : j'aimerais que mes `Ship` puissent être définis comme "cassés", pour pouvoir les mettre en réparation si besoin. Un `Ship` peut être en réparation ou non : on va donc pour l'instant simplement ajouter à notre classe un attribut `$isUnderRepair` (en français, "est en réparation ?") :

```php
class Ship {
    // ...
    private $isUnderRepair;
}
```

**Pensez à ajouter un getter et un setter pour cet attribut.**

### Automatiquement en réparation
Ce qu'on aimerait vraiment faire, c'est que, lorsque l'on créée un nouvel objet `Ship`, que notre `Ship` se mette tout seul en réparation ou non : c'est à dire que, à chaque fois que j'instancie un `Ship` en saisissant `new Ship`, qu'il se passe quelque chose à ce moment là précis.

C'est là où le constructeur nous vient en aide ! Écrivez ça entre vos attributs et vos méthodes existantes :

```php
class Ship {
    // ...
    // En général, à écrire après les attributs
    public function __construct() {
        echo "Appelé automatiquement !";
    }
    // En général, à écrire avant les autres méthodes
    // ...
}
```

Testez dans `play.php` ! Créez un nouvel objet et voyez ce qu'il se passe : à l'appel de `new Ship`, on a la phrase `Appelé automatiquement !` qui apparaît. Le constructeur, c'est à dire cette fonction spéciale, est **toujours** appelé lors d'un `new ClassName`.

À quoi ça peut bien nous servir, d'appeler un constructeur ?

En l'occurrence, dans notre petit problème, c'est très utile : on peut par exemple dire qu'à chaque fois que l'on créée un objet vaisseau, il a 30% de chances de tomber en réparation ! On peut donc modifier notre constructeur comme ça :

```php
class Ship {
    // ...
    public function __construct() {
        // On met true ou false dans isUnderRepair :
        // si rand(1,100) < 30 est vrai (c'est à dire, si un nombre aléatoire tiré entre 1 et 100 est plus petit que 30, c'est à dire... 30% de chances !), alors on met "true" dans isUnderRepair. Sinon, false.
        $this->isUnderRepair = mt_rand(1, 100) < 30;
    }
}
```

Et voilà ! Faites un `var_dump` de votre vaisseau dans `play.php` et actualisez plusieurs fois pour voir ce que ça donne : une fois sur trois environ, le vaisseau tombe en réparation (`$isUnderRepair` égal à `true`).

La suite maintenant : utiliser ce nouvel attribut à notre classe, et indiquer dans notre application si le vaisseau est disponible ou pas !

### Indiquer si le vaisseau est en réparation
Avec des icônes Font Awesome : si le vaisseau est en réparation, on affiche un nuage (`fa-cloud`), s'il est disponible, un soleil (`fa-sun-o`).

Comment vérifier que mon vaisseau est disponible ? C'est à dire, comment vérifier que `isUnderRepair` n'est pas sur `false` ? Facile, comme on a fait nos getter et setter :

```php
$myShip = new Ship();
$myShip->getIsUnderRepair(); // retourne un booléen

// Testons si le vaisseau est en réparation :
if ($myShip->getIsUnderRepair()) {
    echo "Le vaisseau " . $myShip->getName() . " est en réparation.";
}
else {
    echo "Le vaisseau " . $myShip->getName() . " est en disponible !";
}
```

Mais rien nous empêche d'avoir une méthode qui soit plus... "lisible". C'est une très bonne pratique en développement: nous ne sommes pas limités par la taille de notre code ! Rien ne nous empêche d'avoir des noms de variables très longs mais très parlants, des noms de méthodes très parlants aussi, quitte à avoir des méthodes qui font presque la même chose, mais qui, à l'usage, sont bien plus parlantes.

```php
class Ship {
    // ...

    /**
     * Notre getter actuel.
     * Si on lit le nom de la méthode littéralement : "retrouve est-ce que le vaisseau est en réparation".
     * Pas très très lisible.
     * Ce qui nous retourne :
     * true s'il est en réparation, donc indisponible,
     * false s'il n'est pas en réparation, donc disponible.
     */
    public function getIsUnderRepair() {
        return $this->isUnderRepair;
    }

    /**
     * Notre nouvelle méthode.
     * Si on lit la nom de la méthode littéralement : "est-ce que le vaisseau est fonctionnel ?"
     * Si on prend juste $thiss->isUnderRepair, si isUnderRepair est sur "false", la réponse à notre question serait... "false". Pas très logique.
     * On retourne donc l'inverse de isUnderRepair :
     * 
     * "Est-ce que le vaisseau est fonctionnel ?"
     * Si isUnderRepair = false, on retourne... Oui ! Donc "true"
     * Si isUnderRepair = true, on retourne... Non ! Donc "false"/
     * 
     * Pour cela, on retourne simplment $this->isUnderRepair, avec un "!" devant pour inverser la valeur.
     */
    public function isFunctional() {
        return !$this->isUnderRepair;
    }
}
```

À l'usage :


```php
$myShip = new Ship();
$myShip->isFunctional(); // retourne un booléen

// Testons si le vaisseau est en fonctionnel :
if ($myShip->isFunctional()) {
    echo "Le vaisseau " . $myShip->getName() . " est en disponbile !";
}
else {
    echo "Le vaisseau " . $myShip->getName() . " est en réparation.";
}
```

C'est donc quasiment la même chose ! Notre condition est du coup inversée (on ne teste plus "est-ce que mon vaisseau est en panne", mais "est-ce que mon vaisseau est fonctionnel"). D'un point de vue logique il n'y a aucun changement, mais d'un point de vue pratique, c'est plus évident à penser dans ce sens-là.

### Codons ça dans l'application !

On a toutes les clés pour ajouter ça dans notre application ! Pour commencer, modifions la `<table>` de `index.php`. Dans l'en-tête du tableau, ajoutons une nouvelle colonne qui contiendra le statut de notre vaisseau :

```html
<thead>
    <tr>
        <!-- ... -->
        <th>Statut</th>
        <!-- ... -->
    </tr>
</thead>
```

Ensuite, comme notre tableau possède une nouvelle colonne, ajoutons dans le `foreach` qui nous affiche toutes les lignes `<tr><td>` une nouvelle colonne :

```HTML
<?php foreach ($ships as $ship) : ?>
            <tr>
                <td><?= $ship->getName() ?></td>
                <td><?= $ship->getWeaponPower() ?></td>
                <td><?= $ship->getSpatiodriveBooster() ?></td>
                <td><?= $ship->getStrength() ?></td>
                <td><!-- NOUVELLE CASE À REMPLIR QUI CONTIENDRA LE STATUT ! --></td>
            </tr>
        <?php endforeach; ?>
```

Dans ce nouveau `<td>`, on va pouvoir mettre le statut du vaisseau. Pour le moment, si on indique juste `$ship->isFunctional()` ou `$ship->getIsUnderRepair()` (rapellez-vous: on peut utiliser l'une ou l'autre, avoir les deux c'est juste pour se faciliter la vie !), on verra juste `true` ou `false`, ce qui n'est pas très joli.

On va plutôt mettre une condition dans ce `<td>` pour afficher une icône Font Awesome à la place !

Remplacez la ligne : 
```php
<td><!-- NOUVELLE CASE À REMPLIR QUI CONTIENDRA LE STATUT ! --></td>
```

Par :

```php
<td>
<?php if ($ship->isFunctional()): ?>
    <i class="fa fa-sun-o"></i>
<?php else: ?>
    <i class="fa fa-cloud"></i>
<?php endif; ?>
</td>
```

Et voilà, si tout se passe bien... Ça marche ! Actualisez plusieurs fois votre page : comme on a créé des objets pour nos vaisseaux, et que dans le constructeur, on dit de mettre le vaisseau en maintenance 30 fois sur 100, les vaisseaux en maintenance ne sont jamais les même en actualisant la page.

### Rendre disponible uniquement les vaisseaux fonctionnels

Dernière modification à effectuer : changer la liste des vaisseaux dans les `<select><option>`. C'est à vous : faites en sorte que nous n'ayons QUE les vaisseaux fonctionnels qui s'affichent dans la liste !

Prennez le temps de bien essayer avant de regarder la correction.

C'est fait ? Voilà une manière de faire :

On a déjà ce code : 
```php
<?php foreach ($ships as $key => $ship) : ?>
    <option value="<?php echo $key; ?>"><?php echo $ship->getNameAndSpecs(); ?></option>
<?php endforeach; ?>
```

Qui créée une option pour chacun des `ship`. On pourrait, pourquoi pas, mettre une condition avant d'afficher le vaisseau !

```php
<?php foreach ($ships as $key => $ship) : ?>
    <?php if ($ship->isFunctional()) : ?>
        <option value="<?php echo $key; ?>"><?php echo $ship->getNameAndSpecs(); ?></option>
    <?php endif; ?>
<?php endforeach; ?>
```

Modifiez bien ce code dans les deux `<select>`. Et voilà, seuls les vaisseaux fonctionnels s'afficheront dans les `<select>` ! Les autres sont en réparation, ils ne peuvent pas combattre, tout va bien.

### Arguments dans le constructeur
Maintenant, jouons un peu avec notre constructeur. On a maintenant bien compris comment il fonctionnait : à chaque fois que j'instancie une classe (donc, que je créée un objet), si la classe a un constructeur (la méthode `public function __construct() {}`), le constructeur se lance immédiatement.

Le constructeur permet autre chose : de prendre des valeurs en argument, comme une fonction ! Voyons cet exemple :

```php
class Ship {
    // ...

    public function __construct(string $name) {
        // ...
        $this->setName($name);
    }
}
```

Qu'est-ce que ce code veut dire ? En fait, le constructeur prend en argument un `$name` et le passe directement dans le setter `name` de notre objet. Bon, concrètement, qu'est-ce que ça veut dire et comment ça marche ?

Testez ce code dans `play.php` :

```php
$myShip = new Ship("Firefighter Ship");
var_dump($ship);
die;
```

On remarque dans le `var_dump` que notre vaisseau possède un name... Sans avoir à utiliser `setName` ! Génial !

Utiliser des arguments dans le constructeur marche comme pour une fonction : on peut les mettre avec une valeur par défaut, les rendre nullable, les typer... S'il n'y a pas de valeur par défaut (comme ici), si on oublie le constructeur, le code plantera.

C'est très pratique pour obliger le développeur à donner des valeurs obligatoires à notre objet. Par exemple, un vaisseau possèdera obligatoirement un nom : autant le mettre dans le constructeur, de sorte à créer nos vaisseaux directement avec un nom.

Voyez la différence :

```php
// Avant :
$myShip = new Ship();
$myShip->setName('Nextgen Ship');

// Après :
$myShip = new Ship('Nextgen Ship');
```

### Ajoutons ça à notre application
Maintenant que notre constructeur prend en argument un `name`, changez le code dans `functions.php` et appelez les vaisseaux avec le constructeur. On n'a plus besoin du `->setName()` dans le fichier `functions.php` puisque dorénavant, le nom est passé dans le constructeur `new Ship('nom du vaisseau')` !

### Quand passer des arguments au constructeur, quand utiliser des setters ?
C'est vraiment à vous de décider. Dans notre cas, le fait d'avoir le nom dans le constructeur nous oblige à avoir des vaisseaux qui ont forcément un nom, donc d'instancier l'objet `Ship` avec un nom immédiatement, autrement on prendrait le risque d'avoir des vaisseaux sans nom - gênant pour l'inventaire. Les autres valeurs restent facultatives, donc pas besoin ici de les ajouter au constructeur (bien que ce soit possible, évidemment !)