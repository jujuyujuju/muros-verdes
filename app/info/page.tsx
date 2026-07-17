import React from 'react';
import Link from 'next/link';
import { SquarePlus } from 'lucide-react';
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';
export default async function InfoMuroPage() {
  // Solicitamos a la base de datos la lista completa de plantas
  const plantas = await prisma.planta.findMany();
  

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 font-sans text-stone-800">
      <main className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
        
        {/* BOTÓN DE REGRESO */}
        <div className="flex w-full justify-center pb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
          >
            <SquarePlus className="h-5 w-5" />
            <span>Regresar al menú principal</span>
          </Link>
        </div>

        {/* PRESENTACIÓN */}
        <h1 className="text-3xl font-bold mb-4">Proyecto Muros Verdes</h1>
        <p className="text-stone-600 mb-8 leading-relaxed">
          Este proyecto busca mejorar la calidad del aire y la temperatura ambiental en nuestra institución a través de muros vivos sostenibles, diseñados por los alumnitos del 2° B.
        </p>

        {/* LISTA DE PLANTAS DINÁMICA */}
        <h2 className="text-xl font-semibold mb-6 border-b border-stone-200 pb-2">Nuestras Especies</h2>
        <ul className="space-y-4">
          {/* Usamos .map() para recorrer el arreglo de plantas que nos devolvió la base de datos */}
         {plantas.map((planta: (typeof plantas)[number]) => (
            <li key={planta.id} className="bg-stone-50 p-4 rounded-lg border border-stone-100 hover:bg-stone-300 transition-colors">
              {/* Si la planta tiene enlaceWiki, lo usa. Si no, usa "#" como precaución */}
            <Link href={`/info/${planta.id}`}>
              <span className="font-bold">Especie:</span> {planta.nombre}
            </Link>
            </li>
          ))}
          {plantas.length === 0 && (
            <p className="text-center text-stone-500 py-10">
             Aún no tenemos especies registradas en el muro.
            </p>
)}
        </ul>

      </main>
    </div>
  );
}