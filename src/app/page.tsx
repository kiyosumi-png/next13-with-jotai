"use client";

import { atom, useAtom } from "jotai";

const counter = atom(0);

export default function Home() {
  const [count, setCount] = useAtom(counter);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main>
      <p>{count}</p>
      <button onClick={onClick}>+1</button>
    </main>
  );
}
