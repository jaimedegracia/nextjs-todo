import { prisma } from "@/db";
import Link from "next/link";



export default async function Home() {
  //await prisma.todo.create({data: {title: "Hello world", complete: false}})

  const todos = await prisma.todo.findMany();
  console.log("todos");
  console.log(todos);

  return (
    <> 
    <header className="flex justify-between mb-4">
      <h1 className="text-2x1">TODO</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/tododiff">From API</Link>
    </header>
    <ul className="pl-4">
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    </>
  );
}