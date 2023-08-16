"use client";

import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<number>(() => sessionStorage);
const counter = atomWithStorage("counter", 0, storage);

export default function Home() {
  const [count, setCount] = useAtom(counter);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main>
      <p>{count}</p>
      <button onClick={onClick}>+1</button>
      <button onClick={() => setCount(0)}>reset</button>
    </main>
  );
}
