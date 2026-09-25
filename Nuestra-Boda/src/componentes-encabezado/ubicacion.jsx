import React from "react";
import { motion } from "framer-motion";
import { Church, MapPin, PartyPopper } from "lucide-react";

const ubicaciones = [
  {
    tipo: "Ceremonia religiosa",
    hora: "1:00 p. m.",
    lugar: "Iglesia Sagrado Corazón de Jesús",
    direccion:
      "Plan de Tuxtepec 798A, 5 de Mayo, 68373 San Juan Bautista Tuxtepec, Oax.",
    enlace: "https://maps.app.goo.gl/1CWoybWnFPsyMM8b7",
    icono: Church,
  },
  {
    tipo: "Recepción",
    hora: "2:00 p. m.",
    lugar: "Terraza La Canuta",
    direccion: "C. 10 de Abril, 68446 San Bartolo, Oax.",
    enlace: "https://maps.app.goo.gl/ZFAqWsymHLeVSDBq6",
    icono: PartyPopper,
  },
];

const Celebracion = () => {
  return (
    <section className="w-full overflow-hidden bg-[#FFFEFB] px-5 py-20 text-[#171512] sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[11px] uppercase tracking-[0.28em] text-[#60482F] sm:text-xs"
        >
          Sábado 05 de diciembre de 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-[clamp(2.6rem,9vw,4.5rem)] leading-tight tracking-[-0.05em] text-[#171512]"
          style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
        >
          Dónde celebraremos
        </motion.h2>

        <div
          className="mx-auto my-10 h-px w-20 bg-[#60482F]"
          aria-hidden="true"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ubicaciones.map((ubicacion, index) => {
            const Icono = ubicacion.icono;

            return (
              <motion.article
                key={ubicacion.tipo}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative flex h-full flex-col items-center border border-[#846B4F] bg-[#F5EDE1] px-6 py-12 shadow-[0_12px_35px_rgba(70,55,37,0.08)] sm:px-10"
              >
                <div
                  className="pointer-events-none absolute inset-3 border border-[#A88C68]"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex h-full w-full flex-col items-center">
                  <Icono
                    size={30}
                    strokeWidth={1.6}
                    className="text-[#60482F]"
                    aria-hidden="true"
                  />

                  <p className="mt-7 text-[11px] uppercase tracking-[0.22em] text-[#60482F]">
                    {ubicacion.tipo}
                  </p>

                  <p
                    className="mt-3 text-3xl text-[#171512]"
                    style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                  >
                    {ubicacion.hora}
                  </p>

                  <div
                    className="my-6 h-px w-12 bg-[#60482F]"
                    aria-hidden="true"
                  />

                  <h3
                    className="text-2xl leading-snug text-[#171512] sm:text-[1.8rem]"
                    style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                  >
                    {ubicacion.lugar}
                  </h3>

                  <p
                    className="mt-4 max-w-xs text-lg leading-relaxed text-[#302C27]"
                    style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
                  >
                    {ubicacion.direccion}
                  </p>

                  <a
                    href={ubicacion.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 border border-[#60482F] bg-[#60482F] px-6 py-3 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#44311F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60482F]"
                    aria-label={`Ver ubicación de ${ubicacion.lugar} en Google Maps`}
                  >
                    <MapPin size={15} strokeWidth={1.7} />
                    Ver ubicación
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Celebracion;