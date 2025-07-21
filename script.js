const ramosPorSemestre = {
  "Semestre 1": [
    { id: 1, nombre: "Bases científicas de la medicina I", creditos: 10, prerequisitos: [] },
    { id: 2, nombre: "Biomatemáticas", creditos: 4, prerequisitos: [] },
    { id: 3, nombre: "Antropología", creditos: 4, prerequisitos: [] },
    { id: 4, nombre: "Introducción a la medicina", creditos: 6, prerequisitos: [] },
    { id: 5, nombre: "Inglés técnico para la medicina I", creditos: 3, prerequisitos: [] },
    { id: 6, nombre: "Electivo de desarrollo del pensamiento", creditos: 3, prerequisitos: [] }
  ],
  "Semestre 2": [
    { id: 7, nombre: "Bases científicas de la medicina II", creditos: 8, prerequisitos: [1] },
    { id: 8, nombre: "Integrado de morfología I", creditos: 10, prerequisitos: [1] },
    { id: 9, nombre: "Psicología de la salud", creditos: 3, prerequisitos: [3] },
    { id: 10, nombre: "Recursos básicos de atención en salud", creditos: 3, prerequisitos: [] },
    { id: 11, nombre: "Inglés técnico para la medicina II", creditos: 3, prerequisitos: [5] },
    { id: 12, nombre: "Electivo de comunicación I", creditos: 3, prerequisitos: [] }
  ],
  "Semestre 3": [
    { id: 13, nombre: "Bases científicas de la medicina III", creditos: 8, prerequisitos: [7, 8] },
    { id: 14, nombre: "Genética médica", creditos: 3, prerequisitos: [7] },
    { id: 15, nombre: "Integrado de morfología II", creditos: 9, prerequisitos: [8] },
    { id: 16, nombre: "Microbiología", creditos: 3, prerequisitos: [7, 8] },
    { id: 17, nombre: "Salud pública y epidemiología", creditos: 4, prerequisitos: [2] },
    { id: 18, nombre: "Electivo de comunicación II", creditos: 3, prerequisitos: [] }
  ],
  "Semestre 4": [
    { id: 19, nombre: "Bases científicas de la medicina IV", creditos: 6, prerequisitos: [13, 15] },
    { id: 20, nombre: "Neurociencias", creditos: 4, prerequisitos: [13, 15] },
    { id: 21, nombre: "Patología y anatomía patológica", creditos: 4, prerequisitos: [13, 15] },
    { id: 22, nombre: "Microbiología aplicada a la clínica", creditos: 4, prerequisitos: [16] },
    { id: 23, nombre: "Salud comunitaria y familiar I", creditos: 4, prerequisitos: [9, 17] },
    { id: 24, nombre: "Fundamentos del diagnóstico clínico", creditos: 8, prerequisitos: [10, 13, 15] }
  ],
  "Semestre 5": [
    { id: 25, nombre: "Fisiopatología", creditos: 4, prerequisitos: [19, 21] },
    { id: 26, nombre: "Farmacología general", creditos: 4, prerequisitos: [19, 22] },
    { id: 27, nombre: "Metodología de la investigación y Bioestadística", creditos: 4, prerequisitos: [17] },
    { id: 28, nombre: "Salud comunitaria y familiar II", creditos: 4, prerequisitos: [23] },
    { id: 29, nombre: "Medicina interna", creditos: 15, prerequisitos: [19, 20, 21, 22, 24] }
  ],
  "Semestre 6": [
    { id: 30, nombre: "Farmacología aplicada a la clínica", creditos: 6, prerequisitos: [26] },
    { id: 31, nombre: "Medicina basada en la evidencia", creditos: 5, prerequisitos: [27] },
    { id: 32, nombre: "Medicina interna", creditos: 15, prerequisitos: [19, 20, 21, 22, 24] },
    { id: 33, nombre: "Electivo de ética", creditos: 3, prerequisitos: [] }
  ],
  "Semestre 7": [
    { id: 34, nombre: "Salud comunitaria y familiar III", creditos: 6, prerequisitos: [28] },
    { id: 35, nombre: "Especialidades quirúrgicas", creditos: 17, prerequisitos: [25, 29, 30] },
    { id: 36, nombre: "Geriatría", creditos: 4, prerequisitos: [25, 29, 30] },
    { id: 37, nombre: "Bioética", creditos: 3, prerequisitos: [] }
  ],
  "Semestre 8": [
    { id: 38, nombre: "Salud comunitaria y familiar IV", creditos: 6, prerequisitos: [34] },
    { id: 39, nombre: "Pediatría y cirugía infantil", creditos: 16, prerequisitos: [25, 29, 30] },
    { id: 40, nombre: "Oncología y cuidados paliativos", creditos: 4, prerequisitos: [35, 36] },
    { id: 41, nombre: "Razonamiento e integración clínica", creditos: 4, prerequisitos: [34, 35, 36, 37] }
  ],
  "Semestre 9": [
    { id: 42, nombre: "Ginecología y obstetricia", creditos: 16, prerequisitos: [35, 39, 40] },
    { id: 43, nombre: "Salud mental, psicopatología y psiquiatría", creditos: 8, prerequisitos: [41] },
    { id: 44, nombre: "Medicina legal", creditos: 3, prerequisitos: [37] },
    { id: 45, nombre: "Electivo de desarrollo personal", creditos: 3, prerequisitos: [] }
  ],
  "Semestre 10": [
    { id: 46, nombre: "Gestión y administración en salud", creditos: 4, prerequisitos: [38] },
    { id: 47, nombre: "Medicina integrada y de urgencias", creditos: 15, prerequisitos: [35, 39, 40] },
    { id: 48, nombre: "Subespecialidades médicas", creditos: 8, prerequisitos: [42, 43] },
    { id: 49, nombre: "Electivo de responsabilidad social", creditos: 3, prerequisitos: [] }
  ],
  "Semestre 11 y 12": [
    { id: 50, nombre: "Internado de medicina interna", creditos: 32, prerequisitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49] },
    { id: 51, nombre: "Internado de especialidades quirúrgicas", creditos: 20, prerequisitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49] },
    { id: 52, nombre: "Internado de ginecología y obstetricia", creditos: 20, prerequisitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49] },
    { id: 53, nombre: "Internado electivo I", creditos: 9, prerequisitos: [] }
  ],
 "Semestres 13 y 14": [
  { id: 54, nombre: "Internado de medicina rural", creditos: 18, prerequisitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49] },
  { id: 55, nombre: "Internado de urgencia", creditos: 18, prerequisitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49] },
  { id: 56, nombre: "Internado de Pediatría y Cirugía Infantil", creditos: 24, prerequisitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49] },
  { id: 57, nombre: "Internado Electivo II", creditos: 9, prerequisitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49] }
],
};

const malla = document.getElementById("malla");

function crearTitulo(semestre) {
  const bloque = document.createElement("div");
  bloque.classList.add("bloque-semestre");

  const h2 = document.createElement("h2");
  h2.innerText = semestre;
  bloque.appendChild(h2);

  malla.appendChild(bloque);
  return bloque;
}

function crearRamo(ramo, contenedor) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.dataset.id = ramo.id;

  // Nombre del ramo
  const nombre = document.createElement("div");
  nombre.innerText = ramo.nombre;
  div.appendChild(nombre);

  // Créditos
  if (ramo.creditos !== undefined) {
    const creditos = document.createElement("div");
    creditos.classList.add("creditos");
    creditos.innerText = `Créditos: ${ramo.creditos}`;
    div.appendChild(creditos);
  }

  div.onclick = () => aprobarRamo(ramo.id);
  contenedor.appendChild(div);
}

function cargarMalla() {
  malla.innerHTML = "";
  for (const [semestre, ramos] of Object.entries(ramosPorSemestre)) {
    const contenedor = crearTitulo(semestre);
    ramos.forEach(ramo => crearRamo(ramo, contenedor));
  }
  cargarProgreso();
  actualizarRamos();
}

function aprobarRamo(id) {
  const div = document.querySelector(`.ramo[data-id='${id}']`);
  if (!div.classList.contains("activo")) return;
  div.classList.add("aprobado");
  guardarProgreso();
  actualizarRamos();
}

function actualizarRamos() {
  const todosLosRamos = Object.values(ramosPorSemestre).flat();
  let aprobadosCount = 0;

  todosLosRamos.forEach(ramo => {
    const div = document.querySelector(`.ramo[data-id='${ramo.id}']`);
    const aprobado = div.classList.contains("aprobado");

    const requisitosCumplidos = ramo.prerequisitos.every(req => {
      const reqDiv = document.querySelector(`.ramo[data-id='${req}']`);
      return reqDiv && reqDiv.classList.contains("aprobado");
    });

    if (!aprobado && requisitosCumplidos) {
      div.classList.add("activo");
      div.style.cursor = "pointer";
    } else if (!aprobado) {
      div.classList.remove("activo");
      div.style.cursor = "not-allowed";
    }

    if (aprobado) aprobadosCount++;
  });

  const progreso = Math.round((aprobadosCount / todosLosRamos.length) * 100);
  document.getElementById("barra-progreso").style.width = progreso + "%";
  const textoPorcentaje = document.getElementById("porcentaje-texto");
  if (textoPorcentaje) textoPorcentaje.innerText = `${progreso}%`;
}

function reiniciarMalla() {
  document.querySelectorAll(".ramo").forEach(div => {
    div.classList.remove("aprobado");
  });
  localStorage.removeItem("ramosAprobados");
  actualizarRamos();
}

function guardarProgreso() {
  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado")).map(div => div.dataset.id);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

function cargarProgreso() {
  const data = localStorage.getItem("ramosAprobados");
  if (!data) return;
  const aprobados = JSON.parse(data);
  aprobados.forEach(id => {
    const div = document.querySelector(`.ramo[data-id='${id}']`);
    if (div) div.classList.add("aprobado");
  });
}

function alternarModo() {
  document.body.classList.toggle("oscuro");
  localStorage.setItem("modoOscuro", document.body.classList.contains("oscuro"));
}

window.onload = () => {
  cargarMalla();
  if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("oscuro");
  }
};
