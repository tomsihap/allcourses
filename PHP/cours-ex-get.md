# Exercices PHP : Transmettre des données entre les pages

## Rappel de cours : paramètres GET

Pour envoyer un paramètre en GET à une page, on doit ajouter à son URL les paramètres de la façon suivante :

```
http://example.com/page.php?key1=value1&key2=value2
http://example.com/page.php?prenom=luke&nom=skywalker
```

Pour récupérer, dans `page.php`, les données `prenom` et `nom` envoyées ci-dessus, on récupère ainsi :

```php
<?php
// dans page.php
  
echo $_GET['prenom'];
echo $_GET['nom'];
```

On note que `$_GET` est un tableau ! On peut débugguer toutes les données avec `var_dump($_GET)`.

### Rappel de cours: créer un lien

On peut tout à fait passer ces paramètres GET dans un lien ! Par exemple  :

```php
<?php
// dans accueil.php
?>

<a href="article.php?title=mon nouvel article">Cliquez ici pour voir l'article</a>
```

```php
<?php
// dans article.php
?>

<h1>Voici le  titre de l'article demandé :</h1> <?php echo $_GET['title'] ?>
```

Ou en  version réduite avec `<?=` au lieu de `<?php echo` : 
```php
<?php
// dans article.php
?>

<h1>Voici le  titre de l'article demandé :</h1> <?= $_GET['title'] ?>
```


## Exercices de base
1. En envoyant les paramètres GET suivants : `livre`, `auteur`, `date`, affichez la phrase suivante : `Le livre xxxx ecrit par yyyy publié en zzzz`.

2. Créer un lien dans `accueil.php` qui ira vers article.php et qui enverra les données suivantes en GET :
- `title` (un titre d'article)
- `author` (un nom d'auteur d'article)
- Dans `article.php`, affichez ces données-là (title dans une balise H1, author dans une balise small)

3. Passer deux variables à `accueil.php` nommées `scoreManche1` et `scoreManche2`. Afficher dans `accueil.php` la phrase suivante: `Le score de la manche 1 est XXX, le score de la manche 2 est YYY, le total du match est de ZZZ`.

4. En gardant le code de l'exercice 3, testez si `scoreManche1` et `scoreManche2` existent (grâce à `if` et la fonction `isset()`). Si l'un ou l'autre n'existe pas, affichez une erreur.


### Rappel de cours  : tester l'existence d'une variable

Pour tester si une variable existe, on utilisera `isset()`:

```php
if (isset($_GET['prenom']) {
  echo "Le prénom a été renseigné dans l'URL.";
}
```

Ou à l'inverse grâce à `!` qui teste l'inverse dans un `if` :

```php
if ( !isset($_GET['prenom'] ) {
  echo "Attention ! Le prénom n'a pas été renseigné dans l'URL.";
}
```

## Exercices

### Créer une liste d'articles

1. Préparez un tableau `$articles` qui contiendra les données suivantes :

```
1 :
    'title': 'Titre du premier article'
    'content': 'Contenu  du  premier article'
2 :
    'title': 'Titre du second article'
    'content': 'Contenu du second article'
3 :
    'title': 'Titre du troisième article'
    'content': 'Contenu du troisième article'
```

2. Déclarez ce  tableau à la fois dans `accueil.php` et dans `article.php`.
3. Dans `accueil.php`, faites une boucle `foreach` sur votre tableau pour afficher une liste de liens sous cette forme :

```html
<a href="article.php?id=1">Titre du premier article</a>
<a href="article.php?id=2">Titre du second article</a>
<a href="article.php?id=3">Titre du troisième article</a>
```

Le modèle est en fait :
```html
<a href="article.php?id=CLÉ_ID_DANS_LE_TABLEAU">CLÉ_TITLE_DANS_LE_TABLEAU</a>
```

4. Dans `article.php`, récupérez l'ID passé en paramètres GET. Grâce à celui-ci, récupérez l'article correspondant dans `$articles` que vous avez déclaré aux points (1) et (2).

5. Dans `article.php`, affichez l'article trouvé (titre dans une balise `h1`, contenu dans une balise `p`).
