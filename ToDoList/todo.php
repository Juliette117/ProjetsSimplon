<?php

//1. Créer un fichier .txt
$file = fopen("liste.txt", "a");

//2. Ajouter du contenu à la main
//fwrite($file, 'Créer votre liste :');

//3. Lire le fichier et afficher dans une page html
$objListe = $_POST['createTasks'];

//4. Créer un formulaire (dans index.php)

//5. Récupérer la valeur du formulaire 
fwrite ($file, "$objListe \n");

//Ferme le fichier .txt
fclose($file);

//6. Insérer la valeur du formulaire dans le fichier txt
$content = file_get_contents('liste.txt');
//retour à la ligne (convertit retour à la ligne de fichier txt en html)
echo nl2br($content);

?>

