# Cours et exercices sur POST

## Exercice 1
Créer les fichiers suivants :
- post/contact.php
- post/traitement.php

Ensuite, remplissez `contact.php` avec le [fichier suivant](https://gist.githubusercontent.com/tomsihap/30da67be18ef0b5ed89ff24ebce93975/raw/7f95da62b067ba0ae27a078c8ef2d07d49aebdb1/gistfile1.txt).

## Exercice 2

Dans `contact.php`, modifiez le formulaire ainsi :
- Ajoutez l'attribut `method="post"` à la balise `<form>` pour envoyer les données en POST
- Ajoutez à tous les `<input>`, `<textarea>` ou `<select>` éventuels, l'attribut `name="nomduchamp"`

## Exercice 3
Dans traitement.php, récupérez les données avec `$_POST` et affichez les ainsi :

```
- Expéditeur : John Doe
- Adresse e-mail : john@doe.com
Message envoyé : lorem ipsum dolor sit amet
```

## Exercice 4 : formulaire de connexion

Étant donné les utilisateurs possibles suivants :
``` 
client@client.com | 12345azerty | client
johndoe@client.com | johnDoe123 | client
vendeur@vendeur.com | az3rty | vendeur
admin@admin.com | super@dmin | admin
```

- Créez les fichiers `login.php` et `connect.php`
- Dans `login.php`, faites un formulaire de connexion (adresse e-mail, mot de passe et rôle) qui sera traité par `connect.php`.
- Dans `connect.php`, affichez “Vous êtes connecté, voici les plans du V2 !” si l'utilisateur existe. Sinon, afficher un message d’erreur.


## Correction du formulaire de connexion :

`login.php` :

```php
<!doctype html>
<html lang="en">
<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <h1>Connectez-vous!</h1>
                <form action="connect.php" method="post" class="form">
                    <div class="form-group">
                        <label for="login">login</label>
                        <input name="login" input id="formLogin" type="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input name="password" input id="formPassWord" type="password" class="form-control">
                    </div>
                    <div class="form-group">
                    <p>Sélectionner votre rôle :<p>
                        <select name="role">                            
                            <option value="client">client</option>
                            <option value="vendeur">vendeur</option>
                            <option value="admin">administrateur</option>
                        </select>
                        <br>
                        <br>
                        <br>
                        <input class="btn btn-primary" type="submit" value="connectez-vous">
                </form>
            </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>
</html>
</div>
```


`connect.php` :

```php
<?php 
$clients = [
    [
        'mail' => 'client@client.com ',
        'password' => '12345azerty',
        'role' => 'client'
    ],
    [
        'mail' => 'johndoe@client.com',
        'password' => 'johnDoe123',
        'role' => 'client'
    ],
    [
        'mail' => 'vendeur@vendeur.com',
        'password' => 'az3rty',
        'role' => 'vendeur'
    ],
    [
        'mail' => 'admin@admin.com',
        'password' => 'super@dmin',
        'role' => 'admin'
    ],
];
// On extrait la colonne de $movies dans laquelle on souhaite rechercher
$colonne = array_column($clients, 'mail');
// On trouve la clé de la liste de films qui correspond (0, 1, 2...)
$key = array_search($_POST['login'], $colonne);
// Maintenant qu'on a la clé, on récupère le film via sa clé dans le tableau $movies
$client =  $clients[$key];
var_dump($client);
 if (isset($_POST['login']) AND $_POST['password'] ==  $client['password'] AND $_POST['role'] == $client['role'])
  {
echo 'Vous êtes connecté, voici les plans du V2 !';}
else {
    echo 'vous êtes un usurpateur';
}
 ?> 
```
