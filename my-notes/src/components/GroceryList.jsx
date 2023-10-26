const GroceryList = ({items, onDeleteItem}) => {
  return (
    <>
            <div className="list">
      <ul>
        {items.map((item) => (
        <Item item={item} key={item.id} onDeleteItem={onDeleteItem}/>
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
function Item ({item, onDeleteItem}) {
  return (
    <li key={item.id}>
        <input type="checkbox" checked="true" />
        <span style={item.checked ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.name}</span>
        <button onClick={()=> onDeleteItem(item.id)}>&times;</button>
      </li>
  )
}

export default GroceryList