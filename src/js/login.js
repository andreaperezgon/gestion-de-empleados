// Necesito coger el formulario
const formulario = document.querySelector("#formulario-login");

// Necesito coger los campos
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Necesito coger el mensaje de error
const mensajeError = document.querySelector("#mensaje-error");

// Necesito escuchar cuando el usuario pulse Acceder
formulario.addEventListener("submit", function (evento) {

  // Evito que la página se recargue
  evento.preventDefault();

  // Compruebo que los campos no estén vacíos
  if (email.value === "" || password.value === "") {

    mensajeError.textContent = "Debes rellenar todos los campos";

    return;
  }

  // Usuario de prueba
  const emailCorrecto = "andrea@bastettattoo.com";
  const passwordCorrecta = "1234";

  // Compruebo si los datos son correctos
  if (
    email.value === emailCorrecto &&
    password.value === passwordCorrecta
  ) {

    window.location.href = "../../dashboard.html";

  } else {

    mensajeError.textContent =
      "Email o contraseña incorrectos";

  }

});
