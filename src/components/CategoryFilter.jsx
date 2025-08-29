import { Search, Filter } from 'lucide-react';

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  search,
  onSearchChange,
  sort,
  onSortChange,
}) {
  return (
    <section id="browse" className="mt-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-xl font-semibold tracking-tight">Browse Cards</h2>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by name or set"
              className="w-full rounded-md border border-zinc-200 bg-white pl-9 pr-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300"
            />
          </div>
          <div className="relative">
            <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full appearance-none rounded-md border border-zinc-200 bg-white pl-9 pr-7 py-2 text-sm outline-none focus:border-zinc-300"
            >
              <option value="popular">Sort: Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={
              'rounded-full border px-3 py-1.5 text-sm transition ' +
              (selectedCategory === cat
                ? 'border-zinc-900 bg-zinc-900 text-white'
                : 'border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50')
            }
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
