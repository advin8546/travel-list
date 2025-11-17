export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const itemsL = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const V = Math.round((numPacked / itemsL) * 100);
  return (
    <footer className="stats">
      <em>
        {V === 100
          ? "You got everything! Ready to go ✈️"
          : `💼You have
        ${items.length} items on your list, and you already packed
        ${numPacked} (${V})%`}
      </em>
    </footer>
  );
}
