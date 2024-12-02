<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $captcha = $_POST['g-recaptcha-response'];

    $secret = 'TU_CLAVE_SECRETA';
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha");
    $responseKeys = json_decode($response, true);

    if(intval($responseKeys["success"]) !== 1) {
        echo 'Por favor, completa el CAPTCHA correctamente.';
    } else {
        // Procesa el formulario
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $services = $_POST['services'];

        // Aquí puedes manejar el almacenamiento de los datos, envío de correos, etc.
        echo 'Formulario enviado con éxito.';
    }
}
?>
