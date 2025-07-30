import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold">404</h1>
        <h2 className="text-foreground mb-4 text-2xl font-semibold">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8">
          Извините, запрашиваемая страница не существует.
        </p>
        <Link
          href="/"
          className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center rounded-lg px-6 py-3 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
