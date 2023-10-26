const GroceryList = ({items, onDeleteItem, onToggleItem }) => {
  return (
    <>
            <div className="list">
      <ul>
        {items.map((item) => (
        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        ))}
      </ul>
    </div>
    <div className="actions">
      <select>
        <option value="input">Sort by input order</option>
        <option value="name">Sort by item name</option>
        <option value="checked">Sort by checklist</option>
      </select>
      <button>Clean List</button>
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