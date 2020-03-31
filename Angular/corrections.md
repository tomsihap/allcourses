# Angular 9 : Découverte de Angular - Corrections
> - [Retourner à la liste des cours](../readme.md)
> - Cours : [cliquez-ici](01.md)
> - Exercices : [cliquez-ici](exercices.md)


---
#### Correction 1
> [Lien vers l'exercice](exercices.md#exercice-1)
- Remarquez que nous modifions `app/tasks-list/tasks-list.component.html` !

![Correction](img/ul-li-correction.png)

--- 

---
#### Correction 2
> [Lien vers l'exercice](exercices.md#exercice-2)
- Coupez votre serveur avec `ctrl+c` pour saisir une nouvelle commande.
- Créez un component `task` avec `ng g c task`
- Modifiez `task.component.html` pour modifier le modèle d'une tâche :

![](img/task-component.png)

- Importez-le dans votre `task-list.component.html` autant de fois que nécessaire :

![](img/taskslist.png)


- Relancez le serveur : `ng serve --open`
--- 

---
### Correction 3
> [Lien vers l'exercice](exercices.md#exercice-3)
- Dans un terminal, les commandes utiles sont :
- `ls` pour voir ce qu'il y a dans mon dossier actuel
- `mkdir` pour créer un dossier
- `cd nomDuDossier` pour entrer dans un dossier

Ici, je vais dans mon dossier `projets` et je créée un dossier `angular` qui contiendra mes futurs projets Angular. Ensuite, je rentre dedans et je créée mon projet Angular avec le routeur et SCSS.

![](img/0301.png)

Ensuite, j'ouvre mon nouveau projet dans VSCode (le bon dossier !) et je lance le serveur.
![](img/0302.png)

> Si vous avez une erreur en rouge lors du lancement du serveur, c'est sans doute que votre précédent projet a encore son serveur qui tourne ! Coupez le serveur de l'ancien projet en allant dans son terminal et faites `ctrl+c`.
---

---
### Correction 4
> [Lien vers l'exercice](exercices.md#exercice-4)
![](img/0303.png)

---


---
### Correction 5
> [Lien vers l'exercice](exercices.md#exercice-5)

- Coupez le serveur afin d'accéder au terminal grâce à `ctrl+c`
- Installez Bootstrap avec NPM
![](img/0304.png)

Bootstrap ne s'est en fait pas complètement installé, comme pour une installation classique ([voir la doc de Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)) il est dépendant de jQuery et de popper.js !

Résolvez les erreurs en installant les packages demandés: `jquery@1.9.1` et `popper.js@^1.16.0` puis terminez avec un `npm update` pour relancer l'installation de Bootstrap :

![](img/c0207.png)

Plusieurs vulnérabilités sont indiquées par le terminal, nous les laissons de côté pour le moment !

---

---
### Correction *
> [Lien vers l'exercice](exercices.md#exercice-*)
![](img/0*0*.png)
---