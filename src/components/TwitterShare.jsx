import { TwitterShareButton, TwitterIcon } from 'react-share'

const SHARE_URL = 'https://memotest-app.vercel.app'

export function TwitterShare({ time }) {
  const title = `!Gané! 🎊🎊\nMi tiempo fue de ${time.toFixed(
    2
  )} segundos ⌛\nAnimate a jugar a Memotest App en:\n
    `
  return (
    <TwitterShareButton title={title} url={SHARE_URL}>
      <div className="flex flex-auto border rounded-lg p-1 m-1 hover:bg-slate-500">
        <div className="m-1">Compartilo en</div>
        <TwitterIcon size={32} round />
      </div>
    </TwitterShareButton>
  )
}