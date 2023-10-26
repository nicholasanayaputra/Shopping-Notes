import { useState } from "react"

const GroceryList = ({items, onDeleteItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;


  switch(sortBy) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked':
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked );
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
            <div className="list">
      <ul>
        {sortedItems.map((item) => (
        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} onClearItems={onClearItems}/>
        ))}
      </ul>
    </div>
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="name">Sort by item name</option>
        <option value="checked">Sort by checklist</option>
      </select>
      <button onClick={onClearItems}>Clean List</button>
    </div>

    </>
  )
}
function Item ({item, onDeleteItem, onToggleItem}) {
  return (
    <li key={item.id}>
        <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
        <span style={item.checked ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.name}</span>
        <button onClick={()=> onDeleteItem(item.id)}>&times;</button>
      </li>
  )
}

export default GroceryList