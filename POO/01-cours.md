# PHP : POO


## Déclarer une classe

```php
class MyClass {

    /**
     * Attributs
     */
    public $attr1;
    public $attr2;
    public $attr3 = "Valeur par défaut";

    /**
     * Méthodes
     */
    public function sayHello() {
        echo "hello world";
    }

    public function showAttributes() {
        /**
         * Quand on est DANS la classe, on accède aux attributs de la classe grâce à $this
         */
        echo "Les attributs sont " + $this->attr1 + " et " + $this->attr2 + ".";
    }

    public function activateSayHello() {
        /**
         * Quand on est DANS la classe, on accède aux méthodes de la classe grâce à $this
         */

        echo "On active la fonction sayHello() :";
        $this->sayHello();
    }
}
```

## Instancier une classe (= créer un objet d'une classe) et utiliser les objets

```php
// Après que la classe ait été déclarée...
$newObject = new MyClass;

// Assigner une valeur à un attribut
$newObject->attr1 = "Nouvelle valeur";

// Lire un attribut
var_dump($newObject->attr1);

// Appeler une méthode
$newObject->activateSayHello();
```

> Deux objets d'une même classe sont forcément différents, même si elles ont accès aux mêmes attributs et méthodes :

```php
$newObject2 = new MyClass;
$newObject2->attr1 = "Nouvelle valeur";
$newObject2->activateSayHello();

$newObject3 = new MyClass;
$newObject3->attr1 = "Une autre valeur différente de celle de l'objet précédent";
$newObject3->activateSayHello();
```

## Méthodes magiques: le constructeur

> Le constructeur est activé au moment du mot-clé `new` :

```php
class MyClass2 {
    public function __construct() {
        var_dump('Le constructeur a été appelé.');
    }
}

// comme il y a un constructeur et que la classe a été instanciée avec new, le var_dump s'affichera :
$newObject4 = new MyClass2; 
```

> Le constructeur permet de demander des paramètres à l'instanciation de la classe :

```php
class MyClass3 {
    public function __construct($param1, $param2) {
        var_dump('Le constructeur a été appelé avec les paramètres suivants : ' . $param1 . ' et ' . $param2);
    }
}

$newObject5 = new MyClass3("hello", "world"); 
```

C'est utile pour donner des paramètres obligatoires à une classe.

## Exemple: `Table`

```php
class Table {
    /**
     * Attributs (variables de classe)
     */
    public $nom;
    public $plateau = "plastique";
    public $pieds = "plastique";

    /**
     * Méthodes magiques
     */
    public function __construct($newName) {
        
        // On donne $newName comme valeur à l'attribut "nom" de l'objet
        $this->nom = $newName; 
    }

    /**
     * Méthodes (fonctions de classe)
     */
    public function fold() {

        echo "La table " . $this->nom . " est pliée.<br>";
    }
}

$tableFoo = new Table; // Une erreur est générée (il manque 1 paramètre au constucteur)

$tablePluk = new Table("Pluk"); // Le nom est passé en paramètre du constructeur
var_dump($tablePluk); // On voit que plateau et pieds ont bien des valeurs par défaut
$tablePluk->fold();

$tableKlak = new Table("Klak"); // Le nom est passé en paramètre du constructeur
$tableKlak->plateau = "marbre";
$tableKlak->pieds = "acier";
var_dump($tablePluk);
$tablePluk->fold();
```