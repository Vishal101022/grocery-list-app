import EachItem from "./EachItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className='itemlist'>
      {items.map((item) => (
        <EachItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
