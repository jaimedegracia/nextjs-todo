import Link from "next/link";

const NEXT_PUBLIC_BASE_URL="http://localhost:3000";

type TodoProps = {
    todos: {
      todo: string[];
    };
  };

export default async function Tododiff() {
  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/data`);
  
  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const todos = await res.json();
  
  return (
    <> 
    <header className="flex justify-between mb-4">
      <h1 className="text-2x1">TODO from API</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
    </header>
    <ul className="pl-4">
      {todos && todos.list.map((todo: string, index: number) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
    </>
  );
}