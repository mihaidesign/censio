<?php

session_start();

$user = $_SESSION['user'];

// sanitize check 
// SELECT USERS from userTable where username = sanitizedUserName

if ($user == 'admin') {
    echo '{
        "message": "This is a secret message only for administrator",
        "success": true
    }';
} else {
    echo '{
        "message": "Who the f are you",
        "success": false
    }';
}