import { prisma } from '@/lib/prisma';
import { agregarComentario } from '@/app/actions';
import Link from 'next/link';
import { SquarePlus } from 'lucide-react';

export const dynamic = 'force-dynamic';
export default async function ComentariosPage() {
  const comentarios = await prisma.comentario.findMany({
    orderBy: { creadoEn: 'desc' },
  });

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 font-sans">
      <main className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
        <div className="flex w-full justify-center pb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
          >
            <SquarePlus className="h-5 w-5" />
            <span>Regresar al menú principal</span>
          </Link>
        </div>

        <h1 className="text-2xl text-stone-900 mb-6">Déjanos un comentario</h1>

        <form action={agregarComentario} className="space-y-4 mb-10">
          <div>
            <label className="block text-sm text-stone-900 mb-1">Tu grado</label>
            <input name="grado" required maxLength={50} className="w-full border rounded-lg p-2 text-stone-800" placeholder="Ej: 2° B" />
          </div>

          <div>
            <label className="block text-sm text-stone-900 mb-1">Comentario</label>
            <textarea name="mensaje" required maxLength={300} className="w-full border rounded-lg p-2 text-stone-800" />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium">
            Enviar comentario
          </button>
        </form>

        <h2 className="text-xl text-stone-800 mb-4 border-b border-stone-200 pb-2">
          Comentarios ({comentarios.length})
        </h2>

        <ul className="space-y-3">
          {comentarios.map((c: (typeof comentarios)[number]) => (
            <li key={c.id} className="bg-stone-800 p-4 rounded-lg border border-stone-100">
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold">{c.grado}</span>
                <span className="text-xs text-stone-800">
                  {c.creadoEn.toLocaleDateString('es', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-stone-700">{c.mensaje}</p>
            </li>
          ))}

          {comentarios.length === 0 && (
            <p className="text-center text-stone-500 py-10">Sé el primero en comentar.</p>
          )}
        </ul>
      </main>
    </div>
  );
}