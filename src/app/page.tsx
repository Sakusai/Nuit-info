"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[url('/img/background.svg')] bg-cover bg-center text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          En apprendre <span className="text-[hsl(280,100%,70%)]">plus</span>
        </h1>
        <h2 className="text-lg text-center max-w-lg">
          À propos de nous et des océans. Nous sommes l'équipe <b>EKIP</b>, et en collaboration avec la <a href="https://www.raceforwater.org/" className="link" target="_blank" rel="noopener noreferrer">Fondation Race for Water</a>, nous avons créé ce site pour vous aider à en apprendre davantage sur les océans et le corps humain.
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {/* Section Corps Humain */}
          <div className="flex max-w-md flex-col items-center gap-4 rounded-xl bg-white/10 p-6 text-center text-white hover:bg-white/20">
            <h2 className="text-3xl font-bold">Corps Humain</h2>
            <p className="text-lg">
              Découvrez les merveilles du corps humain, ses systèmes et son
              fonctionnement.
            </p>
            <Link
              href="/corps-humain"
              className="mt-4 rounded bg-[hsl(280,100%,70%)] px-6 py-2 text-lg font-semibold text-white hover:bg-[hsl(280,80%,60%)]"
            >
              En savoir plus
            </Link>
          </div>

          {/* Section Océan */}
          <div className="flex max-w-md flex-col items-center gap-4 rounded-xl bg-white/10 p-6 text-center text-white hover:bg-white/20">
            <h2 className="text-3xl font-bold">Océan</h2>
            <p className="text-lg">
              Plongez dans les merveilles de l&apos;océan, explorez ses
              profondeurs et sa vie marine.
            </p>
            <Link
              href="/ocean"
              className="mt-4 rounded bg-[hsl(280,100%,70%)] px-6 py-2 text-lg font-semibold text-white hover:bg-[hsl(280,80%,60%)]"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
