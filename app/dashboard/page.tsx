import React from 'react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Leaf, Droplets, Sun, Thermometer, SquarePlus } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      <nav className="flex items-center justify-between p-4 bg-white border-b border-stone-200 shadow-sm">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-pink-600" />
          <span className="text-xl font-bold text-stone-900">Muros Rositas </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-stone-500">Panel de Control</span>
          <UserButton/>
        </div>
      </nav>

      <main className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-900 mb-6">Resumen del Sistema</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* TARJETA 1: Humedad */}
          <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3 text-blue-600">
              <Droplets className="w-8 h-8" />
              <h2 className="text-lg font-semibold text-stone-700">Humedad Promedio</h2>
            </div>
            <p className="text-4xl font-light text-stone-900">65%</p>
            <p className="text-sm text-stone-500">Nivel óptimo para retención de agua</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3 text-orange-500">
              <Thermometer className="w-8 h-8" />
              <h2 className="text-lg font-semibold text-stone-700">Temperatura Interna</h2>
            </div>
            <p className="text-4xl font-light text-stone-900">18°C</p>
            <p className="text-sm text-stone-500">Masa térmica estable</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3 text-yellow-500">
              <Sun className="w-8 h-8" />
              <h2 className="text-lg font-semibold text-stone-700">Ganancia Solar</h2>
            </div>
            <p className="text-4xl font-light text-stone-900">Alta</p>
            <p className="text-sm text-stone-500">Orientación norte optimizada</p>
          </div>

      <main className="p-8 max-w-6xl mx-auto">
        
      
      </main>

      <div className="flex w-full justify-center pb-12">
        <Link
          href="/" 
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
        >
          <SquarePlus className="h-5 w-5" />

          <span>Regresar al menú principal</span>
        </Link>
      </div>

        </div>
      </main>
    </div>
  );
}