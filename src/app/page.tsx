"use client";

import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-3xl">Home Page</div>
      <button
        onClick={() => {
          fetch("/api/movie/new")
            .then((res) => res.json())
            .then((res) => console.log(res));
        }}
      >
        Create New Movie
      </button>
    </main>
  );
}
