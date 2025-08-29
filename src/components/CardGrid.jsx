import { ShoppingCart, Shuffle } from 'lucide-react';

function CardItem({ card }) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={card.image}
          alt={card.name}
          className="mx-auto h-56 w-auto object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium leading-tight">{card.name}</h3>
          <p className="text-xs text-zinc-500">{card.set} • {card.category}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-zinc-500">Price</div>
          <div className="text-base font-semibold">${card.price.toFixed(2)}</div>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">
          <ShoppingCart className="h-4 w-4" />
          Buy
        </button>
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50">
          <Shuffle className="h-4 w-4" />
          Trade
        </button>
      </div>
    </div>
  );
}

export default function CardGrid({ cards }) {
  return (
    <section className="mt-6" aria-live="polite">
      {cards.length === 0 ? (
        <div className="rounded-lg border border-zinc-200 bg-white p-10 text-center text-zinc-600">
          No cards match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      )}
    </section>
  );
}
