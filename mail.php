<?php

$formmail = 'info@kurs-kech.ru';
$recepient = "order_kech@talantov.org";
$sitename = "лаборатория целостного образования";

      $headers = "Return-Path: <".$formmail.">\r\n";
      $headers .= "From: ".$fromName." <".$formmail.">\r\n";
      $headers .= "X-Mailer: Feedback, v0.3 (http://artuelle.com)\r\n";
      $headers .= "X-Priority: 3\r\n";
      $headers .= "Reply-To: ".$fromName." <".$formmail.">\r\n";
      //$headers .= "To: ".$To."\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/plain; charset=charset=\"utf-8\"\r\n";
      $headers .= "Content-Transfer-Encoding: 8bit\r\n";

/*$recepient = "shloser.andriy@gmail.com";*/


$name = $_POST["uname"];
$phone = $_POST["uphone"];

$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers);

?>
