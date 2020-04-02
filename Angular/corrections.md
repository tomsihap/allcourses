# Angular 9 : Découverte de Angular - Corrections
> - [Retourner à la liste des cours](../readme.md)
> - Cours : [cliquez-ici](01.md)
> - Exercices : [cliquez-ici](exercices.md)

- [Angular 9 : Découverte de Angular - Corrections](#angular-9--d%c3%a9couverte-de-angular---corrections)
      - [Correction 1](#correction-1)
      - [Correction 2](#correction-2)
  - [- Relancez le serveur : `ng serve --open`](#ul-lirelancez-le-serveur--ng-serve---openli-ul)
    - [Correction 3](#correction-3)
  - [> Si vous avez une erreur en rouge lors du lancement du serveur, c'est sans doute que votre précédent projet a encore son serveur qui tourne ! Coupez le serveur de l'ancien projet en allant dans son terminal et faites `ctrl+c`.](#blockquote-si-vous-avez-une-erreur-en-rouge-lors-du-lancement-du-serveur-cest-sans-doute-que-votre-pr%c3%a9c%c3%a9dent-projet-a-encore-son-serveur-qui-tourne--coupez-le-serveur-de-lancien-projet-en-allant-dans-son-terminal-et-faites-ctrlc-blockquote)
    - [Correction 4](#correction-4)
    - [Correction 5](#correction-5)
    - [Correction 6](#correction-6)
    - [Correction 7](#correction-7)
    - [Correction 8](#correction-8)
    - [Correction 9](#correction-9)
    - [Correction 10](#correction-10)
    - [Correction 11](#correction-11)
    - [Correction 12](#correction-12)
    - [Correction 13](#correction-13)
    - [Correction 14](#correction-14)
    - [Correction 15](#correction-15)
    - [Correction 16](#correction-16)
      - [Dans l'enfant](#dans-lenfant)
      - [Dans le parent](#dans-le-parent)
      - [Appeler l'enfant depuis le parent en passant la variable](#appeler-lenfant-depuis-le-parent-en-passant-la-variable)
      - [Changer l'état du bouton](#changer-l%c3%a9tat-du-bouton)
    - [Correction 17](#correction-17)
    - [Correction *](#correction)

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
### Correction 12
> [Lien vers l'exercice](exercices.md#exercice-12)

![](img/c0319.png)

---

---
### Correction 13
> [Lien vers l'exercice](exercices.md#exercice-13)

![](img/c0321.png)
![](img/c0322.png)

---

---
### Correction 14
> [Lien vers l'exercice](exercices.md#exercice-14)

![](img/c0324.png)
![](img/c0325.png)

Une manière plus optimale de gérer les boutons est d'en écrire plutôt qu'un seul qui aura un comportement conditionnel :
- la classe change en fonction de `isHireAllActivated`
- le texte du bouton change en fonction de `isHireAllActivated`

Le texte conditionnel se gère dans des accolades d'interpolation (car il s'agit de texte entre deux balises) :
![](img/c0420.png)

Les classes conditionnelles se gèrent de plusieurs manières ([voir la doc](https://angular.io/api/common/NgClass)) :

- soit on fait un **objet** `{}` de classes possibles selon une condition :
![](img/c0421.png)

- soit on fait un **tableau** `[]` de classes ou de fonctions retournant une classe :
![](img/c0422.png)

- en déclarant bien sûr la fonction retournant la classe dans le Typescript :
![](img/c0423.png)


---

---
### Correction 15
> [Lien vers l'exercice](exercices.md#exercice-15)

- Créez les composants :

![](img/c0402.png)


- Intégrez les composants entre eux aux bons endroits pour respecter cette arborescence :

1.  Dans le `app.component`, nous ajoutons le `app-heroes-actions` pour prévoir que nous aurons un bloc concernant les héros, un bloc concernant les actions (les boutons seront déplacés dans ce nouveau component) :
![](img/c0404.png)

2. Dans le `app.heroes`, nous ajoutons `app.hero` à l'endroit où nous devrions avoir la boucle des héros (le `<li>` sera déplacé dans `app.hero`), ainsi que le `app-hero-detail` à l'endroit où on a les détails du héros (ces détails seront déplacés dans `app-hero-detail`)

![](img/c0403.png)

---


---
### Correction 16
> [Lien vers l'exercice](exercices.md#exercice-16)

#### Dans l'enfant
![](img/c0428.png)

#### Dans le parent
![](img/c0424.png)

#### Appeler l'enfant depuis le parent en passant la variable
![](img/c0425.png)

#### Changer l'état du bouton
![](img/c0427.png)


---


---
### Correction 17
> [Lien vers l'exercice](exercices.md#exercice-17)

Reprennons la recette du cours pour passer une donnée d'un parent à un enfant :
> *1. Dans le TS du composant enfant, on déclare un attribut dont on a besoin pour fonctionner en `@Input attribut`*

Dans notre composant enfant, nous avions besoin de l'attribut `isHireAllActivated` (il est utilisé dans le `li` du HTML pour changer la couleur des héros lorsqu'ils sont embauchés ou non). Comme cette donnée vient de l'extérieur, nous l'ajoutons en `input`.

> Note: n'oubliez pas l'import de `Input` en ligne 1 !

![](img/c0417.png)

Ça y est, notre enfant prend maintenant en compte la variable dont il a besoin pour fonctionner. Du coup, on modifie la manière dont ce composant est appélé, dans le HTML du parent :
> *2. Dans le HTML composant parent, on appelle notre composant enfant en lui passant l'attribut dont il a besoin pour fonctionner `<app-enfant [attribut]="valeur"></app-enfant>`*

![](img/c0418.png)

Le parent `app-root` envoie maintenant une donnée `isHired` à l'enfant `app-heroes`. Par contre, nous n'avons pas encore vraiment dit à quoi correspondait ce `isHired`.

Voilà la logique mise en place :

> Quand on clique sur le bouton...
1. `app-heroes-actions` ENVOIE `switchHireActivated` À `app-root`


2. `app-root` REÇOIT `$event` DE `app-heroes-actions` (il contient la valeur de `switchHireActivated`)


3. `app-heroes` ATTEND la donnée `isHireAllActivated` venant de `app-root` pour fonctionner

Pour le point 3, nous avons écrit `[isHireAllActivated]=isHired` pour remplir ce rôle. Il nous manque plus qu'à définir dans `app-root` à quoi correspond cette donnée :

![](img/c0419.png)

- On déclare ligne 13 notre `isHired: boolean`
- On rédige notre méthode `onSwitchHireActivated` pour dire que `isHired` correspondà la donnée reçue de l'enfant `heroes-actions`.

Et voilà !

---


---
### Correction *
> [Lien vers l'exercice](exercices.md#exercice-*)
![](img/img.png)

---

