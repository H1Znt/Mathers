import comparer from '../comparer'

const players = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

const comparerPlayers = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

test('comparer for players health', () => {
  const result = comparer(players);
  expect(result).toEqual(comparerPlayers)
})