const listaEmpleados = document.querySelector("#lista-empleados");
const totalEmpleados = document.querySelector("#total-empleados");

async function mostrarEmpleados() {

    const respuesta = await fetch("./empleados.json");

    const empleados = await respuesta.json();

    totalEmpleados.textContent = empleados.length;

    empleados.forEach((empleado) => {

        listaEmpleados.innerHTML += `
        
            <article class="empleado-card">

                <img
                    src="${empleado.foto}"
                    alt="${empleado.nombre}"
                >

                <h3>${empleado.nombre}</h3>

                <p>${empleado.puesto}</p>

            </article>

        `;

    });

}

mostrarEmpleados();