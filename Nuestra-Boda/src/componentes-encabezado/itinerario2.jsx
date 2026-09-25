import React from "react";
import { motion } from "framer-motion";

const eventos = [
  {
    hora: "13:00 h",
    titulo: "Ceremonia religiosa",
    lugar: "Parroquia El Sagrado Corazón de Jesús",
    descripcion:
      "Comenzamos este día dando gracias por nuestra familia y por las bendiciones que nos han permitido llegar hasta aquí.",
  },
  {
    hora: "14:00 h",
    titulo: "Recepción",
    lugar: "La Canuta Terraza",
    descripcion:
      "Abrimos las puertas para recibirte y comenzar juntos esta celebración.",
  },
  {
    hora: "15:00 h",
    titulo: "Comida & convivencia",
    descripcion:
      "Una mesa para compartir, conversar y disfrutar de los sabores que hemos preparado con cariño.",
  },
  {
    hora: "16:00 h",
    titulo: "Momentos para recordar",
    descripcion:
      "Fotografías con nuestra pequeña Alessa, animación para los niños y el tradicional bolo del padrino.",
  },
  {
    hora: "17:00 h",
    titulo: "¡5 años de Imanol! 🎂",
    descripcion:
      "Celebramos la vida de nuestro pequeño con piñatas, juegos y mucha diversión para grandes y pequeños.",
  },
  {
    hora: "19:00 h",
    titulo: "La hora de los novios 🥂",
    descripcion:
      "Es momento de celebrar el amor. Baile, brindis, música y alegría para compartir contigo esta nueva etapa de nuestra historia.",
  },
];

const animacion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

const Itinerario2 = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F5EDE1] px-5 py-20 text-[#171512] sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.header
          {...animacion}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#60482F] sm:text-xs">
            ✨ Un día para celebrar
          </p>

          <h2
            className="mt-5 text-[clamp(2.7rem,9vw,4.5rem)] leading-tight tracking-[-0.05em] text-[#171512]"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            Itinerario
          </h2>

          <div
            className="mx-auto mt-8 h-px w-20 bg-[#60482F]"
            aria-hidden="true"
          />
        </motion.header>

        <div className="relative mx-auto mt-14 max-w-2xl sm:mt-20">
          {/* Línea continua del itinerario */}
          <div
            className="absolute bottom-10 left-[6px] top-3 w-px bg-[#846B4F] sm:left-[91px]"
            aria-hidden="true"
          />

          <div className="space-y-9 sm:space-y-12">
            {eventos.map((evento, index) => (
              <motion.article
                key={evento.hora}
                {...animacion}
                transition={{
                  duration: 0.7,
                  delay: Math.min(index * 0.07, 0.25),
                }}
                className="relative grid grid-cols-[20px_minmax(0,1fr)] gap-4 sm:grid-cols-[76px_20px_minmax(0,1fr)] sm:gap-5"
              >
                {/* Hora lateral en pantallas grandes */}
                <span
                  className="hidden pt-1 text-right text-lg font-medium text-[#60482F] sm:block"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  {evento.hora}
                </span>

                {/* Punto sobre la línea */}
                <span
                  className="relative z-10 mt-2 h-[13px] w-[13px] rounded-full border-[3px] border-[#F5EDE1] bg-[#60482F] ring-1 ring-[#60482F]"
                  aria-hidden="true"
                />

                <div className="border border-[#846B4F] bg-[#FFFEFB] px-5 py-6 shadow-[0_10px_30px_rgba(70,55,37,0.08)] sm:px-8 sm:py-8">
                  {/* Hora dentro de la tarjeta en celular */}
                  <p
                    className="text-lg font-medium text-[#60482F] sm:hidden"
                    style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                  >
                    {evento.hora}
                  </p>

                  <h3
                    className="mt-2 text-[1.65rem] leading-snug text-[#171512] sm:mt-0 sm:text-[1.9rem]"
                    style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                  >
                    {evento.titulo}
                  </h3>

                  {evento.lugar && (
                    <p className="mt-2 text-lg italic text-[#60482F]">
                      {evento.lugar}
                    </p>
                  )}

                  <p
                    className="mt-3 text-lg leading-relaxed text-[#302C27] sm:text-xl"
                    style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
                  >
                    {evento.descripcion}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          {...animacion}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-xl text-center"
        >
          <div
            className="mx-auto mb-8 h-px w-20 bg-[#60482F]"
            aria-hidden="true"
          />

          <h3
            className="text-2xl text-[#171512] sm:text-3xl"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            🤍 Gracias por celebrar con nosotros
          </h3>

          <p
            className="mt-5 text-xl leading-relaxed text-[#302C27] sm:text-2xl"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
          >
            Porque los momentos más importantes de la vida se vuelven aún más
            especiales cuando los compartimos con las personas que amamos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Itinerario2;