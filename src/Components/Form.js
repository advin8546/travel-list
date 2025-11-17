import { useState } from "react";

export default function Form({ handle }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    //the above func is javascript and prevents screen flash.
    if (!description) return;
    const item = { description, quantity, packed: false, id: Date.now() };
    handle({ item });
    //console.log(item);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {
        // we need to add  the onSubmit to forms and not to button,
        // cause then, the enter button would not work after we placed out text in the placeholder,
        // Only the add button would work!
      }
      <h3> What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
