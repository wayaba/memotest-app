export const CARDS = [
  'https://icongr.am/feather/bell.svg?size=128&color=ccda0b',
  'https://icongr.am/feather/droplet.svg?size=128&color=0bb8da',
  'https://icongr.am/feather/github.svg?size=128&color=000005',
  'https://icongr.am/feather/moon.svg?size=128&color=6565c3',
  'https://icongr.am/feather/smile.svg?size=128&color=db7448',
  'https://icongr.am/feather/truck.svg?size=128&color=ee202a'
]
  .flatMap((img, index) => [
    { id: index + 'a', value: img },
    { id: index + 'b', value: img }
  ])
  .sort(() => Math.random() - 0.5)

export const HIDDEN_IMG =
  'https://icongr.am/feather/cpu.svg?size=128&color=020005'
