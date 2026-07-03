"use client";

import React from 'react';
import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/nextjs';
import { Sprout, UserKey, SquarePlus, Wind, Thermometer, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <span className="text-stone-500">Cargando...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      
      {/* Navegación */}
      <nav className="flex items-center justify-between p-4 bg-white border-b border-stone-100">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-stone-900 flex items-center gap-2"> 
            <Sprout className='w-6 h-6 text-green-600'/>
            Muros Verdes
          </span>
        </div>

        <div className="flex items-center gap-4">
          {!isSignedIn ? (
            <>
              <div role='button' className="flex items-center gap-1">
                <UserKey className="w-4 h-4" />
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-stone-600 hover:text-stone-900 transition cursor-pointer">
                    Iniciar Sesión
                  </button>
                </SignInButton>
              </div>
              <SignUpButton mode="modal">
                <button className="text-sm font-medium bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition cursor-pointer">
                  Registrarse
                </button>
              </SignUpButton>
            </>
          ) : (
            <>
              <span className="text-sm font-medium text-stone-600">Panel Activo</span>
              <UserButton />
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-stone-900 mb-6">Proyecto Muros Verdes</h1>
        <p className="text-stone-600 max-w-lg text-lg leading-relaxed">
          Bienvenido al proyecto de muros verdes, una iniciativa sostenible de los alumnitos del 2° B para transformar nuestro entorno escolar.
        </p>

        {/* Grid de Beneficios (Para rellenar el vacío) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12 max-w-4xl w-full">
          {[
            { icon: Wind, title: "Aire Puro", desc: "Filtramos contaminantes mejorando la oxigenación." },
            { icon: Thermometer, title: "Regulación Térmica", desc: "Reducción natural de temperatura en aulas." },
            { icon: FlaskConical, title: "Investigación", desc: "Proyecto escolar ??? 2026." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-green-300 transition-colors">
              <item.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-sm text-stone-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/dashboard" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-sm">
            <SquarePlus className="h-5 w-5" />
            <span>Ir al menú dinámico</span>
          </a>
          <Link href="/info" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-sm">
            <SquarePlus className="h-5 w-5" />
            <span>Ir a la información</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-stone-400 text-xs uppercase tracking-widest border-t border-stone-200">
        © 2026 Proyecto Muros Verdes - Alumnos 2° B
      </footer>

    </div>
  );
}