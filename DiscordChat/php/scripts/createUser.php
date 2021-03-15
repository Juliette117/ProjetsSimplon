<?php

require 'database.php';

if (isset($_POST['email']) && isset($_POST['user']) && isset($_POST['password'])) {
    //Récupération des informations et hashage du mot de passe
    $email = $_POST['email'];
    $user = $_POST['user'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    //Insertion d'un nouveau utilisateur
    $createUser = $db->prepare("
        INSERT INTO 
        users (email, name, password)
        VALUES (:email, :name, :password)
    ");
    //Exécution de la requête
    $createUser->execute(array(
        ':email' => $email,
        ':name' => $user,
        ':password' => $password
    ));
    //Redirection
    header('location: /?page=login');
    exit;
}

