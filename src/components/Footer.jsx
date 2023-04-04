export function Footer({ author, github }) {
  return (
    <footer className="text-xs bottom-0 left-0 right-0 2xl:mt-10 2xl:pb-20 lg:mt-3  md:mt-3 md:pb-2 mt-10 pb-5 text-center opacity-60  text-white/80">
      {' '}
      Desarrollado por{' '}
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
