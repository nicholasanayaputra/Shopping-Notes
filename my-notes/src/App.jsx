import Header from "../src/components/Header"
import Form from "../src/components/Form"
import GroceryList from "../src/components/GroceryList"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
  <Header />
   <Form />
  <GroceryList />
    <Footer />
  </div>
  )
}

export  default App;