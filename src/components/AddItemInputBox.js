
export default function AddItemInputBox({id, value, onItemChange}) {
    const placeholder = `Enter an item`
    return <input className='input-box' type='text' id={'item-input-box'} name={'item-input-box'} placeholder={placeholder} value={value} onChange={(e) => onItemChange(id, e.target.value)} />
}