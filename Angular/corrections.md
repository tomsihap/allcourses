# Angular 9 : Découverte de Angular - Corrections
> - [Retourner à la liste des cours](../readme.md)
> - Cours : [cliquez-ici](01.md)
> - Exercices : [cliquez-ici](exercices.md)


---
#### Correction 1
> Remarquez que nous modifions `app/tasks-list/tasks-list.component.html` !

![Correction](img/ul-li-correction.png)

--- 

---
#### Correction 2

- Coupez votre serveur avec `ctrl+c` pour saisir une nouvelle commande.
- Créez un component `task` avec `ng g c task`

- Modifiez `task.component.html` pour modifier le modèle d'une tâche :

![](img/task-component.png)

- Importez-le dans votre `task-list.component.html` autant de fois que nécessaire :

![](img/taskslist.png)


- Relancez le serveur : `ng serve --open`
--- 
