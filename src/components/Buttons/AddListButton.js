export default function AddButton({text, onAddList, info}) {
    return (<button className='button add' onClick={onAddList}>{text}</button>)
};