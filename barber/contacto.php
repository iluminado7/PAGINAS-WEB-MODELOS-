<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recupera los datos del formulario
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $telefono = $_POST["telefono"];
  $mensaje = $_POST["mensaje"];

  // Configura la dirección de correo electrónico a la que se enviarán los datos
  $destinatario = "";
  $asunto = "Mensaje desde el formulario de contacto";
  // Crea el mensaje que se enviará por correo electrónico
  $cuerpo = "Nombre: $nombre\n";
  $cuerpo .= "Email: $email\n";
  $cuerpo .= "Telefono: $telefono\n";
  $cuerpo .=  "Mensaje: $mensaje\n";
  
  $mail = (mail($destinatario, $asunto, $cuerpo));
  

  
} else {
  echo '<script>alert("Error en el envío, ingrese los datos nuevamente.");</script>';
}
?>