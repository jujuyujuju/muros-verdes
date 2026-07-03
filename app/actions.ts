"use server";

import { prisma } from "@/lib/prisma";

export async function poblarDatosIniciales() {
  try {
    // 1. Limpiamos datos de prueba anteriores
    await prisma.planta.deleteMany();
    await prisma.muro.deleteMany();

    // 2. Creamos el muro para tu proyecto de 2° B
    const muro = await prisma.muro.create({
      data: {
        nombre: "Muro Proyecto 2° B",
        ubicacion: "Institución",
      },
    });

    // 3. Insertamos el Galán de la noche y las Suculentas
    await prisma.planta.createMany({
      data: [
        { 
          nombre: "Galán de noche (Cestrum nocturnum)", 
          descripcion: "Planta con flores tubulares y un intenso aroma nocturno.", 
          riego: "Frecuente",
          enlaceWiki: "https://es.wikipedia.org/wiki/Cestrum_nocturnum",
          muroId: muro.id 
        },
        { 
          nombre: "Suculentas (Diversas especies)", 
          descripcion: "Plantas que almacenan agua en sus hojas, tallos o raíces.", 
          riego: "Escaso",
          enlaceWiki: "https://es.wikipedia.org/wiki/Suculenta",
          muroId: muro.id 
        },
      ],
    });

    console.log("Nuevas plantas cargadas exitosamente");
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}