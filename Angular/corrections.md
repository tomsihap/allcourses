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

Ajoutez le style dans votre fichier `angular.json` :

![](img/c0210.png)

> Note: vous pouvez ajouter la version SCSS de Bootstrap (comme dans cet exemple) ou la version CSS (comme dans le cours), peu importe ! Comme nous avons choisi SCSS comme moteur CSS, il sera de toute façon compilé.

> Attention: il y a deux tableaux nommés `styles` dans ce fichier là. En fait, nous n'avons pas désactivé les "tests unitaires" dans cette installation ! Du coup, vous pouvez installer les styles autant pour l'application elle même que pour la version tests unitaires. Il faut bien modifier la ligne 31 et non pas 93 (bien que modifier les 2 ne pose pas de problème).

---


---
### Correction 6
> [Lien vers l'exercice](exercices.md#exercice-6)


- Créez le component `heroes` :
![](img/c0208.png)

- Importez ce component dans `app.component.html` :
![](img/c0209.png)

- Dans votre component `heroes`, ajoutez un attribut `hero` de type `string` avec pour valeur le nom de héros de votre choix :

![](img/c0211.png)

- Affichez ce nom de héros dans la partie HTML du component :

![](img/c0212.png)


---


---
### Correction 7
> [Lien vers l'exercice](exercices.md#exercice-7)


- Créez un fichier `src/app/Hero.ts` et créez une interface qui contiendra les attributs `id` (de type `number`) et `name` (de type `string`).

![](img/c0214.png)


- Importez l'interface dans le component `app-hero`

![](img/c0215.png)

- Remplacez le `hero` existant par un objet de type `Hero` (avec l'ID = 1)

![](img/c0216.png)

---


---
### Correction 8
> [Lien vers l'exercice](corrections.md#exercice-8)

- Affichez les données du héros créé dans le component :

![](img/c0218.png)

---


---
### Correction 9
> [Lien vers l'exercice](exercices.md#exercice-9)


1. Créer un bouton "Mettre en congé"
2. Ajouter un Event Binding qui écoute le clic sur le bouton

![](img/c0225.png)

1. Quand on clique sur le bouton, activer une méthode
2. Dans la méthode, modifier la valeur de `isActivated` sur son inverse (soit true, soit false)

![](img/c0226.png)

En fait, on dit dans la méthode que `this.isActivated` (notre booléen qui sert à activer ou non le bouton) doit être égal à son inverse quand j'active `onRest` !

---


---
### Correction 10
> [Lien vers l'exercice](exercices.md#exercice-10)

- Il suffit de changer le champ `value` du champ input !
- 
![](img/c0230.png)

---

---
### Correction 11
> [Lien vers l'exercice](exercices.md#exercice-11)

La solution était dans :
- Documentation sur les Pipes : https://angular.io/guide/pipes
- rubrique [built-in pipes](https://angular.io/guide/pipes#built-in-pipes)
- [pipes topics](https://angular.io/api?type=pipe)
- [UpperCasePipe](https://angular.io/api/common/UpperCasePipe)
- Usage : `{{ value_expression | uppercase }}`

![](img/c0236.png)

---

---
### Correction *
> [Lien vers l'exercice](exercices.md#exercice-*)
![](img/img.png)


---