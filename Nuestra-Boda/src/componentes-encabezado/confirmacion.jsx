import React, { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP = "522297689615";

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();
    const mensajeLimpio = mensaje.trim();
    const cantidad = Number(invitados);

    if (!nombreLimpio || !asistencia) {
      setError("Escribe tu nombre y selecciona si asistirás.");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (!Number.isInteger(cantidad) || cantidad < 1)
    ) {
      setError("Indica cuántas personas asistirán.");
      return;
    }

    setError("");

    const texto = [
      "Hola, quiero confirmar mi asistencia a la celebración de Karla Roset y Juan Alejandro.",
      "",
      `Nombre: ${nombreLimpio}`,
      `Asistencia: ${asistencia}`,
      ...(asistencia === "Sí asistiré"
        ? [`Número de personas: ${cantidad}`]
        : []),
      ...(mensajeLimpio ? [`Mensaje: ${mensajeLimpio}`] : []),
    ].join("\n");

    const enlace = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

    window.open(enlace, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="confirmacion"
      className="w-full bg-[#F5EDE1] px-5 py-20 text-[#171512] sm:px-8 sm:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-2xl border border-[#846B4F] bg-[#FFFEFB] px-6 py-14 text-center shadow-[0_18px_55px_rgba(70,55,37,0.12)] sm:px-12 sm:py-16"
      >
        <div
          className="pointer-events-none absolute inset-3 border border-[#A88C68]"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#60482F]">
            R · S · V · P
          </p>

          <h2
            className="mt-5 text-[clamp(2.4rem,8vw,4rem)] leading-tight tracking-[-0.05em] text-[#171512]"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            Confirma tu asistencia
          </h2>

          <div
            className="mx-auto my-7 h-px w-20 bg-[#60482F]"
            aria-hidden="true"
          />

          <p
            className="mx-auto max-w-md text-xl leading-relaxed text-[#302C27] sm:text-2xl"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
          >
            Nos encantará saber si podremos contar contigo para compartir este
            día tan especial.
          </p>

          <p className="mt-5 text-xl font-medium text-[#60482F]">
            Confirma antes del 15 de octubre de 2026.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5 text-left">
            <div>
              <label
                htmlFor="nombre-invitado"
                className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#302C27]"
              >
                Nombre y apellido
              </label>
              <input
                id="nombre-invitado"
                type="text"
                autoComplete="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
                className="w-full border border-[#846B4F] bg-[#FFFEFB] px-4 py-3.5 text-[#171512] outline-none placeholder:text-[#625A50] focus:border-[#60482F] focus:ring-1 focus:ring-[#60482F]"
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-xs uppercase tracking-[0.15em] text-[#302C27]">
                ¿Podrás acompañarnos?
              </legend>

              <div className="grid grid-cols-2 gap-3">
                {["Sí asistiré", "No asistiré"].map((opcion) => (
                  <button
                    key={opcion}
                    type="button"
                    onClick={() => {
                      setAsistencia(opcion);
                      setError("");
                    }}
                    aria-pressed={asistencia === opcion}
                    className={`min-h-12 border px-2 py-3 text-sm transition-colors sm:text-base ${
                      asistencia === opcion
                        ? "border-[#60482F] bg-[#60482F] text-white"
                        : "border-[#846B4F] bg-[#F5EDE1] text-[#171512] hover:bg-[#E8D9C4]"
                    }`}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </fieldset>

            {asistencia === "Sí asistiré" && (
              <div>
                <label
                  htmlFor="numero-invitados"
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#302C27]"
                >
                  Número de personas
                </label>
                <input
                  id="numero-invitados"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  value={invitados}
                  onChange={(e) => setInvitados(e.target.value)}
                  placeholder="Incluyéndote a ti"
                  className="w-full border border-[#846B4F] bg-[#FFFEFB] px-4 py-3.5 text-[#171512] outline-none placeholder:text-[#625A50] focus:border-[#60482F] focus:ring-1 focus:ring-[#60482F]"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="mensaje-invitado"
                className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#302C27]"
              >
                Mensaje opcional
              </label>
              <textarea
                id="mensaje-invitado"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={4}
                placeholder="Déjanos un mensaje"
                className="w-full resize-none border border-[#846B4F] bg-[#FFFEFB] px-4 py-3.5 text-[#171512] outline-none placeholder:text-[#625A50] focus:border-[#60482F] focus:ring-1 focus:ring-[#60482F]"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm font-medium text-[#9B3F3F]">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#60482F] px-5 py-4 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#44311F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60482F]"
            >
              Continuar en WhatsApp
            </button>

            <p className="text-center text-sm text-[#302C27]">
              Al abrir WhatsApp, pulsa Enviar para completar tu confirmación.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}