export function Footer({ author, github }) {
  return (
    <footer className="block bottom-0 left-0 right-0 mt-10 pb-20 text-center opacity-60 animate-delay-1000 text-white/80">
      {' '}
      Memotest realizado por {author} &bull;{' '}
      <a
        className="text-white hover:underline"
        target="_blank"
        href={`https://github.com/${github}`}
      >
        Github
      </a>
    </footer>
  )
}
