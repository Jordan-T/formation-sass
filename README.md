
# EXERCICE: SASS

**Sass** (_**S**yntactically **A**wesome **S**tyle**s**heets_) est un langage de génération de feuilles de style.

Pourquoi utilsier du **SASS** ?

Il permet d'ajouter des fonctionnalité indispensable pour maintenir plus facilement de gros projets :
- **Variables**
- **Mixins**
- **Nesting**
- **Splinting**: Import de plusieurs documents
- **Functions**
- **Extends**
- **Placeholders**

Il y a deux normes d'écritures possible :
- **"SASS"** basé sur les indentations
- **"SCSS"** plus proche de la norme css (la plus utilisé).

Pour cet exercice, nous allons suivre la norme **"SCSS"** donc utiliser des fichiers `.scss` et générer les fichier CSS grâce à **gulp**


## Création d'une tache SASS avec gulp

Nous allons donc installer gulp sur le projet et définir une tache 'sass' dans le fichier `gulpfile.js`

Dans un terminal sur le dossier racine, installons les dépendances de développement suivant :

```
npm i -D gulp gulp-cli gulp-sass
```


Créons maintenant notre fichier `gulpfile.js` à la racine

```
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
});
```

Ajoutons maintenant le script dans le package.json

```
{
  ...
  "scripts": {
   ...
   "sass": "./node_modules/.bin/gulp sass"
  },
  ...
```

**Information**: L'ajout de `./node_modules/.bin/` permet de forcer l'utilisation du gulp installé dans les dépendances

## Les différentes possibilité offerte par SASS

Voici les principaux avantages que propose SASS

### Variables
### Mixins
### Nesting
### Splinting
### Functions
### Extends
### Placeholders


## Autre


### Autoprefixer

Il est conseillé d'ajouter un autoprefixer sur les projet pour facilité la rétrocompatibilité des navigateurs.

Fini la corvé des "vendor prefix" et support d'ancienne écriture.

#### exemple:

Votre CSS :

```
.example {
  display: grid;
  transition: all .5s;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}
```

Deviendra automatiquement:

```
.example {
  display: -ms-grid;
  display: grid;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
  background: -webkit-linear-gradient(top, white, black);
  background: -o-linear-gradient(top, white, black);
  background: linear-gradient(to bottom, white, black);
}
```


#### Installation via gulp

Il suffit alors d'ajouter ces packages :

```
npm i -D gulp-postcss autoprefixer
```

puis de modifier votre gulpfile.js

```
const gulp = require('gulp');
const sass = require('gulp-sass');
// ajout des modules pour prefixer
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function(){
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ])) // ajout de l'autoprefixer
    .pipe(gulp.dest('./public/css'))
});
```

Vous pouvez maintenant définir la liste des navigateurs compatible dans un fichier `.browserlistrc` à la racine.

Plus d'informations: https://github.com/postcss/autoprefixer

### LINT

Il se peut que vous rencontriez des projet contenant un linter de CSS.

Frustrant au début mais au final permet d'éviter les erreurs et d'avoir un code plus homogène.

Le plus connu est **Stylelint**: https://stylelint.io/

N'hesitez pas à visiter la documentation pour plus d'informations
