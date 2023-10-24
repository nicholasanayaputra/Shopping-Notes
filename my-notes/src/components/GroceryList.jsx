const GroceryList = () => {
  return (
    <>
            <div className="list">
      <ul>
        <li>
          <input type="checkbox" checked="true" />
          <span className="span-1">1 Kopi</span>
          <button>&times;</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>5 Gula Pasir</span>
          <button>&times;</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>3 Air Mineral</span>
          <button>&times;</button>
        </li>
      </ul>
    </div>
    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
    </>
  )
}

export default GroceryList