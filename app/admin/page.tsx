import { prisma } from '@/lib/prisma';
import { agregarPlanta } from '@/app/actions';

export default async function AdminPage() {
  const muro = await prisma.muro.findFirst();
  const plantas = await prisma.planta.findMany();

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 text-stone-800">
      <main className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-stone-900 shadow-sm">
        <h1 className="text-2xl text-black mb-6">Panel de administración</h1>

        <form action={agregarPlanta} className="space-y-4 mb-10">
          <input type="hidden" name="muroId" value={muro?.id} />

          <div>
            <label className="block text-sm text-stone-900 mb-1">Nombre</label>
            <input name="nombre" required className="w-full border rounded-lg p-2" />
          </div>

          <div>
            <label className="block text-sm text-stone-900 mb-1">Descripción</label>
            <textarea name="descripcion" required className="w-full border rounded-lg p-2" />
          </div>

          <div>
            <label className="block text-sm text-stone-900 mb-1">Riego</label>
            <input name="riego" required className="w-full border rounded-lg p-2" />
          </div>

          <div>
            <label className="block text-sm text-stone-900 mb-1">Enlace de Wikipedia</label>
            <input name="enlaceWiki" type="url" className="w-full border rounded-lg p-2" />
          </div>

          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg ">
            Agregar planta
          </button>
        </form>

        <h2 className="text-xl text-stone-950 mb-4 border-b border-green-500 pb-2">Plantas actuales</h2>
        <ul className="space-y-2">
          {plantas.map((planta: (typeof plantas)[number]) => (
            <li key={planta.id} className="bg-stone-200 p-3 rounded-lg border border-stone-100">
              {planta.nombre}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}