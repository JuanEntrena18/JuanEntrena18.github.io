<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptcha_secret = "6Lc7CJAqAAAAADfl0yAd1TtcBnDQYcCJ_uViwFQ7";
    $recaptcha_response = $_POST['g-recaptcha-response'];

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $recaptcha_secret . "&response=" . $recaptcha_response);
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo 'Por favor, completa el reCAPTCHA.';
    } else {
        echo '¡Gracias por tu mensaje!';
        // Procesa el formulario
    }
}
?>
