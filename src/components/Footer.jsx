export function Footer({ author, github }) {
  return (
    <footer className=" bottom-0 left-0 right-0 mt-10 pb-20 text-center opacity-60  text-white/80">
      {' '}
      Memotest realizado por{' '}
      <a
        className="text-white hover:underline"
        target="_blank"
        href={`mailto:pabloj.pedraza@gmail.com`}
      >
        {author}
      </a>{' '}
      &bull;{' '}
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
