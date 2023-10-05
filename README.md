# Plus fraîche ma ville - CMS

Le but de la startup d'état Plus fraîche ma ville est d'accompagner les collectivités dans le choix de solutions de rafraîchissement urbain pérennes et durables.

Ce repository concerne le CMS qui servira à alimenter la V2 du site https://plusfraichemaville.fr .

Ce CMS est [Directus](https://directus.io/).


# Installation en local

## Base de données

Afin de pouvoir fonctionner, Directus a besoin d'une base de données PostgreSQL.

Il est possible d'utiliser la procédure d'installation de la base décrite dans [le repository du site Plus fraîche ma ville](https://github.com/incubateur-ademe/plusfraichemaville-site).

⚠️ En production, les tables liés à Directus sont installées sur le schéma "directus" de la base de données

### Initialisation du schéma de la base
Afin d'initialiser la base de données avec le schéma utilisé par Plus fraîche ma ville, il est nécessaire d'appliquer [le snapshot présent dans le repository](./db/snapshot.yaml) avec la commande suivante :

```shell
npm exec directus schema apply ./db/snapshot.yaml
```

## Configuration

Afin de faire tourner le CMS en local, il faut copier créer à la racine du projet un fichier .env à partir de [ce fichier d'exemple](./.env.dist). 

## Démarrage

Démarrez ensuite le serveur en mode développement :

```shell
pnpm start
```
