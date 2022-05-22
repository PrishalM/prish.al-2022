<?php

$to = 'contact@prish.al';

$subject = "Prish.al Contact form from : $name";

$message = "You have received a new message. ".

" Here are the details:\n Name: $name \n ".

"Email: $email \n Message \n $message";

$headers = array(
    'From' => "From: $email\n",
    'Reply-To' => 'To: contact@prish.al',
    'X-Mailer' => 'PHP/' . phpversion()
);


mail($to,$subject,$message,$headers);


header('Location: message-sent.html');

?>

