'use client';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io(' http://localhost:3001');

export default function Home() {
  const [input, setInput] = useState('');

  useEffect(
    () => () => {
      socket.on('connect', () => {
        console.log('connected');
      });

      socket.on('update-input', (msg) => {});
    },
    []
  );

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    socket.emit('input-change', e.target.value);
  };

  return (
    <main className='w-full bg-slate-300 h-full'>
      this is main page
      <input
        placeholder='Type something'
        value={input}
        onChange={onChangeHandler}
      />
    </main>
  );
}
