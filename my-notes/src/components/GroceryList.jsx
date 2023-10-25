const GroceryList = ({items}) => {
  return (
    <>
            <div className="list">
      <ul>
        {items.map((item) => (
        <Item item={item} key={item.id}/>
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
function Item ({item}) {
  return (
    <li key={item.id}>
        <input type="checkbox" checked="true" />
        <span style={item.checked ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.name}</span>
        <button>&times;</button>
      </li>
  )
}

export default GroceryList