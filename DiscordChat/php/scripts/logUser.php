<?php

require 'database.php';

// Si les deux requêtes POST email et password existent
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    //Récupération de l'utilisateur dans la BDD dont l'email correspond à la saisie
    $user = $db->prepare("
        SELECT * 
        FROM users
        WHERE email = '{$email}'
     ");
    //Récupère tout les utilisateurs
    $user->execute();
    $user = $user->fetchAll();

    //Si un utilisateur est trouvé 
    if ($user) {
        //On récupère son ID
        $userId = $user[0]['idUser'];
        //Changement du status en "en ligne" dans la bdd
        $userLogged = $db->prepare("
            UPDATE users
            SET isLogged='1'
            WHERE idUser = $userId
        ");

        $userLogged->execute();


        //Récupération du mot de passe de l'utilisateur enregistré, puis vérification du mot de passe entré
        $userPassword = $user[0]['password'];
        $isCorrectPw = password_verify($password, $userPassword);

        //Si les identifiants sont corrects
        if ($isCorrectPw) {
            //Ouvrir la session et ajoute son id avant de rediriger vers home
            session_start();
            $id_session = session_id();
            $_SESSION['userid'] = $userId;
            $_SESSION['userName'] = $user[0]['name'];
            header('location: /');
        } else {
            header('location: /?page=login');
            
        }
        //Sinon, on redirige vers la page login
    } else {
        header('location: /?page=login');
        // echo "wrong user ";
    }


    exit;
}