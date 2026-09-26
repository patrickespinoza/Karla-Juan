import React from "react";

export default function Portada() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Fotografía */}
      <img
        src="/foto-original-cuadrada.jpg"
        alt="Karla Roset y Juan Alejandro"
        className="absolute inset-0 h-full w-full object-cover object-[30%_35%]"
      />

      {/* Contraste para los textos */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/65"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-5 pb-12 pt-12 text-center text-white sm:pb-16 sm:pt-16">
        {/* Textos superiores */}
        <div className="w-full max-w-4xl">
          <p className="font-playfair text-sm uppercase tracking-[0.35em] drop-shadow-lg sm:text-base">
            Nos casamos
          </p>

          <h1
            className="
              font-cursiveDancing
              mt-3
              text-5xl
              leading-[1.05]
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
              sm:text-7xl
              md:text-8xl
              lg:text-[7rem]
            "
          >
            <span className="block">Karla Roset</span>
            <span className="block text-[0.7em]">&</span>
            <span className="block">Juan Alejandro</span>
          </h1>
        </div>

        {/* Fecha inferior */}
        <div className="border-y border-white/80 px-5 py-3 backdrop-blur-[2px] sm:px-8">
          <p className="font-playfair text-lg font-medium uppercase tracking-[0.12em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-2xl sm:tracking-[0.2em]">
            05 · Diciembre · 2026
          </p>
        </div>
      </div>
    </section>
  );
}