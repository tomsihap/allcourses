# Angular 9 : Découverte de Angular - Exercices
> - [Retourner à la liste des cours](../readme.md)
> - Cours : [cliquez-ici](01.md)
> - Corrections : [cliquez-ici](corrections.md)

---
### Exercice 1
> [Lien vers la correction](corrections.md#correction-1)
- Modifiez ce nouveau composant (et non pas le fichier `app.component.html`) pour afficher à la place une liste de tâches :

![Tasks](img/tasksulli.png)

--- 

---
### Exercice 2
> [Lien vers la correction](corrections.md#correction-2)
- Créez un composant `task`, qui ne contiendra qu'une seule tâche, et ajoutez le plusieurs fois dans votre composant `tasks-list` afin d'avoir plusieurs tâches issues du component `task` :

![](img/new-taskslist.png)
---

---
### Exercice 3
> [Lien vers la correction](corrections.md#correction-3)
- Ouvrez un terminal dans le dossier de vos projets
- Créez un nouveau projet nommé `angular-tour-of-heroes`, sans options. Acceptez le routing Angular lorsque demandé et choisissez SCSS lorsque demandé
- Ouvrez le projet dans VSCode
- Lancez le serveur Angular
---

---
### Exercice 4
> [Lien vers la correction](corrections.md#correction-4)

- Trouvez où se situe le titre du component `app.component` et modifiez-le en `Tour of Heroes`.
- Ajoutez un type `string` aux attributs : `title` et `subTitle`.
---

---
### Exercice 5
> [Lien vers la correction](corrections.md#correction-5)

- Ajoutez Bootstrap au projet Tour of Heroes.
- Lisez les warning `WARN` affichés lors de l'installation et essayez de les résoudre : 
![](img/c0206.png)
- Une fois résolus, saisissez `npm update` pour valider l'installation de Bootstrap
---


---
### Exercice 6
> [Lien vers la correction](corrections.md#correction-6)

- Créez un component `heroes`.
- Importez ce component dans `app.component.html`.
- Dans votre component `heroes`, ajoutez un attribut `hero` de type `string` avec pour valeur le nom de héros de votre choix.
- Affichez ce nom de héros dans la partie HTML du component.

![](img/0*0*.png)
---

---
### Exercice 7
> [Lien vers la correction](corrections.md#correction-7)

- Créez un fichier `src/app/Hero.ts` et créez une interface qui contiendra les attributs `id` (de type `number`) et `name` (de type `string`).

- Importez  l'interface dans le component `app-hero`

- Remplacez le `hero` existant par un objet de type `Hero` (avec id=1)

---


---
### Exercice 8
> [Lien vers la correction](corrections.md#correction-8)

- Affichez les données du héros créé dans le component :

![](img/c0217.png)

---


---
### Exercice 9
> [Lien vers la correction](corrections.md#correction-9)

- Créez un bouton "mettre en congé" qui, une fois cliqué, active le bouton "embaucher les héros !" :

![](img/c0224.gif)

Les étapes à suivre sont :
1. Créer un bouton "Mettre en congé"
2. Ajouter un Event Binding qui écoute le clic sur le bouton
3. Quand on clique sur le bouton, activer une méthode
4. Dans la méthode, modifier la valeur de `isActivated` sur son inverse (soit true, soit false)

> Comment accéder à `isActivated` ? Quand on est dans une classe, on accède ou modifie ses propres attributs et méthodes avec `this.attribut` ou `this.method()`. Par exemple :

```js
class Hello() {
    name: string = "Thomas";

    sayHello() {
        console.log( "Hello" + this.name ) !
    }
}
```

---

---
### Exercice *
> [Lien vers la correction](corrections.md#correction-*)

![](img/0*0*.png)
---