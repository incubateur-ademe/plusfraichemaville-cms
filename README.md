# Plus fraîche ma ville - CMS

Le but de la startup d'état Plus fraîche ma ville est d'accompagner les collectivités dans le choix de solutions de rafraîchissement urbain pérennes et durables.

Ce repository concerne le CMS qui servira à alimenter la V2 du site https://plusfraichemaville.fr .

Ce CMS est [Directus](https://directus.io/).


# Installation en local

### Démarrage de la base de données

Afin de pouvoir fonctionner, Directus a besoin d'une base de données PostgreSQL.

Il est possible d'utiliser la procédure d'installation de la base décrite dans [le repository du site Plus fraîche ma ville](https://github.com/incubateur-ademe/plusfraichemaville-site).

⚠️ En production, les tables liés à Directus sont installées sur le schéma "directus" de la base de données

### Configuration

Afin de faire tourner le CMS en local, il faut copier créer à la racine du projet un fichier .env à partir de [ce fichier d'exemple](./.env.dist).

### Initialisation du schéma de la base
Afin d'initialiser la base de données avec le schéma utilisé par Plus fraîche ma ville, il est nécessaire d'appliquer [le snapshot présent dans le repository](./db/snapshot.yaml) avec la commande suivante :

```shell
npm exec directus schema apply ./db/snapshot.yaml
```


### Démarrage

Démarrez ensuite le serveur en mode développement :

```shell
pnpm start
```

# Soumission d'un nouveau modèle de données

## Base de données

Afin de répercuter les modifications du modèle de données faite en local sur les autres environnements, il faut d'abord mettre à jour le snapshot du modèle:

```shell
pnpm create-db-snapshot
```

Une fois ce modèle créé, il suffira de le push sur la branche "prod" pour qu'il soit automatiquement appliqué à la base CMS de production, à l'aide de la commande incluse dans le fichier [Procfile](./Procfile)

## Classe typescript

Pour générer les classes Typescript à jour, on utilise le plugin [directus-extension-generate-types ](https://github.com/maltejur/directus-extension-generate-types)

Les classes peuvent donc être récupérées dans l'interface de Directus avant d'être copiées dans [le repo du site](https://github.com/incubateur-ademe/plusfraichemaville-site).