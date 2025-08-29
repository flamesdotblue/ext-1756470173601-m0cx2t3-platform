import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-pink-100/40 to-sky-100/50" />
      <div className="relative z-10 grid gap-6 p-8 md:grid-cols-2 md:p-12">
        <div className="flex flex-col justify-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 w-max">
            <Rocket className="h-3.5 w-3.5" />
            New drops weekly
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Catch rare Pokémon cards, trade securely, and build your dream deck
          </h1>
          <p className="mt-3 max-w-prose text-zinc-600">
            Explore authentic listings with transparent pricing. Buy, sell, and trade from a curated selection of classic and modern sets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#browse" className="inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">Shop now</a>
            <a href="#trade" className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50">Start a trade</a>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <div className="relative aspect-[4/5] w-72 sm:w-80 md:w-96">
            <img
              src="https://images.pokemontcg.io/base1/4_hires.png"
              alt="Featured Charizard"
              className="absolute left-6 top-6 w-40 rotate-[-8deg] rounded-xl shadow-2xl ring-1 ring-black/5 sm:w-48 md:w-56"
            />
            <img
              src="https://images.pokemontcg.io/base1/2_hires.png"
              alt="Featured Blastoise"
              className="absolute right-6 bottom-6 w-40 rotate-[10deg] rounded-xl shadow-2xl ring-1 ring-black/5 sm:w-48 md:w-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
