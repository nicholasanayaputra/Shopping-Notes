const Footer = ({items}) => {

  if(items.length === 0) return     <footer className="stats">
  Your shopping list is still empty</footer>

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);


  return (
    <>
    <footer className="stats">There are {totalItems} items on the shopping list, {checkedItems} items have already been purchased({percentage}%)</footer>
    </>
  )
}

export default Footer