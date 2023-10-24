import { useState } from "react";

const Form = () => {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    alert(quantity)
  }

  const quantityNum = [...Array(20)].map((val, i) => (
    <option value={ i + 1 } key={ i + 1 }>{ i + 1 }</option>
  ));

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are we shopping for today??</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>{quantityNum}</select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button>Add</button>
    </form>
    </>
  )
}

export default Form