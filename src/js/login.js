// Necesito comprobar si el login es correcto
export function validarLogin(email, password) {

  // Compruebo que los campos no estén vacíos
  if (email === "" || password === "") {
    return "Debes rellenar todos los campos";
  }

  // Usuario de prueba
  const emailCorrecto = "andrea@bastettattoo.com";
  const passwordCorrecta = "1234";

  // Compruebo si los datos son correctos
  if (
    email === emailCorrecto &&
    password === passwordCorrecta
  ) {
    return "OK";
  }

  // Si los datos no son correctos
  return "Email o contraseña incorrectos";
}

// Esta parte solo se ejecuta en el navegador
if (typeof document !== "undefined") {

  // Necesito coger el formulario
  const formulario = document.querySelector("#formulario-login");

  // Necesito coger el mensaje de error
  const mensajeError = document.querySelector("#mensaje-error");

  // Necesito escuchar cuando el usuario pulse Acceder
  formulario.addEventListener("submit", (evento) => {

    // Evito que la página se recargue
    evento.preventDefault();

    // Cojo lo que escribió el usuario
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Compruebo los datos
    const resultado = validarLogin(email, password);

    // Si el login es correcto
    if (resultado === "OK") {

      window.location.href = "dashboard.html";

    } else {

      // Muestro el error
      mensajeError.textContent = resultado;

    }

  });

}