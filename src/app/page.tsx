'use client';

import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setSearch('');
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={search}
          placeholder="Anime girl with blue hair..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-neutral-800 border border-neutral-800 rounded-sm px-5 py-2 outline-none text-sm"
        />
        <button type="submit" className="bg-white text-black rounded-sm p-2 text-sm">
          Generate
        </button>
      </form>
    </main>
  );
}
