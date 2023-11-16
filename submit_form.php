<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Validate form data (you can add more validation)
if (empty($name) || empty($email) || empty($message)) {
    echo "Please fill out all required fields.";
    exit;
}

// Send email
$to = "kellyli210.kl@gmail.com";  // Replace with your email address
$subject = "New Contact Form Submission";
$headers = "From: $email";

// You can customize the email body as per your needs
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Send the email
$mailSent = mail($to, $subject, $body, $headers);

// Check if the email was sent successfully
if ($mailSent) {
    echo "success";
} else {
    echo "Error sending email. Please try again later.";
}
?>