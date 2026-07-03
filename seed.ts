// Asegúrate de usar la ruta relativa correcta desde donde está seed.ts
import { poblarDatosIniciales } from "./app/actions";

async function run() {
  await poblarDatosIniciales();
  console.log("¡Base de datos poblada!");
}

run();