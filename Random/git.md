# Installer et utiliser Git

## Installation des outils et configuration

### Outils
- Installer Git sur la machine: https://git-scm.com/
- Vérifier que Git est installé : ouvrir un terminal et saisir la ligne suivante, la version devrait s'afficher.

```bash
git version
```
> Vous pouvez vérifier l'installation dans les différentes invites de commande (par exemple: Bash Ubuntu WSL, console CMD de Windows...)

### Configurer Git

Dans un terminal :
```bash
git config --global user.name "Thomas Sihapanya"
git config --global user.email "sihapanya.thomas@gmail.com"
```

> Vous **devez** recopier ces commandes dans les différentes invites de commande s'il y en a plusieurs (par exemple: Bash Ubuntu WSL, console CMD de Windows...)


## En ligne de commande

### Créer un premier repository

- Aller dans un dossier de projet et saisir :

```bash
git init
```

### Créer le projet dans Github pour le rattacher à une sauvegarde en ligne

> On va créer le projet sur Github puis rattacher l'URL du projet à notre Git. On appelle ça une "remote", c'est à dire le serveur disant (ici : le projet Github !). On appellera cette remote `origin`, c'est un nom conventionnel.

- Créer le projet dans Github
- Récupérer l'URL dans la ligne "HTTPS"
- Retourner dans le terminal et saisir :

```bash
git remote add origin https://url-qui-a-ete-copiee 
```

> Si il y a eu une  erreur  dans l'URL ou si on veut la changer, on saisit :

```bash
git remote set-url origin https://url-a-modifier
```

### Faire un premier commit
- Faire des modifications dans le projet, les sauvegarder puis :

#### Ajouter tous les fichiers dans le prochain commit (= prochaine sauvegarde) 

```bash
git add -A
```

#### Créer le commit (= la sauvegarde) avec un message indiquant ce qu'on a changé

```bash
git commit -m "Titre de la modification"
```

### Envoyer le projet vers la remote la première fois
```bash
git push -u origin master
```

### Faire des commits et les envoyer par la suite

```bash
git add -A
git commit -m "Nom du commit"
git push
```

## Faire des commits dans VSCode

//TODO

## Ignorer des fichiers avec .gitignore

//TODO

## 