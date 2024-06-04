import { cn } from "./lib/cn";

type Color = "red" | "blue";

export default function Home() {
  const color: Color = "red" as Color;

  return (
    <main
      className={cn(
        "overflow-auto min-h-screen grid place-items-center text-3xl text-white",
        {
          "bg-red-500": color === "red",
          "bg-blue-500": color === "blue",
        }
      )}
    >
      <div className="flex flex-col items-center gap-8 m-6">
        <h1 className="uppercase font-bold">{color}</h1>
        <p>{process.env.NEXT_PUBLIC_GIT_HASH}</p>
      </div>
    </main>
  );
}
