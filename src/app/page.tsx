"use client";

import React from "react";
import { Movie } from "@prisma/client";

export default function Home() {
  const [movie, setMovie] = React.useState<Movie | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  console.log("New Movie:", movie)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-3xl">Home Page</div>
      <button
        onClick={() => {
          setLoading(true);
          fetch("/api/movie/create")
            .then((res) => res.json())
            .then(setMovie)
            .finally(() => setLoading(false));
        }}
      >
        Create New Movie
      </button>
      <div>{loading ? "loading..." : movie?.name}</div>
    </main>
  );
}
