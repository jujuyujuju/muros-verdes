import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Cambia esto por el nombre exacto de tu planta de prueba

const result = await client.execute({
  sql: `DELETE FROM "Planta" WHERE "nombre" = ?`,
  args: ["Planta de prueba"],
});

console.log(`✅ Filas eliminadas: ${result.rowsAffected}`);