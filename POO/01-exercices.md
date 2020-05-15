# PHP: POO - Exercices

> Testez chaque exercice en créant des objets et en appelant les attributs/méthodes !

## Exercice 1 : créer une classe

- Créez une classe `Personnage` avec pour attributs `name`, `strength` (valeur par défaut: 0), `power` (valeur par défaut: 0).
- Créez un objet de la classe `Personnage`, puis donnez-lui un nom, une force (`power`) et une résistance (`strength`).

## Exercice 2 : ajouter un constructeur

- Modifiez la classe `Personnage` de sorte à devoir obligatoirement donner un `name` au personnage lorsqu'on l'instancie.
- Faites en sorte que le nom soit bien donné à l'objet : vérifiez grâce à un `var_dump` que le nom est pris en compte.

- Ajoutez également `strength` et `power` dans le constructeur, de sorte à pouvoir les renseigner directement à la création d'un objet.

## Exercice 3 : paramètres non obligatoires

- Faites en sorte que `strength` et `power`, bien que dans le constructeur, ne soient pas obligatoires. (indice: "fonctions valeur par défaut")

## Exercice 4 : méthodes - afficher le nom

- Créez une méthode `getName()` qui **retourne** le nom du `Personnage`. On devrait pouvoir l'utiliser de la façon suivante: 

```php
echo "Le nom du personnage est " . $personnage->getName();
```

## Exercice 5 - méthodes - afficher les données

- Créez une méthode `getNameAndSpecs()` qui retourne la phrase suivante :

```
Le nom du personnage est XXX (il possède une force de YYY et une résistance de ZZZ).
```

## Exercice 6 - méthodes et arguments

- Améliorez `getNameAndSpecs()` de sorte à lui donner un paramètre (booléen) nommé `$longString`, de sorte à ce que :
  - si `$longString = true`, alors affichez la phrase de l'exercice 5
  - si `$longString = false`, alors affichez : (Personnage XXX (F: YYY, R: ZZZ))

- Mettez une valeur par défaut égale à `false` sur cette méthode.

# Correction

> La correction inclus le code commenté avec les *annotations* PHPDoc :

```php

/**
 * Représente un Personnage ayant un nom (obligatoire), une force et une résistance.
 */
class Personnage {

    /**
     * Nom du personnage
     * @var string
     */
    public $name;

    /**
     * Résistance du personnage
     * @var int
     */
    public $strength = 100;

    /**
     * Force du personnage
     * @var int
     */
    public $power = 100;

    /**
     * @param string $name Nom du personnage
     * @param integer $newPower Force du personnage
     * @param integer $newStrength Résistance du personnage
     * 
     * @return void
     */
    public function __construct(string $name, int $newPower = null, int $newStrength = null)
    {
        // On assigne le name systématiquement
        $this->name = $name;

        // On assigne strength uniquement si $newStrength existe (opérateur ternaire ?)
        $this->strength = ($newStrength) ? $newStrength : $this->strength;

        // On assigne power uniquement si $newPower existe (opérateur null coalescent ?? )
        $this->power = $newPower ?? $this->power;
    }

    /**
     * Affiche le nom du personnage
     * 
     * @return string
     */
    public function getName() : string {
        return $this->name;
    }

    /**
     * Affiche la force du personnage
     * @return int
     */
    public function getPower() : int {
        return $this->power;
    }

    /**
     * Affiche la résistance du personnage
     * @return int
     */
    public function getStrength() : int {
        return $this->strength;
    }

    /**
     * Affiche les nom et spécifications du personnage dans une version réduite
     * 
     * @param bool $longString Si vrai, affiche la version longue du texte
     * @return string
     */
    public function getNameAndSpecs(bool $longString = false) : string {

        if ($longString) {
            // On retourne la phrase concaténée avec des "."
            // return "Le nom du personnage est ".$this->name." (il possède une force de ".$this->power." et une résistance de ".$this->strength.").";

            // ou mieux: avec sprintf !
            return sprintf(
                "Le nom du personnage est %s (il possède une force de %s et une résistance de %s)",
                $this->name,
                $this->power,
                $this->strength
            );
        }
        else {
            return sprintf("Personnage %s (F: %s, R: %s)",
                $this->name,
                $this->power,
                $this->strength
            );
        }
    }
}

// On créée un personnage avec toutes les données possibles du constructeur
$luke = new Personnage('Luke Skywalker', 100, 125);
var_dump($luke);

// On créée un personnage avec uniquement les données obligatoires
$jarJar = new Personnage('Jar-Jar Binks');
var_dump($jarJar);

// On créée un personnage avec quelques données possibles
$vador = new Personnage('Darth Vador', 200);
var_dump($vador);

// On créée un personnage avec quelques données possibles ciblées
$padmee = new Personnage('Padmée', null, 150);
var_dump($padmee);

var_dump('Le nom du personnage est ' . $luke->getName());
var_dump('Le nom du personnage est ' . $vador->getName());
var_dump('Le nom du personnage est ' . $jarJar->getName());
var_dump('Le nom du personnage est ' . $padmee->getName());

var_dump($luke->getNameAndSpecs(true));
var_dump($vador->getNameAndSpecs(true));
var_dump($jarJar->getNameAndSpecs(true));
var_dump($padmee->getNameAndSpecs(true));

var_dump($luke->getNameAndSpecs());
var_dump($vador->getNameAndSpecs());
var_dump($jarJar->getNameAndSpecs());
var_dump($padmee->getNameAndSpecs());
```

# Typage de paramètres : `?int`, `?int = 42`, `int = null` ?

```php

/**
 * Soit :
 *  - un integer que je précise explicitement (int)
 *  - 42 si je ne précise rien ( = 42)
 */
function test1(int $a = 42)
{
    var_dump($a);
}
var_dump(test1(57));
var_dump(test1());

/**
 * Soit :
 *  - null que je précise explicitement (?)
 *  - un integer que je précise explicitement (int)
 */
function test2(?int $a) {
    var_dump($a);
}
var_dump(test2(null));
var_dump(test2(34));


/**
 * Soit :
 *  - null que je précise explicitement (?)
 *  - un integer que je précise explicitement (int)
 *  - 42 si je ne précise rien ( = 42)
 */
function test3(?int $a = 42)
{
    var_dump($a);
}
var_dump(test3(null));
var_dump(test3(56));
var_dump(test3());
```