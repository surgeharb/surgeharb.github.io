import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-28">
      <p className="font-mono text-sm text-primary">{'// 404'}</p>
      <h1 className="mt-6 text-4xl font-bold">Page not found.</h1>
      <p className="mt-6 text-muted-foreground">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-block rounded border px-5 py-3 font-mono text-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Back to Serge Harb</Link>
    </main>
  );
}
