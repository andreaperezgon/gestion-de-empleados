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

if (typeof document !== "undefined") {

  const formulario = document.querySelector("#formulario-login");
  const mensajeError = document.querySelector("#mensaje-error");

  formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const resultado = validarLogin(email, password);

    if (resultado === "OK") {
      window.location.href = "dashboard.html";
    } else {
      mensajeError.textContent = resultado;
    }

  });

}