import React from "react";

export default function Portada() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-16 text-center"
      style={{
        background:
          "radial-gradient(circle at 50% 38%, #FFFEFB 0%, #F5EDE1 65%, #E5D2B9 100%)",
        color: "#171512",
      }}
    >
      {/* Marcos decorativos */}
      <div
        className="pointer-events-none absolute inset-4 border sm:inset-7"
        style={{ borderColor: "#846B4F" }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-7 border sm:inset-10"
        style={{ borderColor: "rgba(92, 69, 46, 0.65)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <h1
          className="w-full text-[clamp(3.4rem,12vw,7.5rem)] font-normal leading-[1.25]"
          style={{
            fontFamily: '"Great Vibes", cursive',
            color: "#171512",
          }}
        >
          <span className="block">Karla Roset</span>

          <span
            className="my-1 block text-[0.72em]"
            style={{ color: "#60482F" }}
          >
            &
          </span>

          <span className="block">Juan Alejandro</span>
        </h1>

        <div
          className="my-9 h-px w-24 sm:my-12"
          style={{ backgroundColor: "#60482F" }}
          aria-hidden="true"
        />

        <p
          className="text-base font-semibold tracking-[0.12em] sm:text-2xl sm:tracking-[0.16em]"
          style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
        >
          05 DE DICIEMBRE DE 2026
        </p>
      </div>
    </section>
  );
}