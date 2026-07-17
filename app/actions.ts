"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache';

export async function poblarDatosIniciales() {
  try {
   
    await prisma.planta.deleteMany();
    await prisma.muro.deleteMany();

    
    const muro = await prisma.muro.create({
      data: {
        nombre: "Muro Proyecto 2° B",
        ubicacion: "Institución",
      },
    });

   
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
export async function agregarComentario(formData: FormData) {
  const grado = formData.get('grado') as string;
  const mensaje = formData.get('mensaje') as string;

  await prisma.comentario.create({
    data: { grado, mensaje },
  });

  revalidatePath('/comentarios');
}

export async function agregarPlanta(formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const descripcion = formData.get('descripcion') as string;
  const riego = formData.get('riego') as string;
  const enlaceWiki = formData.get('enlaceWiki') as string;
  const muroId = formData.get('muroId') as string;

  await prisma.planta.create({
    data: { nombre, descripcion, riego, enlaceWiki, muroId },
  });
  
  revalidatePath('/info');
  revalidatePath('/admin');
   revalidatePath('/comentarios');
}