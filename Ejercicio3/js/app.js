var alumnos = [
  "Carlos Manuel",
  "Cesar Oziel",
  "Regina",
  "Diego Leonardo",
  "Andrea Carolina",
  "Mayela Mayte",
  "Eder Abraham",
  "Diego Alonso",
  "Naomi Micheelle",
  "Eder Abisai",
  "Regina", //Dariela
  "Carlos", //Manuel
  "Alejandro"
   ]

console.log(alumnos);

//eliminar el ultimo ele del arreglo
alumnos.pop();
console.log(alumnos);

//agregar alumno
alumnos.push("Edgar Aurelio");

//volver a imprimir
console.log(alumnos);

//elimina al inicio
alumnos.shift();

//agrega al inicio
alumnos.unshift("Axel Gabriel");
console.log(alumnos);

//elimina al inicio
alumnos.shift();
console.log(alumnos);

//indices de los alumnos en la lista de 0 a n
alumnos[4]="Carlos Manuel";
console.log(alumnos);

alumnos.indexOf("Regina");
console.log(alumnos.indexOf("Regina"));

console.log(alumnos.indexOf("Eder Abisai"));
console.log(alumnos.includes("Alejandro"));

//mismo pero con for
console.log(alumnos.find(nombre => nombre =="Regina"));
for (var i = 0; i < alumnos.length; i++) {
  if (alumnos[i] == "Regina") {
    console.log(alumnos[i]);
    break;
  }
}
//mismo pero con for
console.log(alumnos.findIndex(nombre => nombre =="Regina"));
for (var j = 0; j < alumnos.length; j++) {
  if (alumnos[j] == "Regina") {
    console.log(j);
    break;
  }
}


// lista en el html antes de la busqueda de carcateres o palabras
function mostrarLista(lista) {
  const ul = document.getElementById("listaAlumnos");
  ul.innerHTML = ""; // limpiar lista antes de volver a mostrar

  lista.forEach(alumno => {
    const li = document.createElement("li");
    li.textContent = alumno;
    ul.appendChild(li);
  });
}

// función para filtrar alumnos
function buscarAlumno() {
  const input = document.getElementById("filtroAlumno").value.toLowerCase();
  const filtrados = alumnos.filter(nombre => nombre.toLowerCase().includes(input));
  mostrarLista(filtrados);
}

// mostrar toda la lista al cargar la página
mostrarLista(alumnos);
