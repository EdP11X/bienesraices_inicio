<?php

function conectarDB(): mysqli {
    $db = new mysqli('localhost', 'root', '', 'bienesraices_crud');

    if($db->connect_error){
        echo "Error no se pudo conectar";
        exit;
    }

    return $db;
}