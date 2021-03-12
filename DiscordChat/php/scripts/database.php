<?php

//création de la session
session_start();
$id_session = session_id();

// //connexion à la bdd
// try {
    // $host = '';
    // $user = '';
    // $password = '';

    // $db = new PDO($host, $user, $password);
    // $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// } catch (PDOException $err) {
    // die('Erreur de connexion: ' . $err->getMessage());
//}

// connexion à la bdd
try {
    $db = new PDO(getenv('DATABASE'), getenv('DATABASE_USER'), getenv('DATABASE_PASSWORD'));
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $err) {
    die('Erreur de connexion: ' . $err->getMessage());
}

?>
