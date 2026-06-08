// Necesito comprobar si el login es correcto
export async function validarLogin(email, password) {

  // Compruebo que los campos no estén vacíos
  if (email === "" || password === "") {
    return "Debes rellenar todos los campos";
  }

  // Leo el archivo empleados.json
  const respuesta = await fetch("./empleados.json");

  // Convierto la respuesta en datos de JavaScript
  const empleados = await respuesta.json();

  // Busco si existe un empleado con ese email y esa contraseña
  const empleadoEncontrado = empleados.find((empleado) => {
    return empleado.usuario === email && empleado.password === password;
  });

  // Si lo encuentra, el login es correcto
  if (empleadoEncontrado) {
    return "OK";
  }

  // Si no lo encuentra, los datos están mal
  return "Email o contraseña incorrectos";
}

// Esta parte solo se ejecuta en el navegador
if (typeof document !== "undefined") {

  const formulario = document.querySelector("#formulario-login");
  const mensajeError = document.querySelector("#mensaje-error");

  formulario.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const resultado = await validarLogin(email, password);

    if (resultado === "OK") {
      window.location.href = "dashboard.html";
    } else {
      mensajeError.textContent = resultado;
    }

  });

}