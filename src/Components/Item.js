export function Item({ item, handleDel, handlePac }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handlePac(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDel(item.id)}>❌</button>
    </li>
  );
}
