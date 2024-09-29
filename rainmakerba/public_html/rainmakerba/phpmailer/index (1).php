<?php
 
$content1 =$_POST['content1'];
$content2 =$_POST['content2'];
$content3 = $_POST['content3'];
$content4 = $_POST['content4'];
$content5 = $_POST['content5'];

require 'includes/PHPMailer.php';
require 'includes/Exception.php';
require 'includes/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
if(isset($_POST['content4'])){
    $content4 = $_POST['content4'];
    $content4 = filter_var($content4, FILTER_VALIDATE_EMAIL);
        if($content4 === false){
        exit("Email is Invalid");
    }
   
   
        
        try {

        //Server settings
        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        // $mail->Host    =  'smtp.gmail.com'; 
        $mail->Host = 'box5887.Bluehost.com'; // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        //    $mail->Username = '';  
        $mail->Username = 'sales@rainmakerba.com'; 
        $mail->Password = 'Rmsales@0720';               // SMTP username
        // $mail->Password = '';                           // SMTP password
        // $mail->SMTPSecure = 'tls'; 
        $mail->SMTPSecure = 'ssl';                           // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;   
        // $mail->Port = 587;                                   // TCP port to connect to

        //Recipients
        $mail->setFrom('sales@rainmakerba.com', 'Mailer');
        $mail->addAddress('sales@rainmakerba.com', 'Rainmakerba mail');     // Add a recipient

        // $mail->setFrom('Testphptest123@gmail.com', 'Mailer');
        // $mail->addAddress('Testphptest123@gmail.com', 'Rainmakerba mail');     // Add a recipient


        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        // $mail->Subject = 'Here is the subject This is the HTML message body <b>in bold!</b>';
 
        $mail->Subject = 'Contact details :'.$content1.' '.$content2;

        // $mail->Body    = $content1.$content2.$cont;">ent3.$content4.$content5;<textarea>
        $mail->Body    = '<h3> Phone :'.$content3.'<h3>Email : '.$content4.'
        <p><b>Message :</b> <span style="white-space: pre-wrap;"><br>  '.$content5.'</span><p>' ;

        // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        //    if($mail->send()) {
        //        echo 'email send';
        //     } else{
        //        echo 'error';
        //    };
        $mail->send();
        echo 'Message has been sent';

        } catch (phpmailerException $e) {
        echo $e->errorMessage();

        }
   
  echo 'error';
}
?>