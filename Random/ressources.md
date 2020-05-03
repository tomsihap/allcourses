# Ressources

## Liens

### Coding challenges
- [CodinGame](https://www.codingame.com/home)
- [CodeWars](https://www.codewars.com)
- [BattleDev](https://battledev.blogdumoderateur.com/)
- [BattleDev: exercices des éditions précédentes](https://github.com/javascriptdezero/BattleDev-vscode)
- 

### Documentations
- [DevDocs](https://devdocs.io/)

### Culture générale, autres
- [Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging)
- [Liste de Gitmojis](https://gitmoji.carloscuesta.me/)
### Standards
- [https://validator.w3.org/](Validateur HTML/CSS du W3C)
- [https://www.php-fig.org/psr/](PHP-FIG et PSR)

### Cours
- [https://www.grafikart.fr/tutoriels/php](Cours PHP de Grafikart)

### Ressources diverses
> Livres gratuits en PDF contenant des cours ou des astuces pour plein de technos
- [Free Programming Books!](https://books.goalkicker.com/)

> 40 landing pages en HTML/CSS inspirantes
- [https://dev.to/davidepacilio/40-free-html-landing-page-templates-3gfp](40 Free HTML Landing Page Templates)

> Exemples de modèles de base de données + outil de conception de base de données
- [DrawSQL: Templates de bases de données SQL](https://drawsql.app/templates)

> Pourquoi il ne faut pas renvoyer le mot de passe utilisateur par mail et pourquoi il faut les hasher !
- [Plain Text Offenders](https://plaintextoffenders.com/faq/devs)

> Pourquoi il faut échapper les données utilisateur !
> [XKCD : Expoits of a Mom](https://xkcd.com/327/)




### Veille
- [Banana Data News : AI, Machine Learning & Data Science](https://banana-data.com/)
---
## Code snippets

### Utilisation de LocalStorage
> Affichage d'une div ou d'une autre selon si l'utilisateur a déjà visité le site ou non et ajout d'un bouton "ne pas se souvenir de moi" pour supprimer le localStorage.

```php
<div id="alertFirstVisit" class="alert alert-success" style="display:none">
    Bonjour, bienvenue sur ce site pour la première fois !
</div>
<div id="alertHasVisited" class="alert alert-warning" style="display:none">
    Bonjour, vous êtes de retour sur le site !
    <button id="btnCancelVisit" class="btn btn-sm btn-danger">Ne pas se souvenir de moi !</button>
</div>

<script>
    document.getElementById('btnCancelVisit').addEventListener('click', function() {
        localStorage.setItem('hasVisited', false);
        document.location.reload();
    });
    if (localStorage.getItem('hasVisited') === 'true') {
        document.getElementById('alertHasVisited').style = 'display: block';
    } else {
        document.getElementById('alertFirstVisit').style = 'display: block';
        localStorage.setItem('hasVisited', true);
    }
</script>
```