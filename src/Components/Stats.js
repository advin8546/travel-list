export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to build your packing plan.</em>
      </p>
    );
  }

  const totalItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "Everything is packed. You are ready to go."
          : `You have ${totalItems} items on your list and ${numPacked} packed (${percentPacked}%).`}
      </em>
    </footer>
  );
}
