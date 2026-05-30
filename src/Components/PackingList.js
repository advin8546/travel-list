import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onTogglePacked, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  function handleClearItems() {
    const confirmed = window.confirm("Clear the entire packing list?");
    if (confirmed) onClearItems();
  }

  let sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      {sortedItems.length > 0 ? (
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              key={item.id}
              onTogglePacked={onTogglePacked}
            />
          ))}
        </ul>
      ) : (
        <p className="empty-state">Add your first item to start planning.</p>
      )}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearItems}>Clear list</button>
      </div>
    </div>
  );
}
