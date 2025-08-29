import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import CardGrid from './components/CardGrid';

const initialCards = [
  {
    id: 'base1-4',
    name: 'Charizard',
    image: 'https://images.pokemontcg.io/base1/4_hires.png',
    price: 399.99,
    category: 'Holo Rare',
    set: 'Base Set',
  },
  {
    id: 'base1-2',
    name: 'Blastoise',
    image: 'https://images.pokemontcg.io/base1/2_hires.png',
    price: 179.0,
    category: 'Holo Rare',
    set: 'Base Set',
  },
  {
    id: 'base1-15',
    name: 'Venusaur',
    image: 'https://images.pokemontcg.io/base1/15_hires.png',
    price: 149.5,
    category: 'Holo Rare',
    set: 'Base Set',
  },
  {
    id: 'base1-10',
    name: 'Mewtwo',
    image: 'https://images.pokemontcg.io/base1/10_hires.png',
    price: 89.99,
    category: 'Holo Rare',
    set: 'Base Set',
  },
  {
    id: 'base1-58',
    name: 'Pikachu',
    image: 'https://images.pokemontcg.io/base1/58_hires.png',
    price: 12.0,
    category: 'Common',
    set: 'Base Set',
  },
  {
    id: 'base1-25',
    name: 'Machamp',
    image: 'https://images.pokemontcg.io/base1/8_hires.png',
    price: 39.0,
    category: 'Holo Rare',
    set: 'Base Set',
  },
  {
    id: 'base1-76',
    name: 'Switch',
    image: 'https://images.pokemontcg.io/base1/95_hires.png',
    price: 3.5,
    category: 'Trainer',
    set: 'Base Set',
  },
  {
    id: 'base1-97',
    name: 'Fire Energy',
    image: 'https://images.pokemontcg.io/base1/97_hires.png',
    price: 1.25,
    category: 'Energy',
    set: 'Base Set',
  },
  {
    id: 'base1-98',
    name: 'Water Energy',
    image: 'https://images.pokemontcg.io/base1/102_hires.png',
    price: 1.2,
    category: 'Energy',
    set: 'Base Set',
  },
  {
    id: 'base1-44',
    name: 'Arcanine',
    image: 'https://images.pokemontcg.io/base1/23_hires.png',
    price: 7.75,
    category: 'Uncommon',
    set: 'Base Set',
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular'); // 'popular' | 'price-asc' | 'price-desc'

  const categories = useMemo(() => {
    const setCats = new Set(['All']);
    initialCards.forEach((c) => setCats.add(c.category));
    return Array.from(setCats);
  }, []);

  const filtered = useMemo(() => {
    let data = [...initialCards];
    if (selectedCategory !== 'All') {
      data = data.filter((c) => c.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      data = data.filter((c) => c.name.toLowerCase().includes(q) || c.set.toLowerCase().includes(q));
    }
    if (sort === 'price-asc') data.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') data.sort((a, b) => b.price - a.price);
    return data;
  }, [selectedCategory, search, sort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          search={search}
          onSearchChange={setSearch}
          sort={sort}
          onSortChange={setSort}
        />
        <CardGrid cards={filtered} />
      </main>
      <footer className="mt-16 border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} PokéMarket • Buy, sell, and trade safely
      </footer>
    </div>
  );
}
