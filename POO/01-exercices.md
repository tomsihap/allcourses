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