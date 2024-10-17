export default function comparer (players) {
  const arr = players.toSorted((a, b) => {
    return b.health-a.health;
  });
  return arr
}