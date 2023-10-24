const groceryItems = [
  {
    id: 1,
    name: 'Coffee',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Sugar',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Water',
    quantity: 3,
    checked: false,
  },
];



const GroceryList = () => {
  return (
    <>
            <div className="list">
      <ul>
        {groceryItems.map((item) => (
        <li key={item.id}>
        <input type="checkbox" checked="true" />
        <span style={item.checked ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.name}</span>
        <button>&times;</button>
      </li>
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

export default GroceryList