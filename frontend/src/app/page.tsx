'use client';

import ReactQueryProvider from './ReactQueryProvider';

export default function Home() {
  return (
    <ReactQueryProvider>
      <main className='w-full bg-slate-300 h-full'>main</main>
    </ReactQueryProvider>
  );
}
