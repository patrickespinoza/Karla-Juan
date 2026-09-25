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
    <section className="w-full overflow-hidden bg-[#F5EDE1] px-5 py-20 text-[#171512] sm:px-8 sm:py-28">
      <motion.div
        {...aparecer}
        className="relative mx-auto max-w-4xl border border-[#846B4F] bg-[#FFFEFB] px-6 py-16 text-center shadow-[0_18px_55px_rgba(70,55,37,0.12)] sm:px-12 sm:py-20"
      >
        <div
          className="pointer-events-none absolute inset-3 border border-[#A88C68] sm:inset-5"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#60482F] sm:text-xs">
            Nuestras familias
          </p>

          <h2
            className="mt-8 text-[clamp(2.8rem,9vw,5rem)] font-normal leading-[1.2] text-[#171512]"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            Con la bendición de
            <br />
            nuestros padres
          </h2>

          <div
            className="mx-auto my-10 h-px w-20 bg-[#60482F]"
            aria-hidden="true"
          />

          <div className="mx-auto grid max-w-2xl gap-10 md:grid-cols-2 md:gap-8">
            {/* Padres de Karla */}
            <motion.div
              {...aparecer}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="border-t border-[#A88C68] pt-7"
            >
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#60482F]">
                Padres de Karla
              </h3>

              <div
                className="mt-6 space-y-3 text-[1.55rem] leading-snug text-[#171512] sm:text-[1.7rem]"
                style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
              >
                <p>Juana Balderas Alfonso</p>
                <p>Roberto Pérez Orozco</p>
              </div>

              <p className="mt-3 text-base italic text-[#60482F]">
                En su querida memoria
              </p>
            </motion.div>

            {/* Padres de Juan Alejandro */}
            <motion.div
              {...aparecer}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-t border-[#A88C68] pt-7"
            >
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#60482F]">
                Padres de Juan Alejandro
              </h3>

              <div
                className="mt-6 space-y-3 text-[1.55rem] leading-snug text-[#171512] sm:text-[1.7rem]"
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