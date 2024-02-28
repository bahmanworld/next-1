import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='text-3xl'>Home Page</div>
        <Link href={"/about"}>Go About Page from Gihub Codespaces</Link>
    </main>
  );
}
