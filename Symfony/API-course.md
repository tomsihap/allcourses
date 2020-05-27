# TP Symfony 4.4 #2 : API - Exercices
- Correction: https://gist.github.com/tomsihap/9f4d7e63c8f32292895c001a9aef1e8b#file-02-md
- TP Symfony #1 : https://gist.github.com/tomsihap/e939150d64b25c7b4010c847a3e77d48

> Dans ce TP, vous apprendrez à créer un projet Symfony qui distribuera une API. Plusieurs manières existent :
> - Créer des routes comme d'habitude, qui retourneront plutôt du JSON (GET) et accepteront du JSON (POST)
> - Utiliser ApiPlatform qui génèrera une API pour nous.

> Nous allons continuer sur le projet NotaResto de sorte à distribuer une API. Quel est l'intérêt alors que nous avons déjà un front ?!
> 1. Pouvoir partager les données de notre choix à d'autres développeurs. Par exemple, JCDecaux (Velov, Vélib...) possède bien une interface graphique (site web, application mobile), et distribue ses données en temps réel afin que d'autres développeurs puissent s'en reservir (créer de la visualisation de données, des graphiques... ou des applications web et mobiles !)
> 2. Pouvoir partager ces données avec une autre application : en l'occurrence, à l'avenir on pourra utiliser ces données pour qu'une application Angular/Vue/React s'en serve. Ainsi, on diviserait le front (Angular par exemple) et le back (Symfony et API) en deux projets distincts.

> Rien ne nous empêche néanmoins d'avoir, sur le serveur de back, donc Symfony, d'avoir à la fois une API et du front ! C'est ce que nous allons faire :
> - une partie des contrôleurs servira à l'application web, c'était l'objet du TP précédent
> - une partie des contrôleurs servira à distribuer les même données, mais en version API, afin de, par exemple, pouvoir développer une version Angular. Dans ce TP, nous n'utiliserons que Postman pour appeler l'API.


## Exercice 0 - Qu'est-ce qu'une API ?
- Répondez aux questions suivantes en cherchant sur Google et avec vos connaissances !
- Le formulaire peut être rempli ici : https://tomsihap.typeform.com/to/lnE7s9
- Liens utiles :
  - Cours : https://gist.github.com/tomsihap/8f318f0391fc20d2106f1cc0e2a5048c

1. Qu'est-ce qu'une API ?
2. Quelle est la différence entre une API et un WebService ?
3. En quels langages puis-je développer une API ?
4. En quels formats par exemple peut me répondre une API ?
5. Écrivez un exemple de **requête** HTTP avec 3 headers
6. Écrivez un exemple de **réponse** HTTP avec 3 headers
7. Quels sont les 5 grands groupes de codes de réponse HTTP et à quoi correspondent-ils ?
8. Quelles sont les méthodes HTTP et à quoi correspondent-elles ?
9. En fait, pourquoi on parle de HTTP alors qu'on est sur un cours sur les API ?
10. Si un site me fournit son API, ai-je accès à toutes ses données ? Puis-je du coup modifier/supprimer toutes ses données ? Si oui/non, pourquoi ?
11. Qu'est-ce qu'une API REST ? À quoi ça sert, d'avoir une API REST ?
12. Combien de niveaux possède le modèle de maturité de Richardson ? Qu'est-ce que ce modèle représente ?


## Exercice 1 - Créer un premier controller API

> Liens utiles :
> - https://symfony.com/doc/current/components/serializer.html
> - https://nouvelle-techno.fr/actualites/2020/01/03/live-coding-creer-une-api-avec-symfony-4

Dans le projet existant, créez un nouveau contrôleur : `ApiRestaurantController`. Il contiendra toute l'API de la ressource `Restaurant`.

- Créez une route `/api/restaurants`
- Trouvez un moyen de :
  1. Récupérer tous les restaurants dans la base de données
  2. Transformer ces restaurants en JSON
  3. Renvoyer le JSON

## Exercice 2 - Tester avec Postman
> Liens utiles
> - https://openclassrooms.com/fr/courses/4668056-construisez-des-microservices/5123020-testez-votre-api-grace-a-postman
> - https://www.guru99.com/postman-tutorial.html
> - https://blog.webnet.fr/presentation-de-postman-outil-multifonction-pour-api-web/
> - https://support.brightcove.com/fr/use-postman-api-requests
- Téléchargez et installez Postman : https://www.postman.com/
- Testez avec Postman une requête vers GET https://jsonplaceholder.typicode.com/users qui devrait vous retourner une liste de users en json.
- Optionnel : faites le TP suivant pour maîtriser un peu mieux Postman https://gist.github.com/tomsihap/8f318f0391fc20d2106f1cc0e2a5048c#file-02-md


## Exercice 3 - Créer une route POST

Étapes :

### Créer un restaurant en dur
1. Créer une méthode pour `POST /api/restaurants`
2. Dans la méthode, créer un restaurant "en dur" (new Restaurant, les setters...)
3. Enregistez-le en base de données

### Récupérer les données de requête
1. Injectez `Request $request` dans la méthode
2. Faites une requête POST avec Postman, avec tous les champs nécessaires pour créer un restaurant
3. Trouvez comment récupérer ces données de requête venant de Postman, dans l'objet `$request` (par exemple: avec postman j'envoie le champ `name`, comment je le retrouve dans `$request` ?)

### Utiliser les données de la requête pour créer l'objet Restaurant
- Maintenant que vous avez réussi à créer un restaurant avec des données en dur, et que vous avez réussi à récupérer les données d'une requête HTTP POST, utilisez les données de la requête plutôt que vos données en dur pour créer l'objet Restaurant.


## Exercice 4 - Poursuivre nos routes GET
- Créez une route `GET /api/users` qui retourne la liste des users, dans son contrôleur dédié
- Créez une route `GET /api/cities` qui retourne la liste des villes, dans son contrôleur dédié


## Exercice 5 - Faire une route d'édition pour les restaurants
- Créez une route qui permette d'éditer un restaurant. Bien que normalement, les routes d'édition fonctionnent avec `PATCH` et `PUT`, vous utiliserez plutôt la route suivante : `POST /api/restaurants/{restaurant}/edit` (où `{restaurant}` sera un ID de restaurant dans l'URL)

1. Récupérez le restaurant via l'ID dans l'URL (comme pour une route Show classique)
2. Vérifiez si des données ont été mises à jour (donc si on a passé tel ou tel champ en paramètre dans Postman) et si oui, les mettre à jour avec les setters de Restaurant
3. Enregistrez (persist et flush)

## Exercice 6 -  Faire une route de suppression d'un restaurant
- Créez une route qui permette de supprimer un restaurant (`DELETE /api/restaurants/{restaurant})`

Attention: comme le Restaurant a sa clé primaire en clé étrangère dans la table Review, des soucis peuvent se poser ! Pensez à supprimer les Review du Restaurant lui même (et avant ça, les enfants des reviews à supprimer) pour pouvoir supprimer le Restaurant. Dans l'ordre, à supprimer :

1. Les enfants des Review du Restaurant
2. Les Review de Restaurant
3. Le Restaurant

# TP Symfony 4.4 #2 : API - Corrections
- Exercices : https://gist.github.com/tomsihap/9f4d7e63c8f32292895c001a9aef1e8b#file-01-md
- TP Symfony #1 : https://gist.github.com/tomsihap/e939150d64b25c7b4010c847a3e77d48

## Exercice 1 - Créer un premier controller API

> Documentation: [Serializing an Object](https://symfony.com/doc/current/components/serializer.html#serializing-an-object)

1. Créez un controller `bin/console make:controller ApiRestaurantController`
2. Installez le Serializer `composer require symfony/serializer`
3. Modifiez la méthode `ApiRestaurantController::index` et la classe `ApiRestaurantController` pour changer l'orthographe de la route et injecter le serializer :

```php
<?php

namespace App\Controller;

use App\Entity\Restaurant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApiRestaurantController extends AbstractController
{
    public $serializer;

    public function __construct()
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $this->serializer = new Serializer($normalizers, $encoders);


    }

    /**
     * @Route("/api/restaurants", name="api_restaurant")
     */
    public function index()
    {

        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAll();

        $jsonContent = $this->serializer->serialize($restaurants, 'json');

        echo $jsonContent;
    }
}
```

1. Nous mettons le serializer dans le constructeur de sorte à l'avoir dans toutes nos méthodes et ne pas avoir à le recréer à chaque fois
2. On cherche tous les resturants et on les sérialize (c'est à dire qu'on transforme en une string, ici la string est un json)
3. On affiche le contenu avec un simple `echo`

En allant sur `/api/restaurants`, nous avons maintenant une erreur de référence circulaire. En fait, voilà ce qu'il se passe, les champs retournés sont les suivants :

```
Restaurant
    id
    name
    description
    restaurantPictures
    reviews
    createdAt
    user
```

Comme nous n'avons rien précisé sur quelles données retourner, Symfony nous retourne par défaut les données les plus complètes qu'il connaisse. En fait, il veut aussi nous retourner les objets des relations !

```
Restaurant
    id
    name
    description
    restaurantPictures
        id
        filename
        restaurant
    reviews
        id
        message
        rating
        restaurant
        createdAt
    createdAt
    user
        id
        email
        roles
        password
        city
        reviews
        restaurants
```

Ce qui est très pratique ! En une requête, je peux avoir non seulement les restaurants mais aussi les données précises des tables qui sont reliées. Le problème, c'est que dans ces tables là (`restaurantPictures`, `reviews` et `user`)... Il y a encore des sous-tables (pour `reviews` par exemple, il y a le champ `restaurant` qui contient un `Restaurant`). Faisons l'exemple en développant juste `Reviews` :



```
Restaurant
    id
    name
    description
    restaurantPictures
        id
        filename
        restaurant
    reviews
        id
        message
        rating
        restaurant
            Restaurant
                id
                name
                description
                restaurantPictures
                    id
                    filename
                    restaurant
                reviews
                    id
                    message
                    rating
                    restaurant
                    createdAt
                createdAt
                user
                    id
                    email
                    roles
                    password
                    city
                    reviews
                    restaurants
        createdAt
    createdAt
    user
        id
        email
        roles
        password
        city
        reviews
        restaurants
```

Vous voyez le problème ? En fait, comme on n'a pas expliqué à Symfony quelles données nous retourner précisément, il va chercher les données de Restaurant, puis des tables liées à Restaurant, puis les tables liées à ces tables... et ainsi de suite.

Comme Restaurant est lié à Review, on a la review.
Comme Review est lié à Restaurant, on a le restaurant (celui d'origine donc).

Et ainsi de suite, dans une boucle infinie ! C'est pour cela que nous avons une "erreur de référence circulaire" (les tables se références entre-elles en boucle, de façon circulaire).

Pour pallier à cela, nous allons créer des "groupes de sérialisation". Il s'agit de dire à Symfony "lorsque que je cherche des restaurants avec `/api/restaurants`, retourne moi uniquement les champs que je te demande".

> Documentation : [Attributes Groups](https://symfony.com/doc/current/components/serializer.html#attributes-groups)

Voyons comment mettre en place les groupes de sérialization. Pour éviter des soucis de tables jointes, nous n'allons récupérer que les champs `id`, `name` et `description` de `Restaurant` pour le moment en ajoutant à l'entité `Restaurant` l'annotation `@Groups` (n'oubliez pas le `use`) :

```php
<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RestaurantRepository")
 */
class Restaurant
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("all_restaurants")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("all_restaurants")
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("all_restaurants")
     */
    private $description;

// ...
```

Modifions maintenant `ApiRestaurantController` pour lui dire :
1. Le serializer doit lire les annotations (modification dans le constructeur)
2. Les données retournées doivent prendre en compte le groupe (modification dans la méthode)

```php
<?php

namespace App\Controller;

use App\Entity\Restaurant;
use App\Entity\Review;
use App\Entity\User;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApiRestaurantController extends AbstractController
{
    public $serializer;

    public function __construct()
    {
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer($classMetadataFactory)];

        $this->serializer = new Serializer($normalizers, $encoders);


    }

    /**
     * @Route("/api/restaurants", name="api_restaurant")
     */
    public function index()
    {

        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAll();

        $data = $this->serializer->normalize($restaurants, null, ['groups' => 'all_restaurants']);

        $jsonContent = $this->serializer->serialize($data, 'json');

        echo $jsonContent;
    }
}
```

Et voilà, un grand json est retourné ! Le problème, c'est qu'il est illisible :

```
[{"id":1,"name":"Payet Laine SARL","description":"Temporibus eius aut consectetur debitis facere. Quidem voluptas qui fugiat accusantium pariatur impedit. Qui expedita ut blanditiis deleniti rerum facere optio. Fugit aut dignissimos sit doloremque. Ipsam et occaecati provident deserunt. Fugiat non consequuntur voluptatem necessitatibus. Dolores ut non esse error est consequatur. Repellendus repellendus ut doloribus sed."},{"id":2,"name":"Vallet","description":"Blanditiis asperiores voluptates magnam distinctio. Qui aut dolor quibusda...
```

En fait, un `echo` retourne des données avec le header de réponse HTTP `Content-Type: text/html`. Le document est donc lu comme du texte HTML et n'est pas mis en forme comme du JSON. Pire encore, le navigateur risque de rajouter des caractères spéciaux que nous ne souhaitons pas.

Nous allons donc :
1. Créer un objet `Response`
2. Dire à cette response d'avoir le header `Content-Type: application/json`
3. Retourner cette response


```php
/**
 * @Route("/api/restaurants", name="api_restaurant")
 */
public function index()
{

    $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAll();

    $data = $this->serializer->normalize($restaurants, null, ['groups' => 'all_restaurants']);

    $jsonContent = $this->serializer->serialize($data, 'json');

    $response = new Response($jsonContent);
    $response->headers->set('Content-Type', 'application/json');

    return $response;
}
```

Et hop, une belle response en JSON !

> **Note:** Vous devriez installer une extension de navigateur qui permette d'afficher les JSON correctement :
> - Firefox : [JSONView](https://addons.mozilla.org/fr/firefox/addon/jsonview/)
> - Chrome : [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=fr)

```json
[
    {
    "id": 1,
    "name": "Payet Laine SARL",
    "description": "Temporibus eius aut consectetur debitis facere. Quidem voluptas qui fugiat accusantium pariatur impedit. Qui expedita ut blanditiis deleniti rerum facere optio. Fugit aut dignissimos sit doloremque. Ipsam et occaecati provident deserunt. Fugiat non consequuntur voluptatem necessitatibus. Dolores ut non esse error est consequatur. Repellendus repellendus ut doloribus sed."
    },
    {
    "id": 2,
    "name": "Vallet",
    "description": "Blanditiis asperiores voluptates magnam distinctio. Qui aut dolor quibusdam laudantium voluptatibus. Ut omnis qui sunt qui ratione sed inventore. Molestias animi iusto rerum ut voluptas impedit. Blanditiis quasi repellendus quo aperiam dignissimos. Error molestias itaque consequatur nobis id ut. Facere sequi omnis enim laboriosam laborum delectus. Sapiente nesciunt odit autem. Doloribus nesciunt possimus provident itaque."
    },
```

## Exercice 3 - Créer une route POST

Étapes :

### Créer un restaurant en dur
> Comment faire ? https://gist.github.com/tomsihap/7e5063a12f6bab1d3af035e15698f48a#46-enregistrer-une-donn%C3%A9e--service-doctrine-et-entitymanager-create
1. Créer une méthode pour `POST /api/restaurants`
2. Dans la méthode, créer un restaurant "en dur" (new Restaurant, les setters...)
3. Enregistez-le en base de données

```php
/**
 * @Route("/api/restaurants", name="api_restaurant", methods={"POST"})
 */
public function create() {

    /**
     * On créée un restaurant en prenant les données de la requête
    */
    $restaurant = new Restaurant;
    $restaurant->setName('Nouveau resto');
    $restaurant->setDescription( 'Une description !' );

    /**
     * On récupère les users 1 et city 1 (car l'objet Restaurant s'attend à des objets)
     */
    $user = $this->getDoctrine()->getRepository(User::class)->find(1);
    $city = $this->getDoctrine()->getRepository(City::class)->find(1);

    $restaurant->setUser($user);
    $restaurant->setCity($city);

    /**
     * On enregistre en base de données
    */
    $manager = $this->getDoctrine()->getManager();
    $manager->persist($restaurant);
    $manager->flush();
}
```

### Récupérer les données de requête

> Comment faire ? https://symfony.com/doc/current/introduction/http_fundamentals.html#symfony-request-object
1. Injectez `Request $request` dans la méthode
2. Faites une requête POST avec Postman, avec tous les champs nécessaires pour créer un restaurant. **Attention : dans Postman, il faut mettre les données dans l'onglet Body, et séléctionner "form-data"**
3. Trouvez comment récupérer ces données de requête venant de Postman, dans l'objet `$request` (par exemple: avec postman j'envoie le champ `name`, comment je le retrouve dans `$request` ?)

```php
/**
 * @Route("/api/restaurants", name="api_restaurant", methods={"POST"})
 */
public function create(Request $request) {

    /**
     * On lit les données de la requête :
     */
    dump($request->request);

    /**
     * Pour lire un champ de la requête, parmi les champs donnés dans Postman (ici, le
     * champ 'name' par exemple)
     */
    dd($request->request->get('name'));
}
```

### Utiliser les données de la requête pour créer l'objet Restaurant
- Maintenant que vous avez réussi à créer un restaurant avec des données en dur, et que vous avez réussi à récupérer les données d'une requête HTTP POST, utilisez les données de la requête plutôt que vos données en dur pour créer l'objet Restaurant.

```php
/**
 * @Route("/api/restaurants", name="api_restaurant", methods={"POST"})
 */
public function create(Request $request) {


    /**
     * On créée un restaurant en prenant les données de la requête
     */
    $restaurant = new Restaurant;
    $restaurant->setName($request->request->get('name'));
    $restaurant->setDescription( $request->request->get('description') );

    /**
     * Comme on n'indique que des ID dans la requête mais que l'objet Restaurant s'attend
     * à des objets City et User, on les récupère en BDD grâce aux ID donnés en requête
     */
    $user = $this->getDoctrine()->getRepository(User::class)->find( $request->request->get('user_id') );
    $city = $this->getDoctrine()->getRepository(City::class)->find( $request->request->get('city_id') );

    $restaurant->setUser($user);
    $restaurant->setCity($city);

    /**
     * On enregistre en base de données
     */
    $manager = $this->getDoctrine()->getManager();
    $manager->persist($restaurant);
    $manager->flush();

    /**
     * On retourne un code 201 (created)
     */
    return new Response(null, 201);
}
```


La requête Postman doit ressembler à :

```
POST http://localhost:8000/api/restaurants

name: test
description: une description
user_id: 1
city_id: 1
```

## Exercice 4 - Poursuivre nos routes GET

1. Faire les groupes de sérialisation dans les Entity
2. Créer la route dans le controller dédié

`User.php` :

```php
/**
* @ORM\Id()
* @ORM\GeneratedValue()
* @ORM\Column(type="integer")
* @Groups("all_users")
*/
private $id;

/**
* @ORM\Column(type="string", length=180, unique=true)
* @Groups("all_users")
*/
private $email;
```

`ApiUserController.php` :

```php
<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApiUserController extends AbstractController
{
    public $serializer;

    public function __construct()
    {
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer($classMetadataFactory)];

        $this->serializer = new Serializer($normalizers, $encoders);
    }

    /**
     * @Route("/api/users", name="api_user_index", methods={"GET"})
     */
    public function index()
    {
        $cities = $this->getDoctrine()->getRepository(User::class)->findAll();
        $data = $this->serializer->normalize($cities, null, ['groups' => 'all_users']);
        $jsonContent = $this->serializer->serialize($data, 'json');

        $response = new Response($jsonContent);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
```

`City.php` :

```php
/**
* @ORM\Id()
* @ORM\GeneratedValue()
* @ORM\Column(type="integer")
* @Groups("all_cities")
*/
private $id;

/**
* @ORM\Column(type="string", length=255)
* @Groups("all_cities")
*/
private $name;

/**
* @ORM\Column(type="string", length=15)
* @Groups("all_cities")
*/
private $zipcode;
```

`CityController.php` :

```php
<?php

namespace App\Controller;

use App\Entity\City;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
class ApiCityController extends AbstractController
{

    public $serializer;

    public function __construct()
    {
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer($classMetadataFactory)];

        $this->serializer = new Serializer($normalizers, $encoders);


    }

    /**
     * @Route("/api/cities", name="api_city_index", methods={"GET"})
     */
    public function index()
    {
        $cities = $this->getDoctrine()->getRepository(City::class)->findAll();
        $data = $this->serializer->normalize($cities, null, ['groups' => 'all_cities']);
        $jsonContent = $this->serializer->serialize($data, 'json');

        $response = new Response($jsonContent);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
```

## Exercice 5 - Faire une route d'édition pour les restaurants

Vérifiez si chaque attribut est envoyé puis si l'est, appelez le setter pour l'attribut : 
```php
/**
 * @Route("api/restaurants/{restaurant}/edit", name="api_restaurant_patch", methods={"POST"})
 */
public function update(Request $request, Restaurant $restaurant) {


    if ( !empty($request->request->get('name')) ) {
        $restaurant->setName( $request->request->get('name') );
    }

    if ( !empty($request->request->get('description')) ) {
        $restaurant->setDescription( $request->request->get('description') );
    }

    if ( !empty($request->request->get('city_id')) ) {
        $restaurant->setCity( $this->getDoctrine()->getRepository(City::class)->find( $request->request->get('city_id') ) );
    }

    if ( !empty($request->request->get('user_id')) ) {
        $restaurant->setUser( $this->getDoctrine()->getRepository(City::class)->find( $request->request->get('user_id') ) );
    }

    $manager = $this->getDoctrine()->getManager();
    $manager->flush();

    return new Response(null, 202);
}
```

## Exercice 6 - 

Modifiez les Entités pour ajouter aux attributs "enfants" (donc Reviews pour Restaurant par exemple) l'annotation `cascade={"all"}`. Par exemple, dans `Restaurant.php` :

```php
/**
 * @ORM\OneToMany(targetEntity="App\Entity\Review", mappedBy="restaurant", cascade={"all"}, orphanRemoval=true)
 */
private $reviews;
```

et dans `Review.php` :
```php
/**
 * @ORM\OneToMany(targetEntity="App\Entity\Review", mappedBy="parent", cascade={"all"})
 */
private $childs;
```

Créez ensuite la route de suppression :

```php
/**
 * @Route("api/restaurants/{restaurant}", name="api_restaurant_delete", methods={"DELETE"})
 */
public function delete(Request $request, Restaurant $restaurant) {

    $manager = $this->getDoctrine()->getManager();
    $manager->remove($restaurant);

    $manager->flush();

    return new Response(null, 200);
}
```

---

`client.html` :

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet"
        href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
        integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">

  </head>
  <body>

        <div class="container mt-3">
            <div class="row">
                <div class="col">

                    <!-- Bloc formulaire -->

                    <div class="jumbotron bg-white">
                        <form id="restaurantForm">
                            <div class="form-group">
                                <label for="formName">Nom</label>
                                <input id="formName" type="text" class="form-control" name="name" placeholder="Nom du restaurant">
                            </div>
                            <div class="form-group">
                                <label for="formDescription">Description</label>
                                <textarea class="form-control" name="description" id="formDescription" rows="3"></textarea>
                            </div>

                            <div class="form-group">
                                <label for="formCity">Ville</label>
                                <select name="city_id" id="formCity"></select>
                            </div>

                            <div class="form-group">
                                <label for="formUser">Créé par</label>
                                <select name="user_id" id="formUser"></select>
                            </div>

                            <button id="formButton" class="btn-primary float-right btn">Créer</button>
                        </form>
                    </div>

                    <hr>
                    <p>
                        <button id="showRestaurantsButton" class="btn btn-secondary">Afficher les restaurants</button>
                        <div id="restaurantsNew" style="display:none"></div>
                        <hr>
                        <div id="restaurantsList"></div>
                    </p>

                </div>
            </div>
        </div>
      
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"
        integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9"
        crossorigin="anonymous"></script>


    <script>

        $(function() {

            /**
             * Au démarrage de la page, on charge tous les User et City, et on les met dans les SELECT du formulaire :
             */

            $.get('http://localhost:8000/api/users', res => {
                $('#formUser').html(''); // On vide la liste des options User si il y en a

                // Pour chaque User, on le rajoute à la liste des options du select
                $.each(res, function(key, user) {
                    $('#formUser').append('<option value="'+ user.id +'">'+ user.email +'</option>');
                })
            });

            $.get('http://localhost:8000/api/cities', res => {
                    $('#formCity').html(''); // On vide la liste des options User si il y en a

                    // Pour chaque User, on le rajoute à la liste des options du select
                    $.each(res, function(key, city) {
                    $('#formCity').append('<option value="'+ city.id +'">'+ city.name +'</option>');
                    })
            });
            /**
             * Quand on clique sur "Afficher les restaurants"...
             */
            $('#showRestaurantsButton').on('click', function(e) {

                // On fait une requête GET (vers une API sans recharger la page, asynchrone)...
                $.get({
                    // vers la liste des restaurants...
                    url: 'http://localhost:8000/api/restaurants'
                })
                .done(res => {

                    // Quand on reçoit les restaurants (dans "res") ...
                    console.log(res);

                    // On vide le contenu de la liste si elle était déjà remplie...
                    $('#restaurantsList').html('');


                    // Et pour chaque élément, on l'ajoute à la liste :
                    $.each(res, function(key, restaurant) {

                        console.log(restaurant)

                        // On créée dans le DOM notre élément "card" de boostrap :
                        let card = document.createElement("div");
                        card.className = "card mb-2";

                        let cardHeader = document.createElement("div");
                        cardHeader.className = "card-header";

                        let cardHeaderStrong = document.createElement('strong');
                        cardHeaderStrong.append(restaurant.name);

                        let cardBody = document.createElement('div')
                        cardBody.className = "card-body";

                        let cardBodyP = document.createElement('p');
                        cardBodyP.append(restaurant.description);

                        // On structure tout ça :
                        card.appendChild(cardHeader);
                        cardHeader.appendChild(cardHeaderStrong);
                        card.appendChild(cardBody);
                        cardBody.appendChild(cardBodyP);

                        $('#restaurantsList').append(card);
                    })
                });

            })

            /**
             * Quand on clique sur "Créer"...
             */
            $('#formButton').on('click', function (e) {
                // On évite que le clic sur le bouton recharge la page
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                // On gère la requête POST pour créer le restaurant :
                $.post({
                    url: 'http://localhost:8000/api/restaurants',
                    data: {
                        name: $('#formName').val(),
                        description: $('#formDescription').val(),
                        user_id : $('#formUser').val(),
                        city_id : $('#formCity').val(),
                    }
                })
                .done(res => {
                    console.log(res);
                    console.log('Le restaurant a été créé.');

                    // On l'affiche dans la liste (en premier: "prepend") :

                    $('#restaurantsNew').prepend(
                        '<div class="card mb-2">'+
                            '<div class="card-header">'+
                                '<strong>' + $('#formName').val() + '</strong>'+
                            '</div>'+
                            '<div class="card-body">'+
                                '<p>'+ $('#formDescription').val() +'</p>'+
                            '</div>'+
                        '</div>'
                    ).fadeIn(400);
                })

            });
            

        });
    </script>
  </body>
</html>
```