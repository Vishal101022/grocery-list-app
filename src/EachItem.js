import { FaTrashAlt } from "react-icons/fa";
// component that responsible for each-
// checkbox operation 
// delete operation

const EachItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
      <input
        type='checkbox'
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' />
    </li>
  );
};

export default EachItem;
