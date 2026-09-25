import React from "react";
import { motion } from "framer-motion";

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

const Novios = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F8F3EA] px-5 py-20 text-[#302C27] sm:px-8 sm:py-28">
      <motion.div
        {...aparecer}
        className="relative mx-auto max-w-4xl border border-[#D8C7AD] bg-[#FFFCF7] px-6 py-16 text-center shadow-[0_18px_55px_rgba(70,55,37,0.07)] sm:px-12 sm:py-20"
      >
        <div
          className="pointer-events-none absolute inset-3 border border-[#E9DDCC] sm:inset-5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#806D55] sm:text-xs">
            Nuestras familias
          </p>

          <h2
            className="mt-5 text-[clamp(2.3rem,8vw,4rem)] leading-tight tracking-[-0.05em]"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            Con la bendición de
            <br />
            nuestros padres
          </h2>

          <div
            className="mx-auto my-10 h-px w-20 bg-[#BDA889]"
            aria-hidden="true"
          />

          <div className="mx-auto grid max-w-2xl gap-10 md:grid-cols-2 md:gap-8">
            {/* Padres de Karla */}
            <motion.div
              {...aparecer}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="border-t border-[#D8C7AD] pt-7"
            >
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#806D55]">
                Padres de Karla
              </h3>

              <div
                className="mt-6 space-y-3 text-[1.55rem] leading-snug sm:text-[1.7rem]"
                style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
              >
                <p>Juana Balderas Alfonso</p>
                <p>Roberto Pérez Orozco</p>
              </div>

              <p className="mt-3 text-base italic text-[#806D55]">
                En su querida memoria
              </p>
            </motion.div>

            {/* Padres de Juan Alejandro */}
            <motion.div
              {...aparecer}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-t border-[#D8C7AD] pt-7"
            >
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#806D55]">
                Padres de Juan Alejandro
              </h3>

              <div
                className="mt-6 space-y-3 text-[1.55rem] leading-snug sm:text-[1.7rem]"
                style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
              >
                <p>Rosa García Plata</p>
                <p>Cesáreo Santos López</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Novios;