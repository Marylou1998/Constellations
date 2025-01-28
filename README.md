# Constellations
<h1>Description du projet</h1>
<h2>Le prototype</h2>
Code de base pour donner l'idée du jeu : étoiles interactives générées aléatoirement à chaque itération, possibilité de les relier.

![image](https://github.com/user-attachments/assets/bce0428d-a4a8-4a60-87fd-12c2049a1263)


<h2>Développement pour le contexte muséal</h2>
Comme le code allait être projeté sur un mur et dans la nuit, il fallait adapter le code notamment pour que les étoiles soient suffisamment visibles. Pour le code à destination du musée elles ont donc été considérablement agrandies : 

![image](https://github.com/user-attachments/assets/2feca862-29ee-4094-aff5-4776f6b8ec1c)

Le projet de la Nuit des musées étant principalement à destination d'enfants, j'ai ajouté des images dans le background qui peuvent être utilisées comme modèles pour dessiner dessus. J'ai dessiné les images sur procreate (PNG sans fonds).
<br>Ces images sont centrées dans une grille de 3/3 dans le canva.
<br>Dans le code rendu ici publique, seules les images à destination des enfants sont accessibles. Dans l'image précédente, on peut voir l'une des images ayant été créées spécialement pour la Nuit des musées sur la mythologie romaine et les animaux associés à la nuit. Ces images ne sont pas disponibles ici, elles ont été créées spécialement pour le Musée romain de Lausanne-Vidy et pour mon usage personnel). Les images "pour enfant" disponibles ici sont à disposition du public, elles ont été créées en s'inspirant de dessins pour enfants disponibles gratuitement en ligne (pixabay etc), et elles ont été créées "en bonus".

<h2>Fonctionnalités</h2>
La touche "Backspace" (effacer) permet d'effacer la dernière ligne tirée.
<br>La touche "Delete" (del) permet d'effacer toutes les lignes tirées.
<br><br>Dans le cadre de la version utilisée au musée, d'autres fonctionnalités avaient été ajoutées (ex. sauvegarde automatique de la fresque créée, récupération d'adresses mail pour envoyer ces images png aux visiteurs...). Elles ne sont pas reproduites dans ce code qui n'est pas à destination muséale. 

<h1>Procédure d'installation</h1>
En téléchargeant les éléments dans un dossier (par ex. sur le bureau), puis via Visual Studio Code en utilisant le Live Share ; ou via le terminal (mac) ou commande en utilisant un serveur local (http-server)

Visualisation directe dans itch.io : 
<br>https://maryloug.itch.io/constellations
<br>mdp : nuit

<h2>Librairie utilisée: P5.js</h2>
Permet la gestion facilitée d'éléments au sein du canva tel que :
<li>preload() pour l'affichage d'images non interactives en background</li>
<li>ellipse() et random() pour la création d'étoiles dans la fonction "generateStars()"</li>
<li>mousePressed et mouseReleased pour tirer les traits entre les étoiles</li>
<li>line() pour la création des traits à tirer entre les étoiles</li>
<li>etc..</li>

<h1>contexte de développement</h1>
Ce projet a été développé dans le cadre du cours Développement de jeu vidéo 2D, dispensé par Isaac Pante (SLI, Lettres, UNIL, Semestre de printemps 2023).
<br>Il a été utilisé dans le cadre du cours Médiation culturelle, dispensé par Martine Ostorero (SPEC Médiation culturelle, Lettres, UNIL, Semestre de printemps 2024), en collaboration avec le Musée romain de Lausanne-Vidy.
Après présentation du projet théorique lors d'un atelier de transposition au Musée romain de Lausanne-Vidy durant lequel j'avais présenté un projet totalement théorique de médiation culturelle en immersion, j'ai codé un prototype de ce jeu et l'ai envoyé au Musée romain de Vidy pour voir s'ils étaient intéressés ; nous avons convenu de son utilisation dans le programme de médiation culturelle de la Nuit des musées (septembre 2024). 
