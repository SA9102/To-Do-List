export default function DeleteListButton({id, onClick}) {
    return (<button className='button delete' onClick={() => onClick(id)}>Delete List</button>)
}