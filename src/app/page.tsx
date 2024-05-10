"use client";

import Spinner from "@/components/Spinner";
import Link from "next/link";
import React from "react";
export default function Home() {
  const [loading, setLoading] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-3">
      <div className="text-3xl">Home Page</div>
      <button
        className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => {
          setLoading(true);
          fetch("/api/movie/new")
            .then((res) => res.json())
            .then((res) => console.log(res))
            .finally(() => setLoading(false));
        }}
      >
        {loading && <Spinner />}
        Create New Movie
      </button>
      <Link href={"/about"}>About page</Link>
    </main>
  );
}
