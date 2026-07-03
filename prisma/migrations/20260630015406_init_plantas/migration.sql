-- CreateTable
CREATE TABLE "Muro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Planta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "riego" TEXT NOT NULL,
    "muroId" TEXT NOT NULL,
    CONSTRAINT "Planta_muroId_fkey" FOREIGN KEY ("muroId") REFERENCES "Muro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
