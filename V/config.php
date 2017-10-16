<?php
  if(empty($_POST['email'])) exit("<p style='text-align:center;margin: 0 auto;font-size:24px;color:red;'>Введите адрес получателя</p>");

// проверяем правильности заполнения с помощью регулярного выражения 

  if (!preg_match("/^[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}$/i", $_POST['email'])) exit("<p style='text-align:center;margin: 0 auto;font-size:24px;color:red;'>Введите адрес в виде somebody@server.com</p>");
$_POST['email'] = htmlspecialchars(stripslashes($_POST['email'])); 
$_POST['name'] = htmlspecialchars(stripslashes($_POST['name'])); 
$_POST['phone'] = htmlspecialchars(stripslashes($_POST['phone']));
$_POST['message'] = htmlspecialchars(stripslashes($_POST['message']));


$sendto = "budo76@mail.ru"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['phone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$usermessage = $_POST['message'];// сохраняем в переменную данные полученные из поля c сообщением
$file = $_FILES['file'];// сохраняем в переменную файл

$smtp['host'] = 'smtp.mail.ru';
$smtp['username'] = 'budo76@mail.ru';
$smtp['password'] = '777vzxe';
$smtp['secure'] = 'tls';

?>