import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold">404</h1>
        <h2 className="text-foreground mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">Sorry, the requested page does not exist.</p>
        <Link
          href="/"
          className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center rounded-lg px-6 py-3 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
