export const CARDS = [
  '/ace.svg',
  '/astronaut-helmet.svg',
  '/badger.svg',
  '/barn-owl.svg',
  '/bowling-strike.svg',
  '/canadian-goose.svg',
  '/castle.svg',
  '/dwarf-face.svg',
  '/pig.svg',
  '/robe.svg',
  '/shark-bite.svg',
  '/telescope.svg',
  '/wolf-head.svg',
  '/gold-mine.svg',
  '/shambling-zombie.svg',
  '/fishing.svg',
  '/diamonds-smile.svg'
]

export function sortCards(cardQty) {
  return CARDS.sort(() => Math.random() - 0.5)
    .slice(0, cardQty / 2)
    .flatMap((img, index) => [
      { id: index + 'a', value: img },
      { id: index + 'b', value: img }
    ])
    .sort(() => Math.random() - 0.5)
}
export const HIDDEN_IMG = '/radar-sweep.svg'
