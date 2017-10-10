<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/config.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/lib/PHPMailerAutoload.php');

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = $smtp['host'];  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = $smtp['username'];                 // SMTP username
$mail->Password = $smtp['password'];                           // SMTP password
$mail->SMTPSecure = $smtp['secure'];                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$mail->CharSet="UTF-8";

$mail->setFrom ($sendto, $username);
$mail->addAddress ($sendto);     // Add a recipient
$mail->addReplyTo ($usermail);

if ($_FILES['file']) {
  $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);         // Add attachments
}
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ с X-PRO';
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
  echo "<center><h2>Что-то случилось...Попробуйте еще раз!</h2></center>". $mail->ErrorInfo;
} else {
  echo "<center><h2>Ваша заявка отправлена</h2></center>";
  echo "<center><a href='index.html' style='color:red; cursor:pointer; font-size: 18px;'>Вернуться на главную</a></center>";
}

?>