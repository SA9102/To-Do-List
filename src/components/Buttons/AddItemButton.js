import { useState } from "react"
import AddItemInputBox from "../AddItemInputBox"

export default function AddItemButton({id, onToggleAddItem, isAddingItem, onItemChange, itemValue, onAddItem}) {
    return (
        <>
            <button onClick={() => onToggleAddItem(id)}>{isAddingItem ? 'Stop Adding Items' : 'Add Items'}</button>
            {isAddingItem ? (<><AddItemInputBox id={id} value={itemValue} onItemChange={onItemChange} /><button onClick={() => onAddItem(id)}>Add</button></>) : (<></>)}
        </>
    )
}