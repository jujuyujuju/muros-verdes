import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// 1. Creamos las tablas (misma estructura que tu schema.prisma)
await client.execute(`
  CREATE TABLE IF NOT EXISTS "Muro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL
  )
`);

await client.execute(`
  CREATE TABLE IF NOT EXISTS "Planta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "riego" TEXT NOT NULL,
    "enlaceWiki" TEXT,
    "muroId" TEXT NOT NULL,
    FOREIGN KEY ("muroId") REFERENCES "Muro"("id")
  )
`);

console.log("✅ Tablas creadas");

// 2. Insertamos tus datos actuales
await client.execute({
  sql: `INSERT OR IGNORE INTO "Muro" ("id", "nombre", "ubicacion") VALUES (?, ?, ?)`,
  args: ["muro-1", "Muro Verde 2° B", "Rampa por donde los niñitos y alumnitos salen del colegio"],
});

await client.execute({
  sql: `INSERT OR IGNORE INTO "Planta" ("id", "nombre", "descripcion", "riego", "enlaceWiki", "muroId") VALUES (?, ?, ?, ?, ?, ?)`,
  args: ["planta-1", "galán de la noche", "arbusto perennifolio de la familia de las solanáceas, originario de las regiones tropicales de América", "3 veces por semana", "https://es.wikipedia.org/wiki/Cestrum_nocturnum", "muro-1"],
});

await client.execute({
  sql: `INSERT OR IGNORE INTO "Planta" ("id", "nombre", "descripcion", "riego", "enlaceWiki", "muroId") VALUES (?, ?, ?, ?, ?, ?)`,
  args: ["planta-2", "suculentas", "grupo diverso de plantas adaptadas a climas áridos", "Cada 2-3 semanas", "https://es.wikipedia.org/wiki/Suculenta", "muro-1"],
});
