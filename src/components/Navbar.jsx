import { ShoppingCart, Shuffle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="logo" className="h-7 w-7" />
          <span className="text-lg font-semibold tracking-tight">PokéMarket</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <a href="#browse" className="text-sm text-zinc-600 hover:text-zinc-900">Browse</a>
          <a href="#trade" className="text-sm text-zinc-600 hover:text-zinc-900">Trade</a>
          <a href="#sell" className="text-sm text-zinc-600 hover:text-zinc-900">Sell</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50">
            <Shuffle className="h-4 w-4" />
            Trade
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
