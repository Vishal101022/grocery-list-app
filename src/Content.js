import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Content = () => {
  // hooks
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "salt 2 packet",
    },
    {
      id: 2,
      checked: false,
      item: "5 kilo rice",
    },
    {
      id: 3,
      checked: false,
      item: "2 eggs",
    },
  ]);

  const checkHandler = (id) => {
    // declarative approach for checkbox
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // storing data even if browser close
    localStorage.setItem("grocerylist", JSON.stringify(listItems));
  };

  const deleteHandler = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("grocerylist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? ( // condition for checking empty_list
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
                type='checkbox'
                onChange={() => checkHandler(item.id)}
                checked={item.checked}
              />

              <label
                // line-through when item is checked
                style={
                  item.checked ? { textDecoration: "line-through" } : null
                }>
                {item.item}
              </label>

              <FaTrash onClick={() => deleteHandler(item.id)} role='button' />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: "2rem" }}>List is Empty</p>
      )}
    </main>
  );
};

export default Content;
