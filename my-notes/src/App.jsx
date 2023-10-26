import Header from "../src/components/Header"
import Form from "../src/components/Form"
import GroceryList from "../src/components/GroceryList"
import Footer from "./components/Footer";
import { useState } from "react";

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
  {
    id: 4,
    name: 'Juice',
    quantity: 6,
    checked: true,
  },
];
function App() {

  const [items, setItems] = useState(groceryItems)

  function handleAddItem (item) {
    setItems([...items, item]);
  }

  function handleDeleteItem (id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem (id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
  }

  function handleClearItems () {
    setItems([]);
  }

  return (
    <div className="app">
  <Header />
   <Form onAddItem={handleAddItem} />
  <GroceryList items = {items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
    <Footer />
  </div>
  )
}

export  default App;