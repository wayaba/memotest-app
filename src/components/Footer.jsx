export function Footer({ author, github }) {
  return (
    <footer className="bottom-0 left-0 right-0 block pb-20 mt-10 text-center animate-delay-1000 opacity-60 text-white/80">
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
