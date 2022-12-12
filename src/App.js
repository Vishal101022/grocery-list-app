import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItems from "./AddItems";
import SearchItems from "./SearchItems";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(
    //retrive initial localStorage data
    JSON.parse(localStorage.getItem("grocerylist"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems); // updating data
    // save updated data into localStorage
    localStorage.setItem("grocerylist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    // add new item at end of list
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // creating object
    const myNewItem = { id, checked: false, item };
    // merge old items with new items
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    // prevent default submit
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    // reset submit input
    setNewItem("");
  };

  return (
    <div className='App'>
      <Header title='Grocery List' />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
