<?php
require 'database.php';

//Récupération de l'id de l'utilisateur 
$userId = $_SESSION['userid'];

//Met statut de l'utilisateur en offline dans la bdd
$userLogOut = $db->prepare("
            UPDATE users
            SET isLogged='0'
            WHERE idUser = $userId
        ");
$userLogOut->execute();


//Supprime toutes les données de session et cookie
session_start();
session_unset();
session_destroy();
session_write_close();
setcookie(session_name(),'',0,'/');
session_regenerate_id(true);

//Redirige vers la page de connexion
header('location: /?page=login');
