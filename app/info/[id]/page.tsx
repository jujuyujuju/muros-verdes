import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ArrowLeft } from 'lucide-react';


export default async function DetallePlantaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const planta = await prisma.planta.findUnique({
    where: { id },
  });

  // Si no se encuentra la planta, mostramos un mensaje simple
  if (!planta) {
    return <div className="p-10 text-center">Planta no encontrada.</div>;
}

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 font-sans text-stone-800">
      <main className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
        <Link href="/info" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al catálogo
        </Link>

        <h1 className="text-3xl font-bold mb-2">{planta.nombre}</h1>
        <p className="text-stone-600 mb-6">{planta.descripcion}</p>
        
        <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 mb-6">
          <p className="font-semibold text-stone-900">Requerimiento de riego:</p>
          <p className="text-stone-600">{planta.riego}</p>
        </div>

        {planta.enlaceWiki && (
          <a 
            href={planta.enlaceWiki} 
            target="_blank" 
            className="block text-center bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Más información en Wikipedia
          </a>
        )}
      </main>
    </div>
  );
}