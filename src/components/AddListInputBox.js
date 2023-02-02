export default function AddListInputBox({type, value, onChange}) {
    const placeholder = `Enter ${type}`
    return <input className='input-box' type='text' id={type} name={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
}