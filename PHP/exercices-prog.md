# Exercices de PHP

- [Exercices de PHP](#exercices-de-php)
  - [Variables](#variables)
    - [Rappel de cours](#rappel-de-cours)
    - [Exercices](#exercices)
  - [Conditions](#conditions)
    - [Rappel de cours](#rappel-de-cours-1)
    - [Exercices](#exercices-1)
  - [Tableaux](#tableaux)
    - [Rappel de cours](#rappel-de-cours-2)
    - [Exercices](#exercices-2)
  - [Boucles foreach](#boucles-foreach)
    - [Rappel de cours](#rappel-de-cours-3)
      - [Tableau simple (liste, 1 dimension)](#tableau-simple-liste-1-dimension)
      - [Tableau associatif (2 dimensions)](#tableau-associatif-2-dimensions)
      - [Tableau associatif multi-dimensionnel (3 dimensions)](#tableau-associatif-multi-dimensionnel-3-dimensions)
      - [Tableau associatif multi-dimensionnel (4 dimensions)](#tableau-associatif-multi-dimensionnel-4-dimensions)
    - [Exercices](#exercices-3)
  - [Boucles for et while](#boucles-for-et-while)
    - [Rappel de cours](#rappel-de-cours-4)
    - [Exercices](#exercices-4)
  - [Fonctions](#fonctions)
    - [Rappel de cours](#rappel-de-cours-5)
    - [Exercices](#exercices-5)
  - [Algorithmique](#algorithmique)
    - [Liste HTML récursive](#liste-html-récursive)
    - [Distance de Hamming](#distance-de-hamming)
  - [Superglobales, et données de page en page](#superglobales-et-données-de-page-en-page)
    - [Superglobales](#superglobales)
    - [Transmettre des données (1)](#transmettre-des-données-1)
    - [Transmettre des données (2)](#transmettre-des-données-2)
    - [Transmettre des données (3)](#transmettre-des-données-3)

---
## Variables
### Rappel de cours
```php
// Ceci est un commentaire en PHP qui ne sera jamais exécuté

/**
 * Ceci est un bloc de commentaire en PHP qui  ne sera jamais exécuté !
 * Je peux écrire plusieurs lignes d'affilée ainsi.
 * 
 * Je peux aussi commenter du code qui ne sera jamais lu, puisqu'il est en commentaire, par exemple :
 * 
 * echo "déclanchement de l'arme nucléaire";
 */

$maVariable = "bonjour !"; // string
$integer = 42; // integer
$boolean = true; // boolean
$float = 34.4; // float

$integer = 52; // la variable $integer a changé de valeur

$nouvelleVariable = strtoupper($maVariable); // je créée une nouvelle variable en utilisant une ancienne, ainsi qu'une fonction PHP.

echo $nouvelleVariable; // afficher un string/int/bool/float

var_dump($nouvelleVariable); // débuguer une variable (c'est à dire l'afficher ainsi que des infos supplémentaires sur la variable)

echo "la phrase " . $maVariable . " a été transformée en " . $nouvelleVariable; // Concaténation de strings directement écrites dans le echo et de variables existantes

```

### Exercices

1. Déclarez une variable et lui assigner la valeur "hello world". L'afficher avec `echo` puis avec `var_dump`.
2. Déclarez une string. L'afficher.
3. Déclarez un integer. L'afficher.
4. Déclarez un boolean. L'afficher.
5. Déclarez un float. L'afficher.
6. Créez une nouvelle variable en prenant la variable déclarée dans l'exercice 3 et en lui ajoutant 42. Affichez le résultat.
7. Réassignez la variable déclarée en 4 par la valeur `null`.
8. Déclarez une *constante* nommée `EXAMPLE_CONSTANT` et assignez lui la valeur `test`.

9. Déclarez `$nombre1` et `$nombre2` en leur donnant des integer. Créez une nouvelle variable contenant l'addition des deux.

10. Créez une nouvelle variable contenant la soustraction des deux.

11. Créez une nouvelle variable contenant la division des deux.

12. Créez une nouvelle variable contenant la multiplication des deux.

13. Créez une nouvelle variable contenant le modulo des deux.

14. Déclarez `$float1` et `$float2` en leur donnant des nombres à virgules avec un nombre suffisant de décimales après la virgule (par exemple: 42.234483). Créez une nouvelle variable contenant la division des deux.

15. Créez une nouvelle variable contenant l'arrondi mathématique de la division des deux.

16. Créez une nouvelle variable contenant l'arrondi au nombre supérieur de la division des deux.

17. Créez une nouvelle variable contenant l'arrondi au nombre inférieur de la division des deux.

18. Reprennez `$nombre1` et incrémentez-le de trois manières différentes : 
    1.  en le réassignant à sa valeur + 1 
    2.  en utilisant `+=`
    3.  en utilisant `++`

19. Reprennez `$nombre1` et décrémentez-le de trois manières différentes : 
    1.  en le réassignant à sa valeur- 1 
    2.  en utilisant `-=`
    3.  en utilisant `--`

20. Créez deux variables `$string1` et `$string2` contenant deux strings. Concaténez-les dans une nouvelle variable.

21. Créez deux variables `$nom` et `$prenom` en string, et `$codeAgent` en integer. Créez une nouvelle variable contenant `Bonjour agent [CodeAgent], ou devrais-je dire agent [Nom], [Prénom] [Nom] !` (remplacez les [var] par la variable correspondante grâce à la concaténation)

22. En utilisant la fonction `str_replace()`, prenez la variable créée à l'exercice 21 et remplacez le mot `agent` par `étudiant`.

23. En utilisant la fonction `strlen()`, trouvez la longueur de la variable créée à l'exercice 21.

24. En utilisant la fonction `substr()`, récupérez les 4 premiers caractères de la variable créée à l'exercice 21.

25. En utilisant la fonction `substr()`, récupérez les caractères 4 à 7 de la variable créée à l'exercice 21.

26. Trouvez une fonction pour afficher la variable créée à l'exercice 21 tout en majuscules.

27. Trouvez une fonction pour afficher la variable créée à l'exercice 21 tout en minuscules.

---
## Conditions

### Rappel de cours
```php
if (/* condition "si" à vérifier */) {
    // actions à éxécuter
}
else if (/* autre condition "sinon si" */) {
    // actions à exécuter
}
else {
    // actions à exécuter dans tous les autres cas "sinon"
}


/**
 * Opérateurs de comparaison :
 * $a > $b : supérieur à
 * $a < $b : inférieur à
 * $a == $b : égal à (en valeur)
 * $a === $b : strictement égal à (en type et en valeur)
 * $a != $b : différent de (en valeur)
 * $a != $b : strictement différent de (en type et en valeur)
 */

if ($age > 12) {
    echo "Vous êtes autorisés à utiliser cette attraction.";
}
else {
    echo "Cette attraction n'est pas accessible avant vos 12 ans !";
}
```

### Exercices

1. Créez une variable "heure" avec l'heure de votre choix en integer (exemple: "14"). Créez une condition qui teste : si l'heure est supérieure à 7, affichez "bonne journée !"
2. Ajoutez à la condition : si  l'heure est inférieure à 20, affichez toujours "bonne journée !", sinon affichez "bonne soirée !"
3. Utilisez la fonction `date('H')` pour avoir l'heure actuelle. Utilisez plutôt cette fonction dans votre variable déclarée à l'exercice 1.

---
## Tableaux
### Rappel de cours
```php
$liste = ['pommes', 'poires', 'carottes'];
echo $liste[0]; // affiche "pommes"
echo $liste[1]; // affiche "poires"
$liste[1] = "poires Williams"; // change 'poires' en 'poires Williams'

$liste[] = 'aubergines'; // Ajoute "aubergines" à la liste


$tableauAssociatif = [
    'prenom' => 'John',
    'nom'    => 'Williams',
    'job'    => 'Compositeur'   
];

echo $tableauAssociatif['prenom']; // affiche "John"
$liste['nom'] = 'Doe'; // change "Williams" en "Doe"
$tableauAssociatif['addresse'] = "4 rue des champs"; // ajoute la clé/valeur "addresse" => "4 rue des champs" au tableau $tableauAssociatif

$tableauMultiDimentionnel = [
    "ete"  => [
        "aubergines" => [
            "quantite"  => 20,
            "prix"      => 5
        ],
        "peches"     => [
            "quantite"  => 15,
            "prix"      => 3
        ]
    ],
    "automne"  => [
        "pommes de terre" => [
            "quantite"  => 13,
            "prix"      => 2
        ],
        "navets"     => [
            "quantite"  => 17,
            "prix"      => 6
        ]
    ]
];

echo $tableauMultiDimentionnel['automne']['navets']['quantite']; // affiche 17, la quantité des navets

$tableauMultiDimentionnel['automne']['navets']['prix'] = 14; // change le prix des navets de 6 à 14

$tableauMultiDimentionnel['automne']['navets']['vendeur'] = "Emma Watson"; // Ajoute la clé/valeur "vendeur" => "Emma Watson" au sous-tableau "navets"
```

### Exercices

1. Créer un tableau simple contenant la liste des mois de  l'année, en minuscules.

2. Affichez le mois de mars.

3. Modifiez le mois d'août pour lui assigner la valeur `AOÛT`.

4. Modifiez le mois de septembre pour le mettre en majuscules grâce à une fonction PHP.

5. Créez un tableau associatif contenant Allemagne, Espagne, Italie, France, Portugal et leur capitales, sous la forme suivante : "France" => "Paris".

6. Affichez la capitale de l'Italie.

7. Créez un tableau associatif contenant les pays de l'exercice 5, en ajoutant un sous-tableau contenant la capitale et la population de chaque pays. Exemple :

```
"france" => [
    "capitale" => "Paris",
    "population" => "70000000"
]
```

8. Affichez la population de la France.

9. Afficher le mot "France" grâce à `array_keys($pays)`. Cette fonction vous retourne un nouveau tableau (liste), contenant uniquement les clés du tableau demandé ! Pour accéder à un élément de ce nouveau tableau, comme c'est une liste, on y accède ainsi : `$keys = array_keys($pays);` puis `$keys[0]` pour avoir la première clé de `$pays`.

10. Affichez le mot "capitale". Pour cela, vous devez utiliser `array_keys()` sur un des sous-tableau du tableau de l'exercice 7. Par exemple: `array_keys( $pays['france'] )`, ou encore, pour réutiliser le code de l'exercice 9, `array_keys( array_keys( $pays[0] ) )`.

11. Affichez la phrase suivante : "La France a pour capitale Paris et possède une population de 70000000 habitants."

---
## Boucles foreach

### Rappel de cours

#### Tableau simple (liste, 1 dimension)

```php
// Scanner  une liste (1 dimension:  value)

foreach ($array as $value) {
    // code ...
}

$liste = ['pommes', 'poires', 'carottes'];

/**
 * Afficher successivement "pommes", "poires", puis "carottes"
 */
foreach ($liste as $element) {
    var_dump($element);
}
```

#### Tableau associatif (2 dimensions)

```php
// Scanner un tableau associatif (= 2 dimensions: key et value) :

foreach ($array as $key => $value) {
        //  code...
}

$tableauAssociatif = [
    'prenom' => 'John',
    'nom'    => 'Williams',
    'job'    => 'Compositeur'   
];

/**
 * Afficher  successivement : "Le prénom est John", "le nom est Williams"...
 */

foreach ($tableauAssociatif as $caracteristique => $valeur) {
    echo "Le " . $caracteristique . " est " . $valeur;
    echo "<br>";
}
```

#### Tableau associatif multi-dimensionnel (3 dimensions)

```php
// Scanner  un tableau multidimentionnel (ex: 3 dimensions, un tableau contenant des clés => valeurs, et dont les "valeurs" sont des tableaux "liste")
//
// key, value
//        comme value est un array (liste), il  a lui même aussi une "value"
// tableau 1 : (key, value), tableau 2 : (value)

foreach ($array as $key1 => $value1) {

    foreach ($value1 as $value2) {
        //  code...
    }
}
```

#### Tableau associatif multi-dimensionnel (4 dimensions)

```php
// Scanner  un tableau multidimentionnel (ex: 4 dimensions, un tableau contenant des clés => valeurs, et dont les "valeurs" sont des tableaux associatifs key=>value)
//
// key, value
//        comme value est un array (associatif), il  a lui même aussi des "key"=>"value"
// tableau 1 : (key, value), tableau 2 : (key, value)

foreach ($array as $key1 => $value1) {

    foreach ($value1 as $key2 => $value2) {
        //  code...
    }
}

$tableauMultiDimentionnel = [
    "ete"  => [
        "aubergines" => [
            "quantite"  => 20,
            "prix"      => 5
        ],
        "peches"     => [
            "quantite"  => 15,
            "prix"      => 3
        ]
    ],
    "automne"  => [
        "pommes de terre" => [
            "quantite"  => 13,
            "prix"      => 2
        ],
        "navets"     => [
            "quantite"  => 17,
            "prix"      => 6
        ]
    ]
];

foreach ($tableauMultiDimentionnel as $saison => $legumes) {

    foreach ($legumes as $nomLegume => $caracteristiques) { 

        foreach($caracteristiques as $nomCarac => $valeur) {
            echo "Le légume " . $nomLegume . " de la saison " . $saison . " a un(e) " . $nomCarac . " de " . $valeur;
            echo "<br>";
        }
    }
}
```

### Exercices

1. En utilisant le tableau de l'exercice Tableaux:1, faites une boucle `foreach` pour afficher tous les mois dans un var_dump.

2. En utilisant le tableau de l'exercice Tableaux:5, faites une boucle `foreach` pour afficher la phrase `Le pays PAYS a pour capitale CAPITALE`.

3. En utilisant le tableau de l'exercice Tableaux:7, faites une boucle `foreach` pour afficher la phrase `Le pays [PAYS] a pour capitale [CAPITALE] et pour population [POPULATION] habitants`.

---
## Boucles for et while

### Rappel de cours

> **Attention !** N'oubliez pas de mettre une condition qui PEUT se valider dans une boucle ! Sinon votre serveur tournera en boucle et bloquera la page (dans ce cas, coupez MAMP et relancez-le).

```php
while (condition) {
    // code à éxécuter;
}
```

```php
$i = 0;

while ($i < 10) {
    var_dump($i);
    $i++; // On pense à incrémenter l'itérateur pour que la condition puisse se réaliser !
}
```

```php
for ($i = 0; $i < 10; $i++) {
    var_dump($i);
}
```

> Bien sûr, dans les deux cas, le `$i++` peut être modifié afin de modifier `$i` comme on le souhaite !

```php
for ($i = 0; $i < 10; $i = $i*2) {
    var_dump($i);
}
```

### Exercices

1. Faites une boucle `for` qui affiche des nombres de 0 à 10.
2. Faites une boucle `for` qui affiche uniquement des nombres pairs, de 0 à 10, grâce à un `if` au sein de la boucle
3. Faites une boucle `for` qui affiche des nombres la série suivante: 100, 50, 25, 12.5, 6.25, 3.125, 1.5625 (c'est à dire une boucle commençant à 100 et tant que `$i > 1`, divisez $i par deux)

4. Faites une boucle dans une boucle qui crééra le tableau HTML suivant :

|||||||||||
|--| --| --| --| --| --| --| --| --| --|
|1	| 2	 | 3  | 4  | 5	| 6  | 7  | 8  | 9 	| 10
|2	| 4	 | 6  | 8  | 10	| 12 | 14 | 16 | 18	| 20
|3	| 6	 | 9  | 12 | 15	| 18 | 21 | 24 | 27	| 30
|4	| 8	 | 12 | 16 | 20	| 24 | 28 | 32 | 36	| 40
|5	| 10 | 15 | 20 | 25	| 30 | 35 | 40 | 45	| 50
|6	| 12 | 18 | 24 | 30	| 36 | 42 | 48 | 54	| 60
|7	| 14 | 21 | 28 | 35	| 42 | 49 | 56 | 63	| 70
|8	| 16 | 24 | 32 | 40	| 48 | 56 | 64 | 72	| 80
|9	| 18 | 27 | 36 | 45	| 54 | 63 | 72 | 81	| 90
|10	| 20 | 30 | 40 | 50	| 60 | 70 | 80 | 90	| 100

Pour rappel, un tableau est structuré ainsi :

```html
<table>
    <!-- Ligne 1 -->
    <tr> 
        <td>1</td> <!-- Colonne 1 -->
        <td>2</td> <!-- Colonne 2 -->
        <td>3</td> <!-- Colonne 3 -->
        <td>4</td> <!-- Colonne 4 -->
    </tr>
    <!-- Fin de la ligne 1 -->

    <!-- Ligne 2 -->
    <tr>
        <td>2</td> <!-- Colonne 1 -->
        <td>4</td> <!-- Colonne 2 -->
        <td>6</td> <!-- Colonne 3 -->
        <td>8</td> <!-- Colonne 4 -->
    </tr>
    <!-- Fin de la ligne 2 -->
</table>
```

---
## Fonctions

### Rappel de cours

```php
/**
 * Déclarer une fonction sans arguments
 */

function nomDeMaFonction() {
    return "hello !";
}

/**
 * Appeler une fonction sans arguments
 */

echo nomDeMaFonction();
var_dump(nomDeMaFonction());
$result = nomDeMaFonction();


/**
 * Déclarer une fonction avec arguments
 */

function nomDeMaFonctionParametree($argument1, $argument2)
{
    return "hello ! Le résultat de l'opération est : " . ($argument1 - $argument2);
}

/**
 * Appeler une fonction avec arguments
 */

echo nomDeMaFonctionParametree(24, 12);
var_dump(nomDeMaFonctionParametree(25, 13));
$result = nomDeMaFonctionParametree(26, 14);

$nombre1 = 25;
$nombre2 = 15;

echo nomDeMaFonctionParametree($nombre1, $nombre2);
var_dump(nomDeMaFonctionParametree($nombre1, $nombre2));
$result = nomDeMaFonctionParametree($nombre1, $nombre2);
```

### Exercices

1. Créez une fonction qui retourne "Hello world!"
2. Créez une fonction qui prend deux paramètres: $prenom et $nom et qui les retourne dans la phrase "Bonjour $prenom $nom, vous avez créé une fonction."
3. Créez une fonction qui prend trois paramètres : $longeur, $largeur, $hauteur, et qui calcule le volume d'un cube (longueur*largeur*hauteur).

---
## Algorithmique

### Liste HTML récursive

> Faites une fonction "récursive" qui va créer un ul/li pour tout tableau passé en paramètres quelle que soit sa profondeur. Une fonction récursive, c'est une fonction qui va s'appeler elle-même !

Testez avec le tableau suivant :

```php

$tableau = [
    'ete'     => [
        'poireaux',
        'aubergines' => [
            5,
            'graines' => [
                'prix',
                'quantité' => [
                    'stock' => 7,
                    'vendus' => 8,
                    15,
                    'total' => [
                        'producteur' => 5,
                        'magasin' => 12
                    ]
                ]
            ]
        ],
        'pêches'
    ],
    'automne' => [
        'tomate' => [
            'rouge',
            'graine'
        ],
        'vanille' => [
            'marron',
            'orchidée'
        ],
    ],
    'hiver'   => [
        'patate',
        'fraise'
    ],
    'printemps' => [
        'poivron',
        'abricot'
    ],
];
```

### Distance de Hamming

> Calculez la distance de Hamming entre deux brins d'ADN.
> 
> La distance de Hamming est le nombre de différences entre deux brins d'ADN homologues issus de génomes différents avec un ancètre commun. On mesure le nombre minimum de points de mutation qui pourrraient être apparus dans le chemin de l'évolution entre ces deux brins d'ADN. On peut trouver ce  nombre en comparant deux brins d'ADN et en comptant le nombre de nucléotides différents. Par exemple :
> 
> ```
> GAGCCTACTAACGGGAT
> CATCGTAATGACGGCCT
> ^ ^ ^  ^ ^    ^^
> ```
> 
> La distance de Hamming entre ces deux brins d'ADN est de 7 (car en comptant les différences caractère par caractère, on en trouve 7).

1. Créez une fonction qui prend deux strings en paramètres contenant des brins d'ADN (donc composées des caractères A, C, G, T) et trouvez leur distance de Hamming.

2. Assurez-vous que les deux brins aient la même longueur ! Sinon, retournez une erreur grâce à :

```php
throw new Exception("Message d'erreur");
```

3. Créez une autre fonction qui prend deux paramètres :
    - une `longueur`
    - un nombre de `paires`
Cette fonction va créer un nombre de `paires` de brins d'ADN (dont le contenu est aléatoire), de taille `longueur`, et afficher leur distance Hamming paire par paire en appelant la fonction précédente. Le résultat devrait être affichés sous la forme suivante :

```

En paramètres :
- longueur = 7
- paires = 4

Les paires AAAAAAA et CCCCCCC ont une distance de Hamming de 7.
Les paires ACGTGCA et GTCGAGC ont une distance de Hamming de 7.
Les paires ATGCTCG et CGTCGTA ont une distance de Hamming de 3.
Les paires ATGCGTA et TAGCTAG ont une distance de Hamming de 4.
```

## Superglobales, et données de page en page

### Superglobales
1. Récupérez la liste des *superglobales* de PHP.
2. Retrouvez dans une des superglobales les données suivantes :
   1. IP du visiteur
   2. User-Agent du visiteur (c'est en fait sa configuration OS/Navigateur)
   3. L'adresse du serveur web
   4. Le "timestamp" de quand a été éxécutée la requête vers le fichier PHP

### Transmettre des données (1)
1. Créez les deux fichiers suivants :
   1. `accueil.php`
   2. `article.php`

    - Dans `accueil.php`, faites un lien vers `article.php` de la façon suivante :
    - `<a href="article.php?id=34">"`
    - Pour tester votre code, ouvrez `accueil.php` et cliquez sur le lien.
    - Dans le fichier `article.php`, trouvez la superglobale dans laquelle vous trouverez la clé `id` avec la valeur `34`.

### Transmettre des données (2)

> Pour cet exercice, vous allez soigner le HTML de sorte à travailler le fait d'avoir du code HTML et du code PHP en même temps. Vous allez créer un formulaire de contact qui redirige vers une page qui affiche le récapitulatif du formulaire au client.

> Vous aurez au minimum une barre de navigation et une balise `footer`.

1. Créez les deux fichiers suivants :
   1. `contact.php`
   2. `traitement.php`

    - Dans `contact.php`, créez un fichier HTML avec un formulaire de contact. Le formulaire aura en balise ouvrante le modèle suivant : `<form method="get" action="traitement.php">`. De plus, vos inputs auront un nouvel attribut `name` représentant quelle donnée il y aura dedans, par exemple : `<input type="text" name="user_email">`
    - N'oubliez pas le bouton avec `input type="button"` dans le formulaire !
    - Validez le formulaire en cliquant sur le bouton.
    - Vous arrivez sur `traitement.php` ! Récupérez les données du formulaire grâce à une des superglobales dédiées et affichez-les.

### Transmettre des données (3)

1. En reprennant le code de l'exercice précédent, changez la méthode `method` du formulaire, actuellement `GET`, en `POST`.
2. Dans la page `traitement.php`, trouvez comment récupérer les données de nouveau.