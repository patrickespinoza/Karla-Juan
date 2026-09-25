import React from "react";

export default function Portada() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-16 text-center"
      style={{
        background:
          "radial-gradient(circle at 50% 35%, #FFFDF9 0%, #F8F3EA 55%, #EEE3D3 100%)",
        color: "#302C27",
      }}
    >
      {/* Marcos delicados */}
      <div
        className="pointer-events-none absolute inset-4 border sm:inset-7"
        style={{ borderColor: "#D8C7AD" }}
      />
      <div
        className="pointer-events-none absolute inset-7 border sm:inset-10"
        style={{ borderColor: "rgba(216, 199, 173, 0.45)" }}
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <h1
          className="text-[clamp(3.1rem,11vw,6.5rem)] leading-[1.12] tracking-[-0.055em]"
          style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
        >
          Karla Roset
          <span
            className="my-2 block text-[0.65em] italic"
            style={{ color: "#AA9578" }}
          >
            &
          </span>
          Juan Alejandro
        </h1>

        <div
          className="my-9 h-px w-20 sm:my-12"
          style={{ backgroundColor: "#BDA889" }}
          aria-hidden="true"
        />

        <p
          className="text-lg tracking-[0.15em] sm:text-2xl"
          style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
        >
          05 DE DICIEMBRE DE 2026
        </p>
      </div>
    </section>
  );
}