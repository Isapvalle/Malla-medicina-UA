const ramos = [
  { id: 1, nombre: "Bases científicas de la medicina I", prerequisitos: [] },
  { id: 2, nombre: "Biomatemáticas", prerequisitos: [] },
  { id: 3, nombre: "Antropología", prerequisitos: [] },
  { id: 4, nombre: "Introducción a la medicina", prerequisitos: [] },
  { id: 5, nombre: "Inglés técnico para la medicina I", prerequisitos: [] },
  { id: 6, nombre: "Electivo de desarrollo del pensamiento", prerequisitos: [] },
  { id: 7, nombre: "Bases científicas de la medicina II", prerequisitos: [1] },
  { id: 8, nombre: "Integrado de morfología I", prerequisitos: [] },
  { id: 9, nombre: "Psicología de la salud", prerequisitos: [] },
  { id: 10, nombre: "Recursos básicos de atención en salud", prerequisitos: [] },
  { id: 11, nombre: "Inglés técnico para la medicina II", prerequisitos: [5] },
  { id: 12, nombre: "Electivo de comunicación I", prerequisitos: [] },
  { id: 13, nombre: "Bases científicas de la medicina III", prerequisitos: [7] },
  { id: 14, nombre: "Genética médica", prerequisitos: [] },
  { id: 15, nombre: "Integrado de morfología II", prerequisitos: [8] },
  { id: 16, nombre: "Microbiología", prerequisitos: [] },
  { id: 17, nombre: "Salud pública y epidemiología", prerequisitos: [] },
  { id: 18, nombre: "Electivo de comunicación II", prerequisitos: [12] },
  { id: 19, nombre: "Bases científicas de la medicina IV", prerequisitos: [13] },
  { id: 20, nombre: "Neurociencias", prerequisitos: [] },
  { id: 21, nombre: "Patología y anatomía patológica", prerequisitos: [15] },
  { id: 22, nombre: "Microbiología aplicada a la clínica", prerequisitos: [16] },
  { id: 23, nombre: "Salud comunitaria y familiar I", prerequisitos: [] },
  { id: 24, nombre: "Fundamentos del diagnóstico clínico", prerequisitos: [] },
  { id: 25, nombre: "Fisiopatología", prerequisitos: [19, 21] },
  { id: 26, nombre: "Farmacología general", prerequisitos: [] },
  { id: 27, nombre: "Metodología de la investigación y Bioestadística", prerequisitos: [17] },
  { id: 28, nombre: "Salud comunitaria y familiar II", prerequisitos: [23] },
  { id: 29, nombre: "Medicina interna I", prerequisitos: [24] },
  { id: 30, nombre: "Farmacología aplicada a la clínica", prerequisitos: [26] },
  { id: 31, nombre: "Medicina basada en la evidencia", prerequisitos: [27] },
  { id: 32, nombre: "Medicina interna II", prerequisitos: [29] },
  { id: 33, nombre: "Electivo de ética", prerequisitos: [] },
  { id: 34, nombre: "Salud comunitaria y familiar III", prerequisitos: [28] },
  { id: 35, nombre: "Especialidades quirúrgicas", prerequisitos: [] },
  { id: 36, nombre: "Geriatría", prerequisitos: [32] },
  { id: 37, nombre: "Bioética", prerequisitos: [33] },
  { id: 38, nombre: "Salud comunitaria y familiar IV", prerequisitos: [34] },
  { id: 39, nombre: "Pediatría y cirugía infantil", prerequisitos: [32, 35] },
  { id: 40, nombre: "Oncología y cuidados paliativos", prerequisitos: [36] },
  { id: 41, nombre: "Razonamiento e integración clínica", prerequisitos: [] },
  { id: 42, nombre: "Ginecología y obstetricia", prerequisitos: [32] },
  { id: 43, nombre: "Salud mental, psicopatología y psiquiatría", prerequisitos: [] },
  { id: 44, nombre: "Medicina legal", prerequisitos: [] },
  { id: 45, nombre: "Electivo de desarrollo personal", prerequisitos: [] },
  { id: 46, nombre: "Gestión y administración en salud", prerequisitos: [] },
  { id: 47, nombre: "Medicina integrada y de urgencias", prerequisitos: [] },
  { id: 48, nombre: "Subespecialidades médicas", prerequisitos: [] },
  { id: 49, nombre: "Electivo de responsabilidad social", prerequisitos: [] },
  { id: 50, nombre: "Internado de medicina interna", prerequisitos: [32] },
  { id: 51, nombre: "Internado de especialidades quirúrgicas", prerequisitos: [35] },
  { id: 52, nombre: "Internado de ginecología y obstetricia", prerequisitos: [42] },
  { id: 53, nombre: "Internado electivo I", prerequisitos: [] },
  { id: 54, nombre: "Internado de medicina interna (II)", prerequisitos: [50] },
  { id: 55, nombre: "Internado de especialidades quirúrgicas (II)", prerequisitos: [51] },
  { id: 56, nombre: "Internado de ginecología y obstetricia (II)", prerequisitos: [52] },
  { id: 57, nombre: "Internado electivo II", prerequisitos: [53] }
];

const malla = document.getElementById("malla");

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.innerText = ramo.nombre;
  div.dataset.id = ramo.id;
  div.onclick = () => aprobarRamo(ramo.id);
  malla.appendChild(div);
}

function cargarMalla() {
  malla.innerHTML = "";
  ramos.forEach(ramo => crearRamo(ramo));
  actualizarRamos();
}

function aprobarRamo(id) {
  const div = document.querySelector(`.ramo[data-id='${id}']`);
  if (!div.classList.contains("activo")) return;
  div.classList.add("aprobado");
  actualizarRamos();
}

function actualizarRamos() {
  ramos.forEach(ramo => {
    const div = document.querySelector(`.ramo[data-id='${ramo.id}']`);
    const aprobado = div.classList.contains("aprobado");
    const requisitosCumplidos = ramo.prerequisitos.every(req => {
      const reqDiv = document.querySelector(`.ramo[data-id='${req}']`);
      return reqDiv.classList.contains("aprobado");
    });
    if (!aprobado && requisitosCumplidos) {
      div.classList.add("activo");
      div.style.cursor = "pointer";
    } else if (!aprobado) {
      div.classList.remove("activo");
      div.style.cursor = "not-allowed";
    }
  });
}

function reiniciarMalla() {
  document.querySelectorAll(".ramo").forEach(div => {
    div.classList.remove("aprobado");
  });
  actualizarRamos();
}

window.onload = cargarMalla;
