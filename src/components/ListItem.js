export default function ListItem({listId, itemId, item, onToggleCheck, isChecked}) {
    return (
        <>
            <input type='checkbox' value={item} name={item} checked={isChecked} onClick={() => onToggleCheck(listId, itemId)} />
            <label for={item}>{item}</label>
            <br />
        </>
    )
}