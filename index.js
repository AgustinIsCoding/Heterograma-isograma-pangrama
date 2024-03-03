// Función para verificar si una cadena es un heterograma
function esHeterograma(cadena) {
  cadena = cadena.toLowerCase().replace(/\s/g, ''); // Convertir a minúsculas y eliminar espacios
  const caracteresUnicos = new Set(cadena);
  const esHeterograma = cadena.length === caracteresUnicos.size;
  console.log(esHeterograma ? "Es un heterograma." : "No es un heterograma.");
}

// Función para verificar si una cadena es un isograma
function esIsograma(cadena) {
  cadena = cadena.toLowerCase().replace(/\s/g, ''); // Convertir a minúsculas y eliminar espacios
  const caracteresVisitados = new Set();
  let esIsograma = true;

  for (let caracter of cadena) {
    if (caracteresVisitados.has(caracter)) {
      esIsograma = false;
      break;
    }
    caracteresVisitados.add(caracter);
  }

  console.log(esIsograma ? "Es un isograma." : "No es un isograma.");
}

// Función para verificar si una cadena es un pangrama
function esPangrama(cadena) {
  cadena = cadena.toLowerCase().replace(/\s/g, ''); // Convertir a minúsculas y eliminar espacios
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  const letrasFaltantes = Array.from(alfabeto).filter(letra => !cadena.includes(letra));

  const esPangrama = letrasFaltantes.length === 0;
  console.log(esPangrama ? "Es un pangrama." : "No es un pangrama.");
}

// Función para evaluar si la cantidad de letras coincide con la cantidad de palabras en una oración
function evaluarOracion(oracion) {
  const palabras = oracion.split(/\s+/); // Separar la oración en palabras
  const letras = oracion.replace(/\s+/g, ''); // Eliminar espacios para contar solo letras
  const coincide = letras.length === palabras.length;
  console.log(coincide ? "La cantidad de letras coincide con la cantidad de palabras." : "La cantidad de letras no coincide con la cantidad de palabras.");
}

// Ejemplos de uso
const heterogramaEjemplo = "Murciélago";
const isogramaEjemplo = "Dinosaurio";
const pangramaEjemplo = "Jovencita, ¿qué coche enorme de boxeo zíngaro prefieres?";
const oracionEjemplo = "Esto es una oración de ejemplo.";

esHeterograma(heterogramaEjemplo);
esIsograma(isogramaEjemplo);
esPangrama(pangramaEjemplo);
evaluarOracion(oracionEjemplo);
