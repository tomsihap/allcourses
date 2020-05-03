# Exercices de base : corrigés

> 1. En envoyant les paramètres GET suivants : livre, auteur, date, affichez la phrase suivante : Le livre xxxx ecrit par yyyy publié en zzzz.

Dans l'URL :
```
accueil.php?livre=1Q84 Livre I&auteur=Haruki Murakami&date=2009
```

`accueil.php`:
```php
Le livre <?= $_GET['livre'] ?>écrit par <?= $_GET['auteur'] ?> publié en <?= $_GET['date'] ?>.
```

---

> 2. Créer un lien dans accueil.php qui ira vers article.php et qui enverra les données suivantes en GET : title (un titre d'article), author (un nom d'auteur d'article)

`accueil.php`:
```php
<a href=""></a>
```

`article.php`:
```php
```


> 3. Dans article.php, affichez ces données-là (title dans une balise H1, author dans une balise small). Passer deux variables à accueil.php nommées scoreManche1 et scoreManche2. Afficher dans accueil.php la phrase suivante: Le score de la manche 1 est XXX, le score de la manche 2 est YYY, le total du match est de ZZZ.

> 4. En gardant le code de l'exercice 3, testez si scoreManche1 et scoreManche2 existent (grâce à if et la fonction isset()). Si l'un ou l'autre n'existe pas, affichez une erreur.