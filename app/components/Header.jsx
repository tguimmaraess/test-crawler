"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 shadow-md" aria-hidden="true"></div>
            <span className="text-xl font-bold tracking-tight">Orimatla</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Sobre</a>
            <a href="#comunidade" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Comunidade</a>
            <a href="#download" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Download</a>
            <a
              href="https://orimatla.gitbook.io/orimatla-whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Whitepaper
            </a>
            <a
              href="https://apps.apple.com/us/app/orimatla/id6738931149"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Baixar o App
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            aria-label="Abrir menu"
            aria-expanded={open ? "true" : "false"}
          >
            <span className="sr-only">Abrir menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-3">
            <a onClick={() => setOpen(false)} href="#sobre" className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Sobre</a>
            <a onClick={() => setOpen(false)} href="#comunidade" className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Comunidade</a>
            <a onClick={() => setOpen(false)} href="#download" className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Download</a>
            <a
              onClick={() => setOpen(false)}
              href="https://orimatla.gitbook.io/orimatla-whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Whitepaper
            </a>
            <a
              href="https://apps.apple.com/us/app/orimatla/id6738931149"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Baixar o App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

