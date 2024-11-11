<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Ogiltig e-postadress.";
        exit;
    }

    // Prepare email
    $to = "hussein@artifexah.se"; // Replace with your email address
    $email_subject = "Ny konsultationsförfrågan: $subject";
    $email_body = "Du har fått ett nytt meddelande från ditt webbformulär.\n\n".
                  "Här är detaljerna:\n".
                  "Namn: $name\n".
                  "E-post: $email\n".
                  "Meddelande:\n$message";

    $headers = "Från: $email";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Tack för ditt meddelande. Vi kommer att kontakta dig så snart som möjligt.";
    } else {
        echo "Något gick fel när meddelandet skulle skickas. Försök igen senare.";
    }
}
?>
