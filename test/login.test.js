import { describe, expect, test } from "vitest";
import { validarLogin } from "../src/js/login.js";

describe("Login", () => {

  test("debería devolver error si faltan campos", () => {

    const resultado = validarLogin("", "");

    expect(resultado).toBe("Debes rellenar todos los campos");

  });

  test("debería permitir acceso con datos correctos", () => {

    const resultado = validarLogin(
      "andrea@bastettattoo.com",
      "1234"
    );

    expect(resultado).toBe("OK");

  });

  test("debería devolver error con datos incorrectos", () => {

    const resultado = validarLogin(
      "hola@gmail.com",
      "9999"
    );

    expect(resultado).toBe("Email o contraseña incorrectos");

  });

});