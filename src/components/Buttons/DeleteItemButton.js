export default function DeleteItemButton({listId, itemId, onDeleteItem}) {
    return <button onClick={() => onDeleteItem(listId, itemId)} className='button delete'>Delete Item</button>
}